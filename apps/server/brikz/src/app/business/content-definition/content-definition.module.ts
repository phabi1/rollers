import { Module } from '@nestjs/common';
import { ContentDefinitionService } from './services/content-definition.service';

@Module({
  providers: [ContentDefinitionService],
  exports: [ContentDefinitionService],
})
export class ContentDefinitionModule {}
