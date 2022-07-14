FROM        node:16-alpine as development-stage
WORKDIR     /usr/src/app
COPY        package*.json .
COPY        tsconfig*.json .
COPY        /tools/wait-for-it.sh .    
RUN         npm ci
COPY        . .
RUN         npm run build


RUN         apk add --no-cache bash
RUN         chmod +x wait-for-it.sh


FROM        node:16-alpine as production-stage
ARG         NODE_ENV=production
ENV         NODE_ENV=${NODE_ENV}
WORKDIR     /usr/src/app
COPY        package*.json .
RUN         npm ci --only=production
COPY        --from=development-stage /usr/src/app/dist ./dist

CMD         [ "node", "dist/index.js" ]