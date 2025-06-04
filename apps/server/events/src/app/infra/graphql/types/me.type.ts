import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';
import { PaginatedEvent } from './paginated-event.type';

@ObjectType()
@Directive('@key(fields: "id")')
@Directive('@extends')
export class Me {
  @Field(() => ID)
  @Directive('@external')
  id!: string;

  @Field(() => PaginatedEvent, { nullable: true })
  events!: PaginatedEvent;
}
