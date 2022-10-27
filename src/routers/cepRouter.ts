import { Router } from 'express';

import cepController from '../controllers/cepController.js';
import validateSchema from '../middlewares/validateSchema.js';
import cepSchema from '../schemas/cepSchema.js';

const cepRouter = Router();

cepRouter.post('/cep', validateSchema(cepSchema), cepController.getAddressByCEP);

export default cepRouter;
