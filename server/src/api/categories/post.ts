import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { insertNewCategory } from '../../dal';
import { NewCategorySchema } from '../../validation';
import { isCategoryExist, isUnitIdExist } from '../../utils';

export const postNewCategory = async (req: Request, res: Response) => {
  //בודק מול הסכמה שהיא מכילה את כל השדות הנכונים
  const newCategoryInformation = NewCategorySchema.safeParse(req.body);
  if (!newCategoryInformation.success) {
    res.status(StatusCodes.BAD_REQUEST).json({
      error: 'Invalid request data',
      details: newCategoryInformation.error.errors,
    });
  } else {
    const { category_name, unit_id, reorder_quantity_level, reorder_count_level } = req.body;

    if (!(await isUnitIdExist(unit_id))) {
      res.status(StatusCodes.BAD_REQUEST).send('invalid unit id');
    } else if (await isCategoryExist(category_name)) {
      res.status(StatusCodes.BAD_REQUEST).send('category name already exist');
    } else {
      try {
        await insertNewCategory(
          category_name,
          unit_id,
          reorder_quantity_level ?? 0,
          reorder_count_level ?? 0
        );
        res.status(StatusCodes.CREATED).send('category Add (:');
      } catch (error) {
        res.status(StatusCodes.NOT_MODIFIED).send('An error occurred while adding the category');
      }
    }
  }
};
