#!/usr/bin/env python
# -*- coding: utf-8 -*-

from webpage import db
import datetime


class ClientConnection(db.Document):
    date = db.DateTimeField(default=datetime.datetime.now)
    ip = db.StringField(max_length=15)
    country = db.StringField(max_length=100)
    region = db.StringField(max_length=100)
    city = db.StringField(max_length=100)
    lat = db.StringField(max_length=15)
    lon = db.StringField(max_length=15)
    isp = db.StringField(max_length=100)
    aka = db.StringField(max_length=100)