import { ArchivePostHandler } from './archive-post/archive-post.handler';
import { CreatePostHandler } from './create-post/create-post.handler';
import { DraftPostCommand } from './draft-post/draft-post.command';
import { PublishPostCommand } from './publish-post/publish-post.command';

export const COMMAND_HANDLERS = [
  CreatePostHandler,
  DraftPostCommand,
  PublishPostCommand,
  ArchivePostHandler,
];
