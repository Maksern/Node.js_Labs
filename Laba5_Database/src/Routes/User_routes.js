import { Router } from 'express';
import {controller} from '../Controllers/Users_controller.js';
export const UserRouter = new Router();
 
UserRouter.post('/', controller.createUser);
UserRouter.get('/:id', controller.getUser);
UserRouter.get('/', controller.getUsers);
UserRouter.put('/', controller.updateUser);
UserRouter.delete('/:id', controller.deleteUser);
