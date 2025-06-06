import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Post {
  @Field(() => ID, { description: 'Unique identifier for the post' })
  id!: string;

  @Field({ description: 'Title of the post' })
  title!: string;

  @Field({ description: 'Content of the post' })
  content!: string;

  @Field({ description: 'Status of the post' })
  status!: string;

  @Field({ description: 'Author of the post' })
  author!: string;

  @Field({ description: 'Date when the post was created' })
  createdAt!: Date;

  @Field({ description: 'Date when the post was last updated' })
  updatedAt!: Date;
}
