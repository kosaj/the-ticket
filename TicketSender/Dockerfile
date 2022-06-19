FROM        node:16-alpine as ts-compiler
WORKDIR     /app
COPY        package*.json ./
COPY        tsconfig*.json ./
RUN         npm ci
COPY        --chown=node:node . .
RUN         npm run build

FROM        node:14-alpine3.10 as ts-remover
WORKDIR     /app
COPY        --from=ts-compiler /app/package*.json ./
COPY        --from=ts-compiler /app/dist ./
RUN         npm ci

FROM        node:14-alpine3.10
WORKDIR     /app
COPY        --from=ts-remover /app ./

ENV         NODE_ENV production
CMD         ["node", "index.js"]