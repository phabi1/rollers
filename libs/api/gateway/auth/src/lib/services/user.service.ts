import { Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class UserService {
  constructor(private readonly client: ClientProxy) {}

  findUserByUsername(username: string): Promise<any> {
    return lastValueFrom(
      this.client.send('user.findOneByUsername', { username })
    );
  }

  comparePassword(password: string, userId: string): Promise<boolean> {
    return lastValueFrom(
      this.client.send('user.comparePassword', { password, userId })
    );
  }
}
