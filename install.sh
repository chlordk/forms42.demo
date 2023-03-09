#! /bin/bash
# vim: ts=4 :
#set -x
set -e

if ! which git > /dev/null
then
	echo Install git
	sudo apt install git
fi

if ! which unzip > /dev/null
then
	echo Install unzip
	sudo apt install unzip
fi

if ! which npm > /dev/null
then
	echo Install npm
	sudo apt install npm
fi

if ! which java > /dev/null
then
	echo Install Java
	sudo apt install openjdk-17-jre-headless
fi

if ! which psql > /dev/null
then
	echo Install PostgreSQL
	sudo apt install postgresql-15
fi

if [ ! -d core ]
then
	git clone https://github.com/miracle-42/forms42.core core
	(
		cd core
		git checkout version-2.1-dev
		npm install
		npm run build
	)
fi

if [ ! -d demo ]
then
	git clone https://github.com/miracle-42/forms42.demo demo
	(
		cd demo
		git checkout version-2.1-dev
		npm install
		npm run build
	)
fi

echo Check \'hr\' database exists:
if ! sudo -u postgres psql -qAt -d hr -c 'SELECT 1' 
then
	sudo -u postgres psql -c "CREATE USER hr WITH PASSWORD 'hr'"
	sudo -u postgres psql -c "CREATE DATABASE hr OWNER hr"
	export PGPASSWORD=hr
	psql -h localhost -U hr -d hr < demo/data/data.demo
fi

if [ ! -d database.js ]
then
	if [ ! -d database.js.git ]
	then
		git clone https://github.com/miracle-42/database.js database.js.git
	fi
	mkdir database.js
	(
		cd database.js
		unzip ../database.js.git/downloads/database.js.zip
		sed -i 's|"path": "./app"|"path": "../demo/dist"|' conf/config.json
	)
fi

if [ ! -e database.js/logs/inst00/server.log.0.lck ]
then
	echo Starting database.js...
	( cd database.js && bin/database.js start )
fi
database.js/bin/database.js status

echo
echo Stop database.js command: ./database.js/bin/database.js stop
echo
echo Start demo with a browser at: http://localhost:9002/
