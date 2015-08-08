#!/usr/bin/env python
# -*- coding: utf-8 -*-

from webpage import db
import arrow


class ClientConnection(db.Document):
    date = db.DateTimeField(default=arrow.utcnow().datetime)
    ip = db.StringField(max_length=15)
    country = db.StringField(max_length=100)
    region = db.StringField(max_length=100)
    city = db.StringField(max_length=100)
    lat = db.StringField(max_length=15)
    lon = db.StringField(max_length=15)
    isp = db.StringField(max_length=100)
    aka = db.StringField(max_length=100)