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
su node
exec "$@"
