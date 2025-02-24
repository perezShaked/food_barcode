import { CategoriesSchema, NewCategorySchema, NewProductSchema, UnitsSchema } from '../validation';
import { z } from 'zod';

export type Units = z.infer<typeof UnitsSchema>;

export type NewCategory = z.infer<typeof NewCategorySchema>;

export type Categories = z.infer<typeof CategoriesSchema>;

export type NewProduct = z.infer<typeof NewProductSchema>;
