import { CountPostsHandler } from './count-posts/count-posts.handler';
import { GetPostHandler } from './get-post/get-post.handler';
import { GetPostsHandler } from './get-posts/get-posts.handler';

export const QUERY_HANDLERS = [GetPostsHandler, GetPostHandler, CountPostsHandler];
