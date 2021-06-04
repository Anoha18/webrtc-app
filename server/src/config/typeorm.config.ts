import { ConnectionOptions } from "typeorm";
require('dotenv');

const config: ConnectionOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [
    __dirname + '/../**/*.entity.ts'
  ],
  migrations: [__dirname + '/../migrations/*.ts'],
  cli: {
    migrationsDir: 'src/migrations'
  },
  synchronize: false,
}

export = config;
