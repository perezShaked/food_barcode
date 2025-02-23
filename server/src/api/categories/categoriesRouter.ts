import { Router } from 'express';
import { postNewCategory } from './post';

export const categoriesRouter = Router();

categoriesRouter.post('/', postNewCategory);
