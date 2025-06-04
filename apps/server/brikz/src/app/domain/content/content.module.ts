import { Module } from '@nestjs/common';
import { BrikzModule } from '../brikz/brikz.module';

@Module({
  imports: [BrikzModule],
})
export class ContentModule {}
