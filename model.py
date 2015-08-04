#!/usr/bin/env python
# -*- coding: utf-8 -*-

from webpage import db


class ClientConnection(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.DateTime())
    ip = db.Column(db.String(15))
    country = db.Column(db.String(100))
    region = db.Column(db.String(100))
    city = db.Column(db.String(100))
    lat = db.Column(db.String(15))
    lon = db.Column(db.String(15))
    isp = db.Column(db.String(100))
    aka = db.Column(db.String(100))
