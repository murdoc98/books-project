import { Request, Response } from 'express';
import Reader from '../schemas/reader.schema';

const _ = async (req: Request, res: Response) => {
  const id = req.auth.payload.sub.split('|')[1];
  let reader = await Reader.findOne({ id });
  if(!reader) {
    reader = new Reader({
      _id: id,
      books_readed: [],
      books_to_read: []
    });
    reader.save();
  }
  res.status(200).json(reader);
}

export default _;