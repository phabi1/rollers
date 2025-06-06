import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CqrsModule } from '@nestjs/cqrs';
import { config as appConfig } from '../config/app.config';
import { config as databaseConfig } from '../config/database.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './domain/post/post.module';
import { GraphqlModule } from './infra/graphql/graphql.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig, databaseConfig],
    }),
    CqrsModule.forRoot(),
    PostModule,
    GraphqlModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
