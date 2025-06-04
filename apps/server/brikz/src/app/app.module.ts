import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContentModule } from './domain/content/content.module';
import { SourceModule } from './domain/source/source.module';
import { GraphqlModule } from './infra/graphql/graphql.module';

@Module({
  imports: [
    CqrsModule.forRoot(),
    ContentModule,
    GraphqlModule,
    SourceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
