import { Test, TestingModule } from '@nestjs/testing';
import { OAuthStrategy } from './oauth.strategy';

describe('OauthStrategy', () => {
  let provider: OAuthStrategy;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OAuthStrategy],
    }).compile();

    provider = module.get<OAuthStrategy>(OAuthStrategy);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
