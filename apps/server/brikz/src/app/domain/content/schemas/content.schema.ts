import { Schema } from 'mongoose';

export const ContentSchemaName = 'Content';

export const ContentSchema = new Schema({
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  content: {
    type: String,
    required: true,
  },
  legoId: {
    type: String,
    required: true,
  },
});
