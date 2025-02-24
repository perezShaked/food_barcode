import { Router } from 'express';
import { unitsRouter } from './units';
import { categoriesRouter } from './categories';
import { productsRouter } from './products';

export const apiRouter = Router();

apiRouter.use('/units', unitsRouter);
apiRouter.use('/categories', categoriesRouter);
apiRouter.use('/products', productsRouter);
