#!/bin/bash
set -eu

groupadd -g 11111 tmpgrp
usermod -g tmpgrp node
groupdel node
groupadd -g $LOCALGID node
usermod -g $LOCALGID node
usermod -u $LOCALUID node
groupdel tmpgrp

chown -R node:node /app
if [ ! -e /migration_done ]; then
    npm run migration:run
    touch /migration_done
fi
su node
exec "$@"
