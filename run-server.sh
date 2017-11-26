#!/bin/bash

pkill -f http-server

npx http-server -a localhost -p 7070 -c-1 ./app
