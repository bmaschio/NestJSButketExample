import { DataSource, DataSourceOptions } from "typeorm";

import { config } from "dotenv";

config();

export const dataSourceOptions: DataSourceOptions = {
  type: "mysql",
  host: process.env.MYSQL_HOST,
  port: parseInt(process.env.MYSQL_PORT, 10) || 3306,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  synchronize: false,
  migrationsRun: false,
  logging: false,
  entities: process.env.NODE_ENV === "test" ? ["src/**/*.entity.ts"] : ["dist/**/*.entity.js"],
  migrations: ["dist/modules/auth/migration/*.js"],
  charset: "utf8mb4_general_ci",
  extra: {
    timezone: "Z",
  },
};

export default new DataSource(dataSourceOptions as DataSourceOptions);
