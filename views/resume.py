#!/usr/bin/env python
# -*- coding: utf-8 -*-

from flask import Blueprint, render_template, abort, request, redirect, url_for, current_app
from model import ClientConnection
from utils import locate_ip
import datetime
import requests

blueprint = Blueprint('resume', __name__)


def register_ip(ip):
    if current_app.debug:
        ip = current_app.config.get('DEBUG_IP', '127.0.0.1')
    if ip == '127.0.0.1':
        return
    last_connection = ClientConnection.objects.filter(ip=ip).order_by('-date').first()
    now = datetime.datetime.now()
    if last_connection and now - last_connection.date < datetime.timedelta(hours=1):
        return
    v = locate_ip(ip)
    values = {'ip': ip}
    if v is not None:
        values.update(v)
    connection = ClientConnection(**values)
    connection.save()


@blueprint.route('/', methods=['POST'])
def root():
    if request.form['g-recaptcha-response'] or current_app.debug:
        data = {
            'secret': current_app.config['RECAPTCHA_SECRET'],
            'response': request.form['g-recaptcha-response'],
            'remoteip': request.remote_addr
        }
        response = requests.post('https://www.google.com/recaptcha/api/siteverify', data=data)
        no_robot = response.status_code == 200 and response.json().get('success', False)
        if no_robot or current_app.debug:
            register_ip(request.remote_addr)
            return redirect(url_for('static', filename='resume.html'))
    abort(404)


@blueprint.route('/printable/', methods=['GET'])
def printable_resume():
    import jsonpickle
    import calendar
    with open('static/resume.json') as json:
        data = jsonpickle.decode(json.read())
        extra = {
            'month_name': calendar.month_name[datetime.datetime.now().month],
            'year': str(datetime.datetime.now().year)
        }
        data.update(extra)
        return render_template('printable_resume.html', **data)