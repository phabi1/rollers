import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { IEventProps, type EventModel } from '../../models/event.model';
import { EventSchemaName } from '../../schemas/event.schema';
import { GetEventQuery } from './get-event.query';

@QueryHandler(GetEventQuery)
export class GetEventHandler
  implements IQueryHandler<GetEventQuery, IEventProps>
{
  constructor(
    @InjectModel(EventSchemaName)
    private readonly eventRepository: EventModel
  ) {}

  async execute(query: GetEventQuery): Promise<any> {
    const { id } = query;
    return this.eventRepository.findById(id);
  }
}
