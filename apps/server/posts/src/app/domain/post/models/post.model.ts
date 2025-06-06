import { PostStatus } from './post-status.model';
import { Model } from 'mongoose';

export interface IPostProps {
  id: string;
  slug: string;
  title: string;
  content: string;
  status: PostStatus;
  createdAt: Date;
  updatedAt: Date;
  authorId: string;
  parentId?: string | null;
  publishedAt?: Date | null;
  publishedBy?: string | null;
  archivedAt?: Date | null;
  archivedBy?: string | null;
}

export interface IPostMethods {
  draft(userId: string): void;
  publish(userId: string): void;
  archive(userId: string): void;
}

export type PostModel = Model<IPostProps, {}, IPostMethods>;
