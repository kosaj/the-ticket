FROM        node:16-alpine as build-ts
WORKDIR     /usr/src/app
COPY        package*.json .
COPY        tsconfig*.json .
RUN         npm ci
COPY        . .
RUN         npm run build


FROM        node:16-alpine
ARG         NODE_ENV=production
ENV         NODE_ENV=${NODE_ENV}
WORKDIR     /usr/src/app
COPY        package*.json .
RUN         npm ci --only=production
COPY        --from=build-ts /usr/src/app/dist ./dist

CMD         [ "node", "dist/index.js" ]