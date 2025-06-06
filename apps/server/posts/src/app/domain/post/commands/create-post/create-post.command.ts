import { ICommand } from '@nestjs/cqrs';
import { PostStatus } from '../../models/post-status.model';
import slugify from 'slugify';

export class CreatePostCommand implements ICommand {
  public readonly slug: string;
  public readonly title: string;
  public readonly content: string;
  public readonly authorId: string;
  public readonly status: PostStatus = PostStatus.DRAFT;

  constructor(slug: string, title: string, content: string, authorId: string) {
    this.slug = slugify(slug);
    this.title = title;
    this.content = content;
    this.authorId = authorId;
    this.status = PostStatus.DRAFT;
  }
}
