import {
  GET_CATEGORY_BY_NAME,
  GET_PRODUCT_BY_BARCODE,
  GET_UNIT_BY_ID,
  GET_CATEGORY_BY_ID,
} from '../services';
import { db } from '../config';

export const isExist = (query: string, parameter: number | string): Promise<boolean> => {
  return new Promise<boolean>((resolve, reject) => {
    db.query(query, [parameter], (error, result) => {
      error ? reject(error) : resolve(Boolean(result.rowCount));
    });
  });
};

export const isUnitIdExist = (unit_id: number): Promise<boolean> =>
  isExist(GET_UNIT_BY_ID, unit_id);

export const isCategoryExistByName = (category_name: string): Promise<boolean> =>
  isExist(GET_CATEGORY_BY_NAME, category_name);

export const isCategoryExistById = (category_id: number): Promise<boolean> =>
  isExist(GET_CATEGORY_BY_ID, category_id);

export const isBarcodeExist = (barcode: number): Promise<boolean> =>
  isExist(GET_PRODUCT_BY_BARCODE, barcode);
