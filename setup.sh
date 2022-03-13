#!/usr/bin/env bash

db_user_name=ironman
db_password=123456

setupDatabase() {
     
     curl -X PUT "http://${db_user_name}:${db_password}@localhost:5984/_users/org.couchdb.user:incident_admin" \
          -H "Accept: application/json" \
          -H "Content-Type: application/json" \
          -d '{"name": "incident_admin", "password": "admin123", "roles": ["incident_admin"], "type": "user"}'

     curl -X PUT "http://${db_user_name}:${db_password}@localhost:5984/_users/org.couchdb.user:incident_user_one" \
          -H "Accept: application/json" \
          -H "Content-Type: application/json" \
          -d '{"name": "incident_user_one", "password": "user123", "roles": ["incident_user"], "type": "user"}'

     curl -X PUT "http://${db_user_name}:${db_password}@localhost:5984/_users/org.couchdb.user:incident_user_two" \
          -H "Accept: application/json" \
          -H "Content-Type: application/json" \
          -d '{"name": "incident_user_two", "password": "user123", "roles": ["incident_user"], "type": "user"}'

}

setupTestDatabase() {

}

if [[ $1 = 'setup-db' ]]; then
    genRepo $2
elif [[ $1 = 'setup-test-db' ]]; then
    genGql
else
     echo "Usage: ./setup.sh (setup-db|setup-test-db)"
     exit 2
fi
