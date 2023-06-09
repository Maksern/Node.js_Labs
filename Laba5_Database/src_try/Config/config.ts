import convict from "convict";

export const config = convict({
      port:{
            doc: "Port for listen request",
            format: Number,
            default: 3000,
            env: "PORT"
      },
      dbHost:{
            doc: "Host of database",
            format: String,
            default: 'localhost',
            env: "DB_HOST"
      },
      dbPort:{
            doc: "Port for ask database",
            format: Number,
            default: 5432,
            env: "DB_PORT"
      },
      dbUsername:{
            doc: "Name of database user",
            format: String,
            default: 'postgres',
            env: "DB_USERNAME"
      },
      dbPassword:{
            doc: "Password for database user",
            format: String,
            default: "maksmaks",
            env: "DB_PASSWORD"
      },
      dbName:{
            doc: "Name of database",
            format: String,
            default: "lr5",
            env: "DB_NAME"
      },
})
.validate({allowed: 'strict'})
.getProperties()
