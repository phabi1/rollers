import { ICommand } from '@nestjs/cqrs';
import slugify from 'slugify';

export class DraftPostCommand implements ICommand {
  public readonly postId: string;
  public readonly slug?: string;
  public readonly title?: string;
  public readonly content?: string;
  public readonly userId: string;

  constructor(
    postId: string,
    data: {
      slug?: string;
      title?: string;
      content?: string;
    },
    userId: string
  ) {
    this.postId = postId;
    if (data.slug) {
      this.slug = slugify(data.slug);
    }
    this.title = data.title;
    this.content = data.content;
    this.userId = userId;
  }
}
