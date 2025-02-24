import { Router } from 'express';
import { postNewCategory } from './post';
import { getCategories } from './get';

export const categoriesRouter = Router();

categoriesRouter.post('/', postNewCategory);
categoriesRouter.get('/', getCategories);
