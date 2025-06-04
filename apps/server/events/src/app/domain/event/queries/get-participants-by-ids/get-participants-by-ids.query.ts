import { IQuery } from '@nestjs/cqrs';

export class GetParticipantsByIdsQuery implements IQuery {
  constructor(public readonly ids: string[]) {}
}
