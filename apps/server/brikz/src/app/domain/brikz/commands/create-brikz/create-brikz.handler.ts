import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateBrikzCommand } from './create-brikz.command';
import { IBrikzProps } from '../../models/brikz.model';
import { InjectModel } from '@nestjs/mongoose';
import { type BrikzModel } from '../../models/brikz.model';
import { ContentDefinitionService } from '../../../../business/content-definition/services/content-definition.service';

@CommandHandler(CreateBrikzCommand)
export class CreateBrikzHandler
  implements ICommandHandler<CreateBrikzCommand, IBrikzProps>
{
  constructor(
    @InjectModel('Brikz') private readonly model: BrikzModel,
    private readonly contentDefinitionService: ContentDefinitionService
  ) {}

  execute(command: CreateBrikzCommand): Promise<IBrikzProps> {
    const { title, content, url } = command;

    const result = this.contentDefinitionService.validateContent(content || '');
    if (!result.isValid) {
      throw new Error(`Invalid content: ${result.errors.join(', ')}`);
    }

    const sources: string[] = [];

    const brikz = new this.model();
    brikz.title = title;
    brikz.setContent(content || '', sources);
    brikz.url = url;

    return brikz.save();
  }
}
