import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { IEventProps, type EventModel } from '../../models/event.model';
import { CreateEventCommand } from './create-event.command';
import { EventSchemaName } from '../../schemas/event.schema';

@CommandHandler(CreateEventCommand)
export class CreateEventHandler
  implements ICommandHandler<CreateEventCommand, IEventProps>
{
  constructor(
    @InjectModel(EventSchemaName)
    private readonly eventRepository: EventModel
  ) {}

  async execute(command: CreateEventCommand): Promise<IEventProps> {
    const {
      title,
      startAt,
      endAt,
      enableRegistration,
      registrationStartAt,
      registrationEndAt,
      registrationLimit,
    } = command;

    const event = new this.eventRepository({
      title,
      startAt,
      endAt,
      enableRegistration,
      registrationStartAt,
      registrationEndAt,
      registrationLimit,
    });
    await event.save();

    return event;
  }
}
