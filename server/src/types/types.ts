import { NewCategorySchema, UnitsSchema } from '../validation';
import { z } from 'zod';

export type Units = z.infer<typeof UnitsSchema>;

export type NewCategory = z.infer<typeof NewCategorySchema>;
