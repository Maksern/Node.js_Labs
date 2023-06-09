import { Router } from 'express';
import {controller} from '../Controllers/Users_controller.js';
const router = Router();
 
router.post('/create', controller.createUser);
router.get('/', controller.getUsers);
router.put('/', controller.updateUser);
router.delete('/', controller.deleteUser);

export default router;