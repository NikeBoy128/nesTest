
FROM node:20.0.0


WORKDIR /usr/src/app


COPY package*.json ./


RUN npm install

RUN npm install bcrypt


COPY . .


COPY .env ./


RUN npm run build


EXPOSE 3001


CMD ["npm", "run", "start:prod"]