import { Router } from 'express';
import { postNewProduct } from './post';

export const productsRouter = Router();

productsRouter.post('/', postNewProduct);
