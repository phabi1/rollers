import { Module } from '@nestjs/common';
import { EventBus } from '@nestjs/cqrs';
import { MongooseModule } from '@nestjs/mongoose';
import { Plugin as MongooseCqrsPlugin } from '@rollers/libs-server-mongoose-cqrs';
import { ContentDefinitionModule } from '../../business/content-definition/content-definition.module';
import { COMMAND_HANDLERS } from './commands';
import { QUERY_HANDLERS } from './queries';
import { LegoSchema, LegoSchemaName } from './schemas/lego.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: LegoSchemaName,
        useFactory: (eventBus: EventBus) => {
          LegoSchema.plugin(MongooseCqrsPlugin, {
            eventBus,
          });
          return LegoSchema;
        },
        inject: [EventBus],
      },
    ]),
    ContentDefinitionModule,
  ],
  providers: [...COMMAND_HANDLERS, ...QUERY_HANDLERS],
})
export class LegoModule {}
