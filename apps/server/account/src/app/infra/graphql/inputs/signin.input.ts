import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class SignInInput {
  @Field(() => String)
  identity!: string;

  @Field(() => String)
  password!: string;
}
