import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import {
  IParticipantProps,
  type ParticipantModel,
} from '../../models/participant.model';
import { GetParticipantsByIdsQuery } from './get-participants-by-ids.query';
import { InjectModel } from '@nestjs/mongoose';
import { ParticipantSchemaName } from '../../schemas/participant.schema';
import { Types } from 'mongoose';

@QueryHandler(GetParticipantsByIdsQuery)
export class GetParticipantsByIdsHandler
  implements IQueryHandler<GetParticipantsByIdsQuery, IParticipantProps[]>
{
  constructor(
    @InjectModel(ParticipantSchemaName)
    private readonly participantRepository: ParticipantModel
  ) {}

  async execute(
    query: GetParticipantsByIdsQuery
  ): Promise<IParticipantProps[]> {
    const { ids } = query;
    return this.participantRepository
      .find({ _id: { $in: ids.map((id) => new Types.ObjectId(id)) } })
      .exec();
  }
}
