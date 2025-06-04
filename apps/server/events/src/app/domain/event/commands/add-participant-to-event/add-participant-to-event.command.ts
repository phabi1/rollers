export class AddParticipantToEventCommand {
  constructor(
    public readonly eventId: string,
    public readonly name: string,
    public readonly email: string
  ) {}
}
