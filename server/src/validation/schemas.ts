import { z } from 'zod';

export const UnitsSchema = z.array(
  z.object({
    unit_id: z.number(),
    unit_name: z.string(),
  })
);

export const NewCategorySchema = z.object({
  category_name: z.string(),
  unit_id: z.number(),
  reorder_quantity_level: z.number().min(0).optional(),
  reorder_count_level: z.number().min(0).optional(),
});

export const CategoriesSchema = z.array(
  z.object({
    category_id: z.number(),
    category_name: z.string(),
    unit_id: z.number(),
  })
);
