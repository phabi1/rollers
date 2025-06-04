import { Test, TestingModule } from '@nestjs/testing';
import { ContentDefinitionService } from './content-definition.service';

describe('ContentDefinitionService', () => {
  let service: ContentDefinitionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContentDefinitionService],
    }).compile();

    service = module.get<ContentDefinitionService>(ContentDefinitionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
