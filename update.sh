#!/bin/bash

echo Updating website...

if [ "$1" == "backend" ]; then
  docker-compose stop backend
  git pull
  docker-compose up -d --build --no-deps backend
elif [ "$1" == "frontend" ]; then
  docker-compose stop frontend
  git pull
  docker-compose up -d --build --no-deps frontend
elif [ "$1" == "nginx" ]; then
  docker-compose stop nginx
  git pull
  docker-compose up -d --build --no-deps nginx
else
  docker-compose stop
  git pull
  docker-compose up -d --build
fi

echo Update finished!