FROM node:10.16.0-alpine

WORKDIR /usr/app

COPY package.json .
RUN npm cache clean --force && npm install

COPY . .



