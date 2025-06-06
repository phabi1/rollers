import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { IPostProps, type PostModel } from '../../models/post.model';
import { PostSchemaName } from '../../schemas/post.schema';
import { ArchivePostCommand } from './archive-post.command';

@CommandHandler(ArchivePostCommand)
export class ArchivePostHandler
  implements ICommandHandler<ArchivePostCommand, IPostProps>
{
  constructor(
    @InjectModel(PostSchemaName) private readonly postRepository: PostModel
  ) {}

  async execute(command: ArchivePostCommand): Promise<IPostProps> {
    const { postId, userId } = command;
    const post = await this.postRepository.findById(postId);
    if (!post) {
      throw new Error(`Post with ID ${postId} not found`);
    }

    post.archive(userId);
    await post.save();

    return post;
  }
}
