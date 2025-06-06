import { IQuery } from '@nestjs/cqrs';

export class GetUserByEmailOrUsernameQuery implements IQuery {
  constructor(private readonly identity: string) {}
}
