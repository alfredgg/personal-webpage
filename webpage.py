#!/usr/bin/env python
# -*- coding: utf-8 -*-


from flask import Flask, url_for, redirect, request
from flask.ext.mongoengine import MongoEngine
from utils import locate_ip
import arrow
import datetime


app = Flask(__name__)
app.config.from_object('config.default')
app.config.from_envvar('PERSONAL_WEBPAGE_SETTINGS', silent=True)       # config/dev.py
db = MongoEngine(app)

from model import ClientConnection


def register_ip(ip):
    if app.debug:
        ip = app.config.get('DEBUG_IP', '127.0.0.1')
    if ip == '127.0.0.1':
        return
    connections = ClientConnection.objects.filter(ip=ip).all()
    now = arrow.utcnow().datetime.replace(tzinfo=None)
    connections = [c for c in connections]
    if connections and now - connections[-1].date.replace(tzinfo=None) < datetime.timedelta(hours=1):
        return
    v = locate_ip(ip)
    values = {'ip': ip}
    if v is not None:
        values.update(v)
    values.update(v)
    connection = ClientConnection(**values)
    connection.save()


@app.route('/')
def root():
    register_ip(request.remote_addr)
    return redirect(url_for('static', filename='resume.html'))
