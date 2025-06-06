import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateLegoCommand } from './create-lego.command';
import { IBrikzProps } from '../../models/brikz.model';
import { InjectModel } from '@nestjs/mongoose';
import { type BrikzModel } from '../../models/brikz.model';
import { LegoSchemaName } from '../../schemas/lego.schema';
import { ValidatorService } from '../../../../business/content-definition/services/validator/validator.service';

@CommandHandler(CreateLegoCommand)
export class CreateLegoHandler
  implements ICommandHandler<CreateLegoCommand, IBrikzProps>
{
  constructor(
    @InjectModel(LegoSchemaName) private readonly legoRepository: BrikzModel,
    private readonly validatorService: ValidatorService
  ) {}

  async execute(command: CreateLegoCommand): Promise<IBrikzProps> {
    const { title, content, url } = command;

    const result = await this.validatorService.validate(content || '');
    if (!result.isValid) {
      throw new Error(`Invalid content: ${result.errors.join(', ')}`);
    }

    const sources: string[] = [];

    const lego = new this.legoRepository();
    lego.title = title;
    lego.setContent(content || '', sources);
    lego.url = url;

    return lego.save();
  }
}
