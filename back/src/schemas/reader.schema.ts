import mongoose from 'mongoose';
const { Schema } = mongoose;

const readerSchema = mongoose.model(
  'reader',
  new Schema({
    username: String,
    books_readed: [
      {
        external_id: String,
        name: String,
        startDate: { type: Date },
        endDate: { type: Date },
        score: { type: Number, min: 1, max: 5, required: true },
        review: String,
        author: String,
        totalPages: String,
        publishYear: Date,
        publisher: String
      }
    ],
    books_to_read: [
      {
        external_id: String,
        name: String
      }
    ]
  })
);
