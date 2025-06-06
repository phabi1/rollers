import { Module } from '@nestjs/common';
import { GeneratorService } from './services/generator/generator.service';
import { ValidatorService } from './services/validator/validator.service';

@Module({
  providers: [GeneratorService, ValidatorService],
  exports: [ValidatorService, GeneratorService],
})
export class ContentDefinitionModule {}
