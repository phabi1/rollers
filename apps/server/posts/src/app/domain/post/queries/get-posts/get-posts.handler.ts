import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { IPostProps, type PostModel } from '../../models/post.model';
import { GetPostsQuery } from './get-posts.query';
import { InjectModel } from '@nestjs/mongoose';
import { PostSchemaName } from '../../schemas/post.schema';

@QueryHandler(GetPostsQuery)
export class GetPostsHandler
  implements IQueryHandler<GetPostsQuery, IPostProps[]>
{
  constructor(
    @InjectModel(PostSchemaName)
    private readonly postsRepository: PostModel
  ) {}

  async execute(query: GetPostsQuery): Promise<IPostProps[]> {
    const { pagination } = query;
    return this.postsRepository
      .find({
        parentId: null, // Assuming we want top-level posts only
      })
      .skip(pagination.skip)
      .limit(pagination.take)
      .exec();
  }
}
