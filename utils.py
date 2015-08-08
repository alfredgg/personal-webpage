#!/usr/bin/env python
# -*- coding: utf-8 -*-

import requests


def locate_ip(ip):
    try:
        r = requests.get('http://ip-api.com/json/' + ip)
        json = r.json()
        if json['status'] == 'success':
            json['aka'], json['region'] = json['as'], json['regionName']
            json['lat'], json['lon'] = str(json['lat']), str(json['lon'])
            non_wanted_keys = ('as', 'countryCode', 'org', 'query', 'status', 'regionName', 'timezone', 'zip')
            for k in non_wanted_keys:
                del json[k]
            return json
    except Exception:
        pass
    return None