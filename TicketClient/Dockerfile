FROM        node:16-alpine as build-stage
WORKDIR     /app

COPY        package*.json ./
RUN         npm ci
COPY        . .
RUN         npm run build

FROM        nginx:1.21-alpine as production-stage
WORKDIR     /usr/share/nginx/html

RUN         rm -rf ./*
COPY        nginx.conf /etc/nginx/nginx.conf
COPY        --from=build-stage /app/dist/ticket-client .