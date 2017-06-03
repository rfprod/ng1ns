#!/bin/bash
NAME=`whoami`

pkill -f http-server

#
#	TODO
#	replace "ruser" with proper user name for development environment
#
if [ $NAME = "ruser" ];then
	echo "development env"
	http-server -a localhost -p 7070 -c-1 ./app
else
	echo "production env"
	#
	#	TODO
	#	replace 127.0.0.1 with proper IP address
	#
	http-server -a 127.0.0.1 -p 7070 -c-1 ./app
fi
