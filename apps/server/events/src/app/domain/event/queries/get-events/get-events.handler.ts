import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { SortOrder } from 'mongoose';
import { IEventProps, type EventModel } from '../../models/event.model';
import { EventSchemaName } from '../../schemas/event.schema';
import { GetEventsQuery } from './get-events.query';

@QueryHandler(GetEventsQuery)
export class GetEventsHandler
  implements IQueryHandler<GetEventsQuery, IEventProps[]>
{
  constructor(
    @InjectModel(EventSchemaName) private readonly eventRepository: EventModel
  ) {}

  async execute(query: GetEventsQuery): Promise<IEventProps[]> {
    const { pagination } = query;

    const sort: { [x: string]: SortOrder } = pagination.sort
      ? { [pagination.sort]: pagination.order === 'ASC' ? 1 : -1 }
      : { title: 1 }; // Default sort by title if no sort is provided

    return this.eventRepository
      .find()
      .skip(pagination.skip)
      .limit(pagination.take)
      .sort(sort)
      .exec();
  }
}
