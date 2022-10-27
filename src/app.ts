import 'express-async-errors';
import express, { json } from 'express';
import cors from 'cors';

import cepRouter from './routers/cepRouter.js';
import handleError from './middlewares/errorHandlerMiddleware.js';

const app = express();

app.use(cors());
app.use(json());
app.use(cepRouter);
app.use(handleError);

export default app;
