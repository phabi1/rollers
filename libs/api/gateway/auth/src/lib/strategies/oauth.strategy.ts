import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-oauth2';
import { AuthService } from '../services/auth.service';

@Injectable()
export class OAuthStrategy extends PassportStrategy(Strategy, 'oauth') {
  constructor(private readonly authService: AuthService) {
    super({
      authorizationURL: 'https://example.com/oauth/authorize',
      tokenURL: 'https://example.com/oauth/token',
      clientID: 'your-client-id',
      clientSecret: 'your-client-secret',
      callbackURL: 'http://localhost:3000/auth/callback',
    });
  }
}
