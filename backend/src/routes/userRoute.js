
import Router from 'express';
import { usersGet, usersGetById, usersPut, usersDelete, recoverypassword } from '../controller/userController.js';
import { validateTokenMiddleware } from "../middlewares/validateTokenMiddleware.js"
const router = Router();

router.get('/', usersGet);

router.post('/id', validateTokenMiddleware, usersGetById);


router.patch('/editarUsuario',validateTokenMiddleware,usersPut);

router.patch('/recuperarPassword',validateTokenMiddleware,recoverypassword);

router.delete('/:id', validateTokenMiddleware, usersDelete);

export default router;