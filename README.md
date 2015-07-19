# personal-webpage
My personal webpage

## To host it in a Gunicorn server

    gunicorn -w 4 webpage:app -b 0.0.0.0:8888
    
   