import { Field, InputType } from '@nestjs/graphql';

@InputType({
  description: 'Input for creating an event',
})
export class CreateEventInput {
  @Field({ description: 'Title of the event' })
  title!: string;

  @Field({ description: 'Description of the event' })
  description!: string;

  @Field({ description: 'Start date of the event' })
  startAt!: Date;

  @Field({ description: 'End date of the event' })
  endAt!: Date;

  @Field({ description: 'Enable registration for the event', nullable: true })
  enableRegistration?: boolean;

  @Field({ description: 'Start date for event registration', nullable: true })
  registrationStartAt?: Date;

  @Field({ description: 'End date for event registration', nullable: true })
  registrationEndAt?: Date;

  @Field({ description: 'Registration limit for the event', nullable: true })
  registrationLimit?: number;
}
