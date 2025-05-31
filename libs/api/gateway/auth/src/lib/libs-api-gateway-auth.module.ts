import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { LocalStrategy } from './strategies/local.strategy';
import { OAuthStrategy } from './strategies/oauth.strategy';

@Module({
  imports: [PassportModule],
  controllers: [],
  providers: [AuthService, UserService, OAuthStrategy, LocalStrategy],
  exports: [],
})
export class LibsApiGatewayAuthModule {}
