# personal-webpage
My personal webpage, hosted on [http://alfred.is-a-rockstar.com](http://alfred.is-a-rockstar.com).

## To host it in a Gunicorn server

    gunicorn -w 4 webpage:app -b 0.0.0.0:8888
    
## To install dependences

    pip install -r requirements.txt
    
## To change the config file

You should change the PERSONAL_WEBPAGE_SETTINGS environtment variable value by: config/dev.py
