<h1 align="center">CONFAB</h1>
<br>

DIRECTORY STRUCTURE
-------------------

                    ./app/ - Contains webpack skeleton
      ./docker-compose.yml - Ready to use docker-compose
                ./Makefile - List of available webpack-app commands

# QUICK START

1. Install [docker](https://docs.docker.com/engine/install/ubuntu/).
2. Install [docker-compose](https://docs.docker.com/compose/install/).
3. Add **docker** in [sudo group](https://stackoverflow.com/a/48957722/11419254), perform ALL steps except the fourth.

INSTALL
----------------
```
make init
```

COMMAND
----------------
```
make up/down - Up/Down docker containers
make init    - Initialization and raising of the finished web project
make help    - List of available make-commands
```