/* eslint-disable @typescript-eslint/no-var-requires */
const { config } = require('dotenv');
const { DataSource } = require('typeorm');

config();

module.exports = new DataSource({
  type: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [`${__dirname}/src/**/*.entity.{ts,js}`],
  migrations: [`${__dirname}/src/**/migrations/*.{js,ts}`],
});
