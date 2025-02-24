import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { insertNewProduct } from '../../dal';
import { NewProductSchema } from '../../validation';
import { isBarcodeExist, isCategoryExistById } from '../../utils';
import { NewProduct } from '../../types';

export const postNewProduct = async (req: Request, res: Response) => {
  const newProductInformation = NewProductSchema.safeParse(req.body);
  if (!newProductInformation.success) {
    res.status(StatusCodes.BAD_REQUEST).json({
      error: 'Invalid request data',
      details: newProductInformation.error.errors,
    });
  } else {
    const { barcode, product_name, category_id, company, quantity }: NewProduct = req.body;

    if (await isBarcodeExist(barcode)) {
      res.status(StatusCodes.BAD_REQUEST).json({
        error: 'BARCODE_EXISTS',
        message: 'הברקוד קיים במערכת',
      });
    } else if (!(await isCategoryExistById(category_id))) {
      res.status(StatusCodes.BAD_REQUEST).json({
        error: 'CATEGORY_DO_NOT_EXIST',
        message: 'הקטגוריה לא קיימת',
      });
    } else {
      try {
        await insertNewProduct({
          barcode,
          product_name,
          category_id,
          company,
          quantity,
        });
        res.status(StatusCodes.CREATED).json({ message: 'הפריט נוסף בהצלחה' });
      } catch (error) {
        res.status(StatusCodes.NOT_MODIFIED).json({
          error: 'An error occurred while adding the product',
          message: 'קרתה שגיאה בשליחת הנתונים, נסה שנית',
        });
      }
    }
  }
};
