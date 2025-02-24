FROM node:22-alpine

WORKDIR /app

COPY package.json package-lock.json /app/

RUN npm ci

RUN npx sequelize-cli db:seed:all