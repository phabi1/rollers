import { Module } from '@nestjs/common';
import { EventBus } from '@nestjs/cqrs';
import { MongooseModule } from '@nestjs/mongoose';
import { Plugin as MongooseCqrsPlugin } from '@rollers/libs-server-mongoose-cqrs';
import { COMMAND_HANDLERS } from './commands';
import { QUERY_HANDLERS } from './queries';
import { EventSchema, EventSchemaName } from './schemas/event.schema';
import { ParticipantSchema, ParticipantSchemaName } from './schemas/participant.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: EventSchemaName,
        useFactory: (eventBus: EventBus) => {
          EventSchema.plugin(MongooseCqrsPlugin, {
            autoCommit: true,
            eventBus,
          });
          return EventSchema;
        },
        inject: [EventBus],
      },
      {
        name: ParticipantSchemaName,
        useFactory: () => {
          return ParticipantSchema;
        },
      },
    ]),
  ],
  providers: [...COMMAND_HANDLERS, ...QUERY_HANDLERS],
})
export class EventModule {}
