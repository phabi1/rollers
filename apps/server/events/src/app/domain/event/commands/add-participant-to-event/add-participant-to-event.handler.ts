import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { EventNotFoundException } from '../../exceptions/event-not-found.exception';
import { ParticipantAlreadyExistsException } from '../../exceptions/participant-already-exists.exception';
import { type EventModel } from '../../models/event.model';
import { type ParticipantModel } from '../../models/participant.model';
import { EventSchemaName } from '../../schemas/event.schema';
import { ParticipantSchemaName } from '../../schemas/participant.schema';
import { AddParticipantToEventCommand } from './add-participant-to-event.command';

@CommandHandler(AddParticipantToEventCommand)
export class AddParticipantToEventHandler
  implements ICommandHandler<AddParticipantToEventCommand>
{
  constructor(
    @InjectModel(EventSchemaName)
    private readonly eventRepository: EventModel,
    @InjectModel(ParticipantSchemaName)
    private readonly participantRepository: ParticipantModel
  ) {}

  async execute(command: AddParticipantToEventCommand): Promise<void> {
    const { eventId, name, email } = command;

    // Fetch the event to ensure it exists
    const event = await this.eventRepository.findById(eventId);
    if (!event) {
      throw EventNotFoundException.withId(eventId);
    }

    // Check if the participant already exists
    const participantExists = await this.checkIfParticipantExists(email, eventId);
    if (participantExists) {
      throw ParticipantAlreadyExistsException.withEmail(email, eventId);
    }

    // Create a new participant
    const participant = new this.participantRepository({
      name,
      email,
      eventId: event._id, // Associate the participant with the event})
    });

    await participant.save();

    // Add the participant to the event
    event.addParticipant(participant.id);

    // Save the updated event
    await event.save();
  }

  private async checkIfParticipantExists(
    email: string,
    eventId: string
  ): Promise<boolean> {
    const existingParticipant = await this.participantRepository.exists({
      email,
      eventId: new Types.ObjectId(eventId),
    });
    return existingParticipant ? true : false;
  }
}
