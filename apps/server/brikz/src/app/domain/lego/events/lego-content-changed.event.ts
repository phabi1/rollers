export class LegoContentChangedEvent {
  constructor(
    public readonly legoId: string,
    public content: string,
    public sources: string[]
  ) {}
}
