import { Schema, Types } from 'mongoose';
import { BrikzContentChangedEvent } from '../events/brikz-content-changed.event';

export const BrikzSchema = new Schema({
  title: {
    type: Schema.Types.String,
    required: true,
  },
  content: {
    type: Schema.Types.String,
  },
  sources: {
    type: [Schema.Types.ObjectId],
  },
  url: {
    type: Schema.Types.String,
    required: true,
  },
});

BrikzSchema.method(
  'setContent',
  function (this: any, content: string, sources: string[]) {
    this.content = content;
    this.sources = sources.map((source) => new Types.ObjectId(source));

    if (!this.isNew) {
      this.apply(
        new BrikzContentChangedEvent(
          this._id.toString(),
          content,
          this.sources.map((source: Types.ObjectId) => source.toString())
        )
      );
    }
  }
);
