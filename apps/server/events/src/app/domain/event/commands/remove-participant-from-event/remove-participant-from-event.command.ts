export class RemoveParticipantFromEventCommand {
  constructor(
    public readonly eventId: string,
    public readonly participantId: string
  ) {}
}
