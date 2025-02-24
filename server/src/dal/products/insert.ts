import { ADD_NEW_PRODUCT } from '../../services';
import { db } from '../../config';
import { NewProduct } from '../../types';

export const insertNewProduct = ({
  barcode,
  product_name,
  category_id,
  company,
  quantity,
}: NewProduct) => {
  return new Promise((resolve, reject) => {
    db.query(
      ADD_NEW_PRODUCT,
      [barcode, company, product_name, quantity, category_id],
      (error, result) => {
        error ? reject(error) : resolve(result);
      }
    );
  });
};
