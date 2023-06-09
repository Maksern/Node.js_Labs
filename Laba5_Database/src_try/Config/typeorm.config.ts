import {DataSource} from "typeorm";
import { config } from "./config";
import { UserEntity } from "./../Modules/Users/user.entity";

export const dataSource = new DataSource({
      type: 'postgres',
      host: config.dbHost,
      port: config.dbPort,
      username: config.dbUsername,
      password: config.dbPassword,
      database: config.dbName,
      logging: false,
      entities: [UserEntity]
})