FROM node:14.17-alpine3.11 as build-stage

RUN mkdir /app
WORKDIR /app
COPY package*.json ./
COPY tsconfig.json ./
COPY .env ./
RUN npm install
COPY src src
COPY public public

CMD npm start