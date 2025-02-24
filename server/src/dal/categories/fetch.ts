import { db } from '../../config';
import { CategoriesSchema } from '../../validation';
import { GET_CATEGORIES } from '../../services';
import { Categories } from '../../types';

export const fetchCategories = () => {
  return new Promise<Categories>((resolve, reject) => {
    db.query(GET_CATEGORIES, (error, result) => {
      if (error) {
        reject(error);
      } else {
        const parsedCategories = CategoriesSchema.safeParse(result.rows);
        parsedCategories.success
          ? resolve(parsedCategories.data)
          : reject(parsedCategories.error.errors);
      }
    });
  });
};
