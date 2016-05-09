#!/usr/bin/env python
# -*- coding: utf-8 -*-


from flask import Flask, render_template
from flask.ext.mongoengine import MongoEngine

app = Flask(__name__)
app.config.from_object('config.default')
app.config.from_envvar('PERSONAL_WEBPAGE_SETTINGS', silent=True)       # config/dev.py

db = MongoEngine(app)


@app.route('/', methods=['GET'])
def root():
    return render_template('watch.html')


@app.route('/login')
def login():
    pass

from views import resume

app.register_blueprint(resume.blueprint, url_prefix='/resume')
