import { ICommand } from '@nestjs/cqrs';

export class CreateEventCommand implements ICommand {
  constructor(
    public readonly title: string,
    public readonly description: string,
    public readonly startAt?: Date,
    public readonly endAt?: Date,
    public readonly enableRegistration?: boolean,
    public readonly registrationStartAt?: Date,
    public readonly registrationEndAt?: Date,
    public readonly registrationLimit?: number
  ) {}
}
