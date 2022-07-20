import { Request, Response } from 'express';
import Reader from '../schemas/reader.schema';

const _ = async (req: Request, res: Response) => {
  const _id = req.auth.payload.sub.split('|')[1];
  console.log(_id);
  res.status(200).json('Not implemented yet');
};

export default _;
