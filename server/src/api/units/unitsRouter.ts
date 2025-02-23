import { Router } from 'express';
import { getUnits } from './get';

export const unitsRouter = Router();

unitsRouter.get('/', getUnits);
