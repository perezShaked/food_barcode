import { Router } from 'express';
import { postNewCategory } from './post';

export const categoryRouter = Router();

categoryRouter.post('/', postNewCategory);
