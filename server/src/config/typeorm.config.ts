import { ConnectionOptions } from "typeorm";
import * as path from 'path';
import * as dotenv from 'dotenv';

dotenv.config();

const config: ConnectionOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [
    path.join(__dirname, '../**/*.entity.{ts,js}')
  ],
  migrations: [path.join(__dirname, '/../migrations/*.{ts,js}')],
  cli: {
    migrationsDir: 'src/migrations'
  },
  synchronize: false,
}

export = config;
