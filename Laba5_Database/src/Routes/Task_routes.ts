import { Router } from 'express';
import {controller} from '../Controllers/Users_controller';
export const UserRouter = Router();
 
UserRouter.post('/task1', controller.getAllUsers);
UserRouter.post('/task2', controller.get5PositiveLikestVideos);
UserRouter.post('/task3', controller.getVideosOfUsersSubscriptions);
UserRouter.post('/task4', controller.getChannelById);
UserRouter.post('/task5', controller.get10LikestVideos);
UserRouter.post('/task6', controller.getDataOfSubscriptions);

