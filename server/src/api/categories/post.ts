import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { insertNewCategory } from '../../dal';
import { NewCategorySchema } from '../../validation';
import { isCategoryExistByName, isUnitIdExist } from '../../utils';
import { NewCategory } from '../../types';

export const postNewCategory = async (req: Request, res: Response) => {
  const newCategoryInformation = NewCategorySchema.safeParse(req.body);
  if (!newCategoryInformation.success) {
    res.status(StatusCodes.BAD_REQUEST).json({
      error: 'Invalid request data',
      details: newCategoryInformation.error.errors,
    });
  } else {
    const { category_name, unit_id, reorder_quantity_level, reorder_count_level }: NewCategory =
      req.body;

    if (!(await isUnitIdExist(unit_id))) {
      res.status(StatusCodes.BAD_REQUEST).json({
        error: 'INVALID_UNIT_ID',
        message: 'סוג יחידה לא קיים במערכת',
      });
    } else if (await isCategoryExistByName(category_name)) {
      res.status(StatusCodes.BAD_REQUEST).json({
        error: 'CATEGORY_EXISTS',
        message: 'הקטגוריה כבר קיימת במערכת',
      });
    } else {
      try {
        await insertNewCategory({
          category_name,
          unit_id,
          reorder_quantity_level,
          reorder_count_level,
        });
        res.status(StatusCodes.CREATED).json({ message: 'הקטגוריה נוספה בהצלחה' });
      } catch (error) {
        res.status(StatusCodes.NOT_MODIFIED).json({
          error: 'An error occurred while adding the category',
          message: 'קרתה שגיאה בשליחת הנתונים, נסה שנית',
        });
      }
    }
  }
};
