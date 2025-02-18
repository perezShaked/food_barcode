import { z } from 'zod';

export const UnitsSchema = z.array(
  z.object({
    unitid: z.number(),
    unit_name: z.string(),
  })
);
