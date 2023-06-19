FROM node:18.18.2-alpine3.17

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

COPY ./ ./

CMD ["npm", "start"]
