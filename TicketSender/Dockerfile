FROM        node:16-alpine
WORKDIR     /app
COPY        package*.json ./
RUN         npm ci
COPY        --chown=node:node . .

ENV         NODE_ENV production
CMD         ["node", "main.js"]