export class BrikzContentChangedEvent {
  constructor(
    public readonly brikzId: string,
    public content: string,
    public sources: string[]
  ) {}
}
