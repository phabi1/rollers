import { Injectable } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthIdentity } from '../models/auth-identity.model';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async validateUser(
    username: string,
    password: string
  ): Promise<AuthIdentity | null> {
    const user = await this.userService.findUserByUsername(username);
    if (!user) {
      return null;
    }

    if (!(await this.userService.comparePassword(password, user.id))) {
      return null;
    }

    return user;
  }

  login(user: any) {
    // Implement your login logic here
    return { access_token: 'token' };
  }
}
