import { Document, Model } from 'mongoose';

export interface IBrikzProps {
  id: string;
  title: string;
  readonly content: string;
  readonly sources: string[];
  url: string;
}

export interface IBrikzMethods {
  setContent(content: string, sources: string[]): void;
}

export type BrikzModel = Model<IBrikzProps, {}, IBrikzMethods>;

export type BrikzDocument = Document<IBrikzProps, {}, IBrikzMethods>;
