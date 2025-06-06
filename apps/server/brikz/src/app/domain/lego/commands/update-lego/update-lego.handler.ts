import { NotFoundException } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { ValidatorService } from '../../../../business/content-definition/services/validator/validator.service';
import {
  type BrikzModel,
  IBrikzMethods,
  IBrikzProps,
} from '../../models/brikz.model';
import { UpdateLegoCommand } from './update-lego.command';

@CommandHandler(UpdateLegoCommand)
export class UpdateLegoHandler
  implements ICommandHandler<UpdateLegoCommand, IBrikzProps>
{
  constructor(
    @InjectModel('Brikz')
    private readonly model: BrikzModel,
    private readonly validatorService: ValidatorService
  ) {}

  async execute(command: UpdateLegoCommand): Promise<IBrikzProps> {
    const { id, ...props } = command;

    const brikz = await this.model.findById(id);

    if (!brikz) {
      throw new NotFoundException(`Brikz with ID ${id} not found`);
    }

    const result = await this.validatorService.validate(
      props.content || ''
    );
    if (!result.isValid) {
      throw new Error(`Invalid content: ${result.errors.join(', ')}`);
    }

    this.buildEntityFromData(brikz, props);

    await brikz.save();
    return brikz;
  }

  private buildEntityFromData(
    brikz: Document<unknown, {}, IBrikzProps, {}> &
      Omit<IBrikzProps & { _id: Types.ObjectId } & { __v: number }, never> &
      IBrikzMethods,
    props: {
      title?: string | undefined;
      content?: string | undefined;
      sources?: string[] | undefined;
      url?: string | undefined;
    }
  ) {
    if (props.title) {
      brikz.title = props.title;
    }
    if (props.content) {
      brikz.setContent(
        props.content,
        props.sources || []
      );
    }
    if (props.url) {
      brikz.url = props.url;
    }
  }
}
