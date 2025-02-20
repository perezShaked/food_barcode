import { GET_CATEGORY_BY_NAME, GET_UNIT_BY_ID } from '../services';
import { db } from '../config';

export const isUnitIdExist = (unit_id: number): Promise<boolean> => {
  return new Promise<boolean>((resolve, reject) => {
    db.query(GET_UNIT_BY_ID, [unit_id], (error, result) => {
      error ? reject(error) : resolve(Boolean(result.rowCount));
    });
  });
};

export const isCategoryExist = (category_name: string): Promise<boolean> => {
  return new Promise<boolean>((resolve, reject) => {
    db.query(GET_CATEGORY_BY_NAME, [category_name], (error, result) => {
      error ? reject(error) : resolve(Boolean(result.rowCount));
    });
  });
};
