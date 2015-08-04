#!/usr/bin/env python
# -*- coding: utf-8 -*-

import requests


def locate_ip(ip):
    try:
        r = requests.get('http://ip-api.com/json/' + ip)
        json = r.json()
        if json['status'] == 'success':
            return json
    except Exception:
        pass
    return None