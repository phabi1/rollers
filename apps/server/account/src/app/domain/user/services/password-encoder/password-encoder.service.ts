import { Inject, Injectable } from '@nestjs/common';
import { PASSWORD_ENCODER } from '../../constants';
import { type IPasswordEncoder } from '../../interfaces/password-encoder.interface';

@Injectable()
export class PasswordEncoderService {
  constructor(
    @Inject(PASSWORD_ENCODER) private readonly encoder: IPasswordEncoder
  ) {}

  async hashPassword(password: string): Promise<string> {
    return this.encoder.hash(password);
  }

  async comparePasswords(
    plainPassword: string,
    hashedPassword: string
  ): Promise<boolean> {
    return this.encoder.compare(plainPassword, hashedPassword);
  }
}
