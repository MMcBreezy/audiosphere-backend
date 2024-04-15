FROM node:16.13.0

RUN apt-get update && apt-get install -y default-mysql-client netcat

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

COPY wait-for-it.sh ./

RUN chmod +x ./wait-for-it.sh

CMD [ "npm", "start" ]