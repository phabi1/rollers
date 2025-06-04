import { IEvent } from '@nestjs/cqrs';

export class ParticipantAddedToEventEvent implements IEvent {
  constructor(
    public readonly eventId: string,
    public readonly participantId: string,
    public readonly name: string,
    public readonly email: string
  ) {}
}
