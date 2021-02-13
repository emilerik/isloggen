#!/bin/bash

docker run --name isloggen \
 -p 127.0.0.1:5432:5432 \
 -e POSTGRES_DB=isloggendb \
 -e POSTGRES_USER=postgres \
 -e POSTGRES_PASSWORD=password \
-d postgres