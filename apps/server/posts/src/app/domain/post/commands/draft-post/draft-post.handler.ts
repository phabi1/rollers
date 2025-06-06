import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { PostNotFoundException } from '../../exceptions/post-not-found.exception';
import { IPostProps, type PostModel } from '../../models/post.model';
import { PostSchemaName } from '../../schemas/post.schema';
import { DraftPostCommand } from './draft-post.command';

@CommandHandler(DraftPostCommand)
export class DraftPostHandler
  implements ICommandHandler<DraftPostCommand, IPostProps>
{
  constructor(
    @InjectModel(PostSchemaName)
    private readonly postRepository: PostModel
  ) {}

  async execute(command: DraftPostCommand): Promise<IPostProps> {
    const { postId, slug, title, content, userId } = command;

    const post = await this.postRepository.findById(postId);
    if (!post) {
      throw PostNotFoundException.withId(postId);
    }

    const draft = new this.postRepository({
      slug: post.slug,
      title: post.title,
      content: post.content,
      authorId: post.authorId,
      parentId: post._id,
    });

    if (slug) {
      draft.slug = slug;
    }

    if (title) {
      post.title = title;
    }
    if (content) {
      post.content = content;
    }

    post.draft(userId);
    await draft.save();

    return post;
  }
}
