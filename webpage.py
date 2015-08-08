#!/usr/bin/env python
# -*- coding: utf-8 -*-


from flask import Flask, url_for, redirect, request, abort, render_template
from flask.ext.mongoengine import MongoEngine
from utils import locate_ip
import arrow
import datetime
import requests

app = Flask(__name__, static_url_path='')
app.config.from_object('config.default')
app.config.from_envvar('PERSONAL_WEBPAGE_SETTINGS', silent=True)       # config/dev.py
db = MongoEngine(app)

from model import ClientConnection


def register_ip(ip):
    if app.debug:
        ip = app.config.get('DEBUG_IP', '127.0.0.1')
    if ip == '127.0.0.1':
        return
    last_connection = ClientConnection.objects.filter(ip=ip).order_by('-date').first()
    now = arrow.utcnow().datetime.replace(tzinfo=None)
    if last_connection and now - last_connection.date < datetime.timedelta(hours=1):
        return
    v = locate_ip(ip)
    values = {'ip': ip}
    if v is not None:
        values.update(v)
    values.update(v)
    connection = ClientConnection(**values)
    connection.save()


@app.route('/', methods=['GET', 'POST'])
@app.route('/resume', methods=['GET', 'POST'])
def root():
    if request.method == 'GET':
        return render_template('watch.html')
    elif request.method == 'POST':
        data = {
            'secret': app.config['RECAPTCHA_SECRET'],
            'response': request.form['g-recaptcha-response'],
            'remoteip': request.remote_addr
        }
        response = requests.post('https://www.google.com/recaptcha/api/siteverify', data=data)
        if response.status_code == 200:
            register_ip(request.remote_addr)
            return redirect(url_for('static', filename='resume.html'))
    abort(404)


@app.route('/login')
def login():
    pass