import { Query, Resolver } from '@nestjs/graphql';
import { Me } from '../../types/me.type';

@Resolver()
export class MeResolver {
  @Query(() => Me, {
    description: 'Retrieve the current user information',
  })
  me(): Me {
    return {
      id: '1',
    };
  }
}
