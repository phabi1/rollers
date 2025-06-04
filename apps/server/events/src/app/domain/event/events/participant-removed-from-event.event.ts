import { IEvent } from "@nestjs/cqrs";

export class ParticipantRemovedFromEventEvent implements IEvent {

  constructor(
    public readonly eventId: string,
    public readonly participantId: string,
  ) {}
}