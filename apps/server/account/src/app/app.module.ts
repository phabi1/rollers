import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { config as appConfig } from '../config/app.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphqlModule } from './infra/graphql/graphql.module';

@Module({
  imports: [
    
    ConfigModule.forRoot({
      isGlobal: true,
      load: [
        appConfig
      ]
    }),
    GraphqlModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
