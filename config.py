#!/usr/bin/env python
# -*- coding: utf-8 -*-

import os
basedir = os.path.abspath(os.path.dirname(__file__))

SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(basedir, 'web.db')
