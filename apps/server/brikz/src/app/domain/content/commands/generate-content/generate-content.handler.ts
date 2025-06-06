import { CommandHandler, ICommandHandler, QueryBus } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { GeneratorService } from '../../../../business/content-definition/services/generator/generator.service';
import { GetLegoQuery } from '../../../lego';
import { GetSourcesByIdsQuery } from '../../../source';
import { type ContentModel } from '../../models/content.model';
import { ContentSchemaName } from '../../schemas/content.schema';
import { GenerateContentCommand } from './generate-content.command';

@CommandHandler(GenerateContentCommand)
export class GenerateContentHandler
  implements ICommandHandler<GenerateContentCommand, void>
{
  constructor(
    @InjectModel(ContentSchemaName)
    private readonly contentRepository: ContentModel,
    private readonly queryBus: QueryBus,
    private readonly generatorService: GeneratorService
  ) {}

  async execute(command: GenerateContentCommand): Promise<void> {
    const { legoId } = command;

    const lego = await this.queryBus.execute(new GetLegoQuery(legoId));
    if (!lego) {
      throw new Error(`Lego with id ${legoId} not found`);
    }

    const sources: { id: string; value: unknown }[] =
      await this.queryBus.execute(new GetSourcesByIdsQuery(lego.sources || []));

    if (sources.length !== lego.sources?.length) {
      throw new Error(`Some sources for lego with id ${legoId} not found`);
    }

    const content: string = await this.generatorService.generate(
      lego.content,
      sources.reduce((acc, source) => {
        acc[source.id] = source;
        return acc;
      }, {} as Record<string, unknown>)
    );

    await this.contentRepository.updateOne(
      { legoId: lego.id },
      {
        slug: lego.slug,
        legoId: lego.id,
        content: content,
      },
      {
        upsert: true,
      }
    );
  }
}
