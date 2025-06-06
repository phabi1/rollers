import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { PostNotFoundException } from '../../exceptions/post-not-found.exception';
import { PostStatus } from '../../models/post-status.model';
import { IPostProps, type PostModel } from '../../models/post.model';
import { PostSchemaName } from '../../schemas/post.schema';
import { PublishPostCommand } from './publish-post.command';

@CommandHandler(PublishPostCommand)
export class PublishPostHandler
  implements ICommandHandler<PublishPostCommand, IPostProps>
{
  constructor(
    @InjectModel(PostSchemaName) private readonly postRepository: PostModel
  ) {}

  async execute(command: PublishPostCommand): Promise<IPostProps> {
    const { postId, draftId, userId } = command;

    const post = await this.postRepository.findById(postId);
    if (!post) {
      throw PostNotFoundException.withId(postId);
    }

    let draft: IPostProps | null = null;
    if (!draftId) {
      draft = await this.retrieveLatestDraft(postId);
    } else {
      draft = await this.retrieveDraftPost(draftId);
    }

    if (!draft) {
      throw PostNotFoundException.withId(draftId || postId);
    }

    if (draft.status !== PostStatus.DRAFT) {
      throw new Error('Post can only be published from DRAFT status');
    }

    post.slug = draft.slug;
    post.title = draft.title;
    post.content = draft.content;

    post.publish(userId);
    await post.save();

    return post;
  }

  private async retrieveDraftPost(postId: string): Promise<IPostProps> {
    const post = await this.postRepository.findById(postId);
    if (!post) {
      throw PostNotFoundException.withId(postId);
    }
    return post;
  }

  private async retrieveLatestDraft(
    postId: string
  ): Promise<IPostProps | null> {
    const post = await this.postRepository
      .findOne({ parentId: postId, status: PostStatus.DRAFT })
      .sort({ updatedAt: -1 });
    return post;
  }
}
