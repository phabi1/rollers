import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  CurrentUser,
  type AuthIdentity,
} from '@rollers/libs-server-graphql-auth-subgrapqh';
import { PaginationArgs } from '@rollers/libs-server-graphql-pagination';
import {
  ArchivePostCommand,
  CountPostsQuery,
  CreatePostCommand,
  DraftPostCommand,
  GetPostQuery,
  GetPostsQuery,
  PublishPostCommand,
} from '../../../../domain/post';
import { CreatePostInput } from '../../inputs/create-post.input';
import { UpdatePostInput } from '../../inputs/update-post.input';
import { PaginatedPost } from '../../types/paginated-post.type';
import { Post } from '../../types/post.type';

@Resolver()
export class PostResolver {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus
  ) {}

  @Query(() => PaginatedPost, { description: 'Get paginated list of posts' })
  async posts(@Args() args: PaginationArgs): Promise<PaginatedPost> {
    const [nodes, total] = await Promise.all([
      this.queryBus.execute(new GetPostsQuery(args.page, args.size)),
      this.queryBus.execute(new CountPostsQuery()),
    ]);

    return new PaginatedPost(nodes, total, args.page, args.size);
  }

  @Query(() => Post, { description: 'Get a post by ID' })
  async post(
    @Args('id', { type: () => ID, description: 'ID of the post to retrieve' })
    id: string
  ): Promise<Post> {
    return this.queryBus.execute(new GetPostQuery(id));
  }

  @Mutation(() => Post, { description: 'Create a new post' })
  async createPost(
    @CurrentUser() user: AuthIdentity,
    @Args('input') input: CreatePostInput
  ): Promise<Post> {
    const userId = user.id;
    return this.commandBus.execute(
      new CreatePostCommand(input.slug, input.title, input.content, userId)
    );
  }

  @Mutation(() => Post, { description: 'Draft a post' })
  async draftPost(
    @CurrentUser() user: AuthIdentity,
    @Args('id', { type: () => ID, description: 'ID of the post to draft' })
    id: string,
    @Args('input') input: UpdatePostInput
  ): Promise<Post> {
    const userId = user.id;
    return this.commandBus.execute(
      new DraftPostCommand(
        id,
        { slug: input.slug, title: input.title, content: input.content },
        userId
      )
    );
  }

  @Mutation(() => Post, { description: 'Publish a post' })
  async publishPost(
    @CurrentUser() user: AuthIdentity,
    @Args('id', { type: () => ID, description: 'ID of the post to publish' })
    id: string,
    @Args('draftId', {
      type: () => ID,
      nullable: true,
      description: 'ID of the draft post to publish, if any',
    })
    draftId?: string
  ): Promise<Post> {
    const userId = user.id; // Replace with actual user ID from context or auth service
    return this.commandBus.execute(new PublishPostCommand(id, userId, draftId));
  }

  @Mutation(() => Post, { description: 'Archive a post' })
  async archivePost(
    @CurrentUser() user: AuthIdentity,
    @Args('id', { type: () => ID, description: 'ID of the post to archive' })
    id: string
  ): Promise<Post> {
    const userId = user.id;
    return this.commandBus.execute(new ArchivePostCommand(id, userId));
  }
}
