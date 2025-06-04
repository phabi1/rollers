import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { EventNotFoundException } from '../../exceptions/event-not-found.exception';
import { type EventModel } from '../../models/event.model';
import { type ParticipantModel } from '../../models/participant.model';
import { EventSchemaName } from '../../schemas/event.schema';
import { ParticipantSchemaName } from '../../schemas/participant.schema';
import { RemoveParticipantFromEventCommand } from './remove-participant-from-event.command';

@CommandHandler(RemoveParticipantFromEventCommand)
export class RemoveParticipantFromEventHandler
  implements ICommandHandler<RemoveParticipantFromEventCommand>
{
  constructor(
    @InjectModel(EventSchemaName)
    private readonly eventRepository: EventModel,
    @InjectModel(ParticipantSchemaName)
    private readonly participantRepository: ParticipantModel
  ) {}

  async execute(command: RemoveParticipantFromEventCommand): Promise<void> {
    const { eventId, participantId } = command;

    const event = await this.eventRepository.findById(eventId);
    if (!event) {
      throw EventNotFoundException.withId(eventId);
    }

    const participant = await this.participantRepository.findById(
      participantId
    );
    if (!participant) {
      throw new Error(`Participant with ID ${participantId} not found`);
    }

    await participant.deleteOne();

    event.removeParticipant(participant);

    await event.save();
  }
}
