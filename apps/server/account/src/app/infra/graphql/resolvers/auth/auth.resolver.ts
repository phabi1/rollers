import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthToken } from '../../types/auth-token.type';
import { AuthService } from '../../../../domain/auth/services/auth.service';
import { SignInInput } from '../../inputs/signin.input';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => AuthToken)
  async signIn(@Args('input') input: SignInInput): Promise<AuthToken> {

    const res = await this.authService.signIn(input.identity, input.password);

    return {
      accessToken: '',
      refreshToken: '',
      expiresIn: 3600,
    };
  }

  @Mutation(() => AuthToken)
  async signUp(): Promise<AuthToken> {
    return {
      accessToken: '',
      refreshToken: '',
      expiresIn: 3600,
    };
  }

  @Mutation(() => AuthToken)
  async signOut(): Promise<AuthToken> {
    return {
      accessToken: '',
      refreshToken: '',
      expiresIn: 0,
    };
  }

  @Mutation(() => AuthToken)
  async refreshToken(): Promise<AuthToken> {
    return {
      accessToken: '',
      refreshToken: '',
      expiresIn: 3600,
    };
  }
}
