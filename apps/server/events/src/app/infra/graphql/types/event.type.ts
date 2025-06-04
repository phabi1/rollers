import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Event {
  @Field(() => ID, { description: 'Unique identifier for the event' })
  public id!: string;

  @Field({ description: 'Title of the event' })
  public title!: string;

  @Field({ description: 'Description of the event' })
  public description!: string;
  @Field({ description: 'Start date and time of the event' })
  public startAt!: Date;
  @Field({ description: 'End date and time of the event' })
  public endAt!: Date;
  @Field({ description: 'Indicates if registration is enabled for the event' })
  public enableRegistration!: boolean;
  @Field({
    nullable: true,
    description: 'Start date and time for event registration',
  })
  public registrationStartAt?: Date;
  @Field({
    nullable: true,
    description: 'End date and time for event registration',
  })
  public registrationEndAt?: Date;
  @Field({
    nullable: true,
    description: 'Maximum number of registrations allowed for the event',
  })
  public registrationLimit?: number;
}
