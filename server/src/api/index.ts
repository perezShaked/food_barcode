import { Router } from 'express';
import { unitsRouter } from './units';
import { categoriesRouter } from './categories';

export const apiRouter = Router();

apiRouter.use('/units', unitsRouter);
apiRouter.use('/categories', categoriesRouter);
