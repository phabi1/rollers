import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { IPasswordEncoder } from '../interfaces/password-encoder.interface';

@Injectable()
export class BcryptPasswordEncoder implements IPasswordEncoder {
  private readonly saltRounds: number = 10;

  hash(password: string): Promise<string> {
    return bcrypt.hash(password, this.saltRounds);
  }
  compare(plainPassword: string, hashedPassword: string): Promise<boolean> {
    return bcrypt.compare(plainPassword, hashedPassword);
  }
}
