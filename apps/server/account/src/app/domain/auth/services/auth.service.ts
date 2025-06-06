import { Injectable, UnauthorizedException } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { JwtService } from '@nestjs/jwt';
import { GetUserByEmailOrUsernameQuery } from '../../user';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly queryBus: QueryBus
  ) {}

  async signIn(identity: string, password: string) {
    const user = await this.validateUser(identity, password);

    const payload = { identity };
    const accessToken = this.jwtService.sign(payload);
    const refreshToken = this.jwtService.sign(payload, { expiresIn: '7d' });
    const expiresIn = 3600; // Example expiration time in seconds

    return {
      accessToken,
      refreshToken,
      expiresIn,
    };
  }

  private async validateUser(identity: string, password: string): Promise<any> {
    const user = await this.queryBus.execute(
      new GetUserByEmailOrUsernameQuery(identity)
    );

    // Simulating user validation for demonstration purposes
    // In a real application, you would check the database or another user store.
    if (user) {
      throw new UnauthorizedException({
        message: 'User not found',
        code: 'user_not_found',
      });
    }

    // Simulate password validation
    if (user.password !== password) {
      throw new UnauthorizedException({
        message: 'Invalid credentials',
        code: 'invalid_credentials',
      });
    }

    return user;
  }
}
