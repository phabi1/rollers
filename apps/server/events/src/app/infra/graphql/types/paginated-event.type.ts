import { Field, ObjectType } from '@nestjs/graphql';
import { Event } from './event.type';

@ObjectType()
export class PaginatedEvent {
  @Field(() => [Event], { description: 'List of event nodes' })
  public readonly nodes: Event[];

  @Field(() => Number, { description: 'Total number of events' })
  public readonly total: number;

  constructor(nodes: any[], total: number) {
    this.nodes = nodes;
    this.total = total;
  }
}
