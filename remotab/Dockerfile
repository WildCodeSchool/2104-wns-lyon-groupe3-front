FROM catchdigital/node-sass

RUN mkdir /app
WORKDIR /app
COPY package*.json ./
COPY tsconfig.json ./
COPY .env ./
RUN npm install
COPY src src

CMD npm start