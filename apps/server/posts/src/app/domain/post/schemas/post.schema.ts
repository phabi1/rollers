import { Schema, Types } from 'mongoose';
import { PostStatus } from '../models/post-status.model';

export const PostSchemaName = 'Post';

export const PostSchema = new Schema(
  {
    slug: {
      type: String,
      required: true,
      trim: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 1,
      maxlength: 255,
      description: 'Title of the post',
    },
    content: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      enum: ['draft', 'published', 'archived'],
      default: 'draft',
      description: 'Status of the post',
    },
    parentId: {
      type: Types.ObjectId,
      ref: PostSchemaName,
      default: null,
      description: 'ID of the parent post for nested posts',
    },
    versionIds: {
      type: [Types.ObjectId],
      ref: PostSchemaName,
      default: [],
      description: 'List of version for the post',
    },
    archivedAt: {
      type: Date,
      default: null,
      description: 'Date when the post was archived',
    },
    archivedBy: {
      type: String,
      default: null,
      description: 'User who archived the post',
    },
  },
  {
    timestamps: true,
  }
);

PostSchema.methods.draft = function (userId: string) {
  this.status = PostStatus.DRAFT;
  this.authorId = userId;
};
PostSchema.methods.publish = function (userId: string) {
  this.status = PostStatus.PUBLISHED;
  this.publishedAt = new Date();
  this.publishedBy = userId;
};
PostSchema.methods.archive = function (userId: string) {
  this.status = PostStatus.ARCHIVED;
  this.archivedAt = new Date();
  this.archivedBy = userId;
};
