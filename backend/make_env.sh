#!/bin/bash
set -eu

cat <<EOF > .env
LOCALUSER=$USER
LOCALUID=$(id -u)
LOCALGID=$(id -g)
EOF

