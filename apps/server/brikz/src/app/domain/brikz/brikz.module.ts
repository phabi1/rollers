import { Module } from '@nestjs/common';
import { EventBus } from '@nestjs/cqrs';
import { MongooseModule } from '@nestjs/mongoose';
import { Plugin as MongooseCqrsPlugin } from '@rollers/libs-server-mongoose-cqrs';
import { ContentDefinitionModule } from '../../business/content-definition/content-definition.module';
import { COMMAND_HANDLERS } from './commands';
import { QUERY_HANDLERS } from './queries';
import { BrikzSchema } from './schemas/brikz.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: 'Brikz',
        useFactory: (eventBus: EventBus) => {
          BrikzSchema.plugin(MongooseCqrsPlugin, {
            eventBus,
          });
          return BrikzSchema;
        },
        inject: [EventBus],
      },
    ]),
    ContentDefinitionModule,
  ],
  providers: [...COMMAND_HANDLERS, ...QUERY_HANDLERS],
})
export class BrikzModule {}
