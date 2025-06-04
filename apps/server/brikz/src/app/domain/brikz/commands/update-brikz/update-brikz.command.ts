import { ICommand } from '@nestjs/cqrs';

export class UpdateBrikzCommand implements ICommand {
  constructor(
    public readonly id: string,
    public readonly title?: string,
    public readonly content?: string,
    public readonly sources?: string[],
    public readonly url?: string
  ) {}
}
