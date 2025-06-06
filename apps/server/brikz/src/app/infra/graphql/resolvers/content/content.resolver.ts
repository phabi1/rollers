import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class ContentResolver {
  @Query(() => String, { name: 'brikzContent' })
  getContent(): string {
    return '{}';
  }
}
