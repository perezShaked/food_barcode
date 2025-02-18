import { UnitsSchema } from '../validation';
import { z } from 'zod';

export type Units = z.infer<typeof UnitsSchema>;
