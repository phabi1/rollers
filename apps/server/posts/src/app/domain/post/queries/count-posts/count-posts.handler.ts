import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { type PostModel } from '../../models/post.model';
import { PostSchemaName } from '../../schemas/post.schema';
import { CountPostsQuery } from './count-posts.query';

@QueryHandler(CountPostsQuery)
export class CountPostsHandler
  implements IQueryHandler<CountPostsQuery, number>
{
  constructor(
    @InjectModel(PostSchemaName)
    private readonly postRepository: PostModel
  ) {}

  async execute(query: CountPostsQuery): Promise<number> {
    return this.postRepository.countDocuments({
      parentId: null, // Assuming we want to count top-level posts only
    });
  }
}
