import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { EventNotFoundException } from '../../exceptions/event-not-found.exception';
import { type EventModel, IEventProps } from '../../models/event.model';
import { EventSchemaName } from '../../schemas/event.schema';
import { UpdateEventCommand } from './update-event.command';

@CommandHandler(UpdateEventCommand)
export class UpdateEventHandler
  implements ICommandHandler<UpdateEventCommand, IEventProps>
{
  constructor(
    @InjectModel(EventSchemaName) private readonly eventRepository: EventModel
  ) {}

  async execute(command: UpdateEventCommand): Promise<IEventProps> {
    const {
      id,
      title,
      description,
      startAt,
      endAt,
      enableRegistration,
      registrationStartAt,
      registrationEndAt,
      registrationLimit,
    } = command;

    const event = await this.eventRepository.findById(id);

    if (!event) {
      throw EventNotFoundException.withId(id);
    }

    if (title !== undefined) {
      event.title = title;
    }
    if (description !== undefined) {
      event.description = description;
    }
    if (startAt !== undefined) {
      event.startAt = startAt;
    }
    if (endAt !== undefined) {
      event.endAt = endAt;
    }
    if (enableRegistration !== undefined) {
      event.enableRegistration = enableRegistration;
    }
    if (registrationStartAt !== undefined) {
      event.registrationStartAt = registrationStartAt;
    }
    if (registrationEndAt !== undefined) {
      event.registrationEndAt = registrationEndAt;
    }
    if (registrationLimit !== undefined) {
      event.registrationLimit = registrationLimit;
    }

    await event.save();

    return event;
  }
}
