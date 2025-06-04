import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Me {
  @Field(() => ID, { description: 'Unique identifier for the user' })
  @Directive('@key(fields: "id")')
  public id!: string;
}
