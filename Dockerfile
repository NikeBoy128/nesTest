
FROM node:20.0.0


WORKDIR /usr/src/app


COPY package*.json ./


RUN npm install

RUN npm install bcrypt


RUN npm install pm2 -g

COPY . .


COPY .env ./


RUN npm run build


EXPOSE 3001


CMD ["pm2-runtime", "start", "dist/src/main.js"]