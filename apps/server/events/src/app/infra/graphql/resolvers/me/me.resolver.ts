import { ResolveField, Resolver } from '@nestjs/graphql';
import { Me } from '../../types/me.type';
import { PaginatedEvent } from '../../types/paginated-event.type';

@Resolver(() => Me)
export class MeResolver {
  @ResolveField(() => PaginatedEvent, {
    description: 'Retrieve a paginated list of events for the current user',
  })
  async events() {
    // This should be replaced with the actual logic to fetch events for the current user
    // For now, returning an empty PaginatedEvent as a placeholder
    return new PaginatedEvent([], 0);
  }
}
