import { Module } from '@nestjs/common';
import { ContentDefinitionModule } from '../../business/content-definition/content-definition.module';
import { SAGAS } from './sagas';

@Module({
  imports: [ContentDefinitionModule],
  providers: [...SAGAS],
})
export class ContentModule {}
