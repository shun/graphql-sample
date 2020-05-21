FROM node:lts-buster-slim

ARG NG_VER=9.0.3
RUN apt update \
    && apt install -y \
        git \
        nginx \
        whois \
    && rm -rf /var/lib/apt/lists/* \
    && npm install -g \
        @angular/animations@${NG_VER} \
        @angular/cli@${NG_VER} \
        @angular/common@${NG_VER} \
        @angular/core@${NG_VER} \
        @angular/forms@${NG_VER} \
        @angular/platform-browser@${NG_VER} \
        primeicons \
        primeng \
        rxjs@6.5.3 \
        tslib@1.10.0 \
        zone.js@0.10.2 \
    && npm cache clean -f

WORKDIR /app

