# personal-webpage
My personal webpage, hosted on [http://alfred.is-a-rockstar.com](http://alfred.is-a-rockstar.com).

## To host it in a Gunicorn server

    gunicorn -w 4 webpage:app -b 0.0.0.0:8888
    
  