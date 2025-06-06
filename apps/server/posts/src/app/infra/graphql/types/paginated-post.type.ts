import { ObjectType } from '@nestjs/graphql';
import { Paginated } from '@rollers/libs-server-graphql-pagination';
import { Post } from './post.type';

@ObjectType({
    description: 'Paginated list of posts',
})
export class PaginatedPost extends Paginated(Post) {}
