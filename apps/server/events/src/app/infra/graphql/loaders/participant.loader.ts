import { QueryBus } from '@nestjs/cqrs';
import { Loader } from '@rollers/libs-server-graphql-dataloader';
import DataLoader from 'dataloader';
import { IParticipantProps } from '../../../domain/event/models/participant.model';
import { GetParticipantsByIdsQuery } from '../../../domain/event';

@Loader('participant')
export class ParticipantLoader {
  constructor(private readonly queryBus: QueryBus) {}

  create() {
    return new DataLoader<string, IParticipantProps | null>(async (ids) => {
      const participants: IParticipantProps[] = await this.queryBus.execute(
        new GetParticipantsByIdsQuery([...ids])
      );
      return ids.map(
        (id) =>
          participants.find((participant) => participant.id === id) || null
      );
    });
  }
}
