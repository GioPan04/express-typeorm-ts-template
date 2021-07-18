#!/bin/sh

echo "Syncronizing database"
npm run typeorm schema:sync

node .