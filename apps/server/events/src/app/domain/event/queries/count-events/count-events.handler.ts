import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { type EventModel } from '../../models/event.model';
import { EventSchemaName } from '../../schemas/event.schema';
import { CountEventsQuery } from './count-events.query';

@QueryHandler(CountEventsQuery)
export class CountEventsHandler
  implements IQueryHandler<CountEventsQuery, number>
{
  constructor(
    @InjectModel(EventSchemaName)
    private readonly eventRepository: EventModel
  ) {}

  async execute(query: CountEventsQuery): Promise<number> {
    return this.eventRepository.countDocuments();
  }
}
