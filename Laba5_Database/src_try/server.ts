import express, { NextFunction, Request, Response } from 'express';
import { HttpError } from 'http-errors';
import morgan from 'morgan';
import { config } from './Config/config';
import { dataSource } from './Config/typeorm.config';
import { UsersController } from './Modules/Users/users.controller';

export class Server{
      private app = express();
      private config = config;

      start() {
            this.initDatabase();
            this.initMiddlewares();
            this.initRoutes()
            this.initErrorHandler();
            this.listenServer();
      }

      private async initDatabase() {
            await dataSource
            .initialize()
            .then( () => console.log('Connected to db'))
            .catch( (err) => console.log(err.message));
      }


      private initMiddlewares() {
            this.app.use(express.json());
            this.app.use(morgan("common"));
      }

      private initRoutes() {
            // this.app.use("/api/users", UsersController)
      }

      private initErrorHandler() {
            this.app.use((err: HttpError, req: Request, res: Response, next: NextFunction) =>{
                  const statusCode = err.status | 500;
                  res.status(statusCode).send({
                        message: err.message,
                        status: statusCode,
                  })
            })
      }

      private listenServer() {
            this.app.listen(this.config.port, () => {
                  console.log('Server run on port', this.config.port);
            })
      }
}