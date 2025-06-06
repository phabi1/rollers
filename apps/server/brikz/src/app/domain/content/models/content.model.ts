import { Model } from "mongoose";

export interface IContentProps {
  legoId: string;
  slug: string;
  content: string;
}

export type ContentModel = Model<IContentProps>;
