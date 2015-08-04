#!/usr/bin/env python
# -*- coding: utf-8 -*-


from flask import Flask, url_for, redirect, request
from flask.ext.sqlalchemy import SQLAlchemy
from utils import locate_ip
import arrow
import datetime

app = Flask(__name__)
app.config.from_object('config')
db = SQLAlchemy(app)

from model import ClientConnection


def register_ip(ip):
    if ip == '127.0.0.1':
        return
    last_connection = ClientConnection.query.filter_by(ip=ip).all()
    now = arrow.utcnow().datetime.replace(tzinfo=None)
    if last_connection and now - last_connection[-1].date.replace(tzinfo=None) < datetime.timedelta(hours=1):
        return
    v = locate_ip(ip)
    connection = ClientConnection(
        date=arrow.utcnow().datetime,
        ip=ip,
        country=v['country'],
        region=v['region'],
        city=v['city'],
        lat=v['lat'],
        lon=v['lon'],
        isp=v['isp'],
        aka=v['as']
    )
    db.session.add(connection)
    db.session.commit()

@app.route('/')
def root():
    register_ip(request.remote_addr)
    return redirect(url_for('static', filename='resume.html'))
