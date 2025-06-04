import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { EventNotFoundException } from '../../exceptions/event-not-found.exception';
import { type EventModel, IEventProps } from '../../models/event.model';
import { EventSchemaName } from '../../schemas/event.schema';
import { DeleteEventCommand } from './delete-event.command';

@CommandHandler(DeleteEventCommand)
export class DeleteEventHandler
  implements ICommandHandler<DeleteEventCommand, IEventProps>
{
  constructor(
    @InjectModel(EventSchemaName)
    private readonly eventRepository: EventModel
  ) {}

  async execute(command: DeleteEventCommand): Promise<IEventProps> {
    const { id } = command;

    const event = await this.eventRepository.findById(id);
    if (!event) {
      throw EventNotFoundException.withId(id);
    }

    await event.deleteOne();

    return event;
  }
}
