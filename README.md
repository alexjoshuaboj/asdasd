# PASOS A SEGUIR 

## Connect heroku

    $ heroku login 

## Create a new Git repository

    $ cd {YOUR APP NAME}/
    $ git init
    $ heroku git:remote -a {YOUR APP NAME}

## Deploy your application

    $ git add .
    $ git commit -am "make it better"
    $ git push heroku main