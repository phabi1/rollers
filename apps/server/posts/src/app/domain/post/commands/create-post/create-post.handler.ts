import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { PostAlreadyExistsException } from '../../exceptions/post-already-exists.exception';
import { PostStatus } from '../../models/post-status.model';
import { IPostProps, type PostModel } from '../../models/post.model';
import { PostSchemaName } from '../../schemas/post.schema';
import { CreatePostCommand } from './create-post.command';

@CommandHandler(CreatePostCommand)
export class CreatePostHandler
  implements ICommandHandler<CreatePostCommand, IPostProps>
{
  constructor(
    @InjectModel(PostSchemaName) private readonly postRepository: PostModel
  ) {}

  async execute(command: CreatePostCommand): Promise<IPostProps> {
    const { slug, title, content, authorId } = command;

    await this.checkIfSlugExists(slug);

    const post = new this.postRepository({
      slug,
      title,
      content,
      authorId,
      status: PostStatus.DRAFT,
    });

    return post.save();
  }

  private async checkIfSlugExists(slug: string): Promise<void> {
    const existingPost = await this.postRepository.findOne({
      slug,
      status: { $ne: PostStatus.ARCHIVED },
    });
    if (existingPost) {
      throw PostAlreadyExistsException.withSlug(slug);
    }
  }
}
