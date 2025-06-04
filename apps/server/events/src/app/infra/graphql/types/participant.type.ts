import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('EventParticipant')
export class Participant {
  @Field(() => ID, { description: 'Unique identifier for the participant' })
  id!: string;

  @Field(() => String, { description: 'Email of the participant' })
  email!: string;

  @Field(() => String, { description: 'Name of the participant' })
  name!: string;
}
