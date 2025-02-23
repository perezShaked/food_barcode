import { db } from '../../config';
import { UnitsSchema } from '../../validation';
import { GET_UNITS } from '../../services';
import { Units } from '../../types';

export const fetchUnits = () => {
  return new Promise<Units>((resolve, reject) => {
    db.query(GET_UNITS, (error, result) => {
      if (error) {
        reject(error);
      } else {
        const parsedUnit = UnitsSchema.safeParse(result.rows);
        parsedUnit.success ? resolve(parsedUnit.data) : reject(parsedUnit.error.errors);
      }
    });
  });
};
