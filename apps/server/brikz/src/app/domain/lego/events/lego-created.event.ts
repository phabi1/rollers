export class LegoCreatedEvent {
  constructor(
    public readonly legoId: string,
    public content: string,
    public sources: string[]
  ) {}
}
