import { StatusCodes } from 'http-status-codes';
import { fetchUnits } from '../../dal';
import { Request, Response } from 'express';

export const getUnits = async (_req: Request, res: Response) => {
  try {
    const units = await fetchUnits();
    res.status(StatusCodes.OK).json(units);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
};
