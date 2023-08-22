import Router from 'express';
import { PayCard, PayCardExit } from '../controller/paymentsController.js';
const router = Router();

router.post('/', PayCard );
// router.post('/:id', PayCardExit );


export default router;