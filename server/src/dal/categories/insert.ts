import { ADD_NEW_CATEGORY } from '../../services';
import { db } from '../../config';

export const insertNewCategory = (
  category_name: string,
  unit_id: number,
  reorder_quantity_level: number,
  reorder_count_level: number
) => {
  return new Promise((resolve, reject) => {
    db.query(
      ADD_NEW_CATEGORY,
      [category_name, unit_id, reorder_quantity_level, reorder_count_level],
      (error, result) => {
        error ? reject(error) : resolve(result);
      }
    );
  });
};
