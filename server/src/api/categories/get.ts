import { StatusCodes } from 'http-status-codes';
import { fetchCategories } from '../../dal';
import { Request, Response } from 'express';

export const getCategories = async (_req: Request, res: Response) => {
  try {
    const categories = await fetchCategories();
    res.status(StatusCodes.OK).json(categories);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
};
