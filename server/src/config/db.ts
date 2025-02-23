import { Pool } from 'pg';

export const db = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'food_barcode',
  port: 5432,
  password: '123456',
});
