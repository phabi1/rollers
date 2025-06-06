import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { PostNotFoundException } from '../../exceptions/post-not-found.exception';
import { IPostProps, type PostModel } from '../../models/post.model';
import { PostSchemaName } from '../../schemas/post.schema';
import { GetPostQuery } from './get-post.query';

@QueryHandler(GetPostQuery)
export class GetPostHandler implements IQueryHandler<GetPostQuery, IPostProps> {
  constructor(
    @InjectModel(PostSchemaName) private readonly postReposstory: PostModel
  ) {}

  async execute(query: GetPostQuery): Promise<IPostProps> {
    const { id } = query;
    const post = await this.postReposstory.findById(id);
    if (!post) {
      throw PostNotFoundException.withId(id);
    }
    return post;
  }
}
