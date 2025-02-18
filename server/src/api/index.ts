import { Router } from 'express';
import { unitsRouter } from './units';

export const apiRouter = Router();

apiRouter.use('/units', unitsRouter);
