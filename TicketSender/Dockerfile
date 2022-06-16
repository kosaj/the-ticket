FROM        node:16-alpine
WORKDIR     /app
COPY        package*.json ./
RUN         npm ci --only=production
COPY        . .

ENV         NODE_ENV production

CMD         ["dumb-init", "node", "main.js"]