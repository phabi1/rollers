import { Field } from '@nestjs/graphql';

export class CreatePostInput {
  @Field({ description: 'Slug of the post' })
  slug!: string;
  @Field({ description: 'Title of the post' })
  title!: string;
  @Field({ description: 'Content of the post' })
  content!: string;
}
