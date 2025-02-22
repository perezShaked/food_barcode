import { ADD_NEW_CATEGORY } from '../../services';
import { db } from '../../config';
import { NewCategory } from '../../types';

export const insertNewCategory = ({
  category_name,
  unit_id,
  reorder_quantity_level = 0,
  reorder_count_level = 0,
}: NewCategory) => {
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
