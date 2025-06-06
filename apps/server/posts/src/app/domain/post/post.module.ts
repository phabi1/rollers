import { Module } from '@nestjs/common';
import { EventBus } from '@nestjs/cqrs';
import { MongooseModule } from '@nestjs/mongoose';
import { Plugin as MongooseCqrsPlugin } from '@rollers/libs-server-mongoose-cqrs';
import { COMMAND_HANDLERS } from './commands';
import { QUERY_HANDLERS } from './queries';
import { PostSchema, PostSchemaName } from './schemas/post.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: PostSchemaName,
        useFactory: (eventBus: EventBus) => {
          PostSchema.plugin(MongooseCqrsPlugin, {
            eventBus,
          });
          return PostSchema;
        },
        inject: [EventBus],
      },
    ]),
  ],
  providers: [...COMMAND_HANDLERS, ...QUERY_HANDLERS],
})
export class PostModule {}
