#!/usr/bin/env python
# -*- coding: utf-8 -*-

from webpage import app
from flask_debugtoolbar import DebugToolbarExtension

if __name__ == '__main__':
    app.debug = True
    app.config['SECRET_KEY'] = 'dt'
    # DebugToolbarExtension(app)
    app.run()
