import { CommandBus, QueryBus } from '@nestjs/cqrs';
import {
  Args,
  ID,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { InjectLoader } from '@rollers/libs-server-graphql-dataloader';
import { PaginationArgs } from '@rollers/libs-server-graphql-pagination';
import DataLoader from 'dataloader';
import {
  AddParticipantToEventCommand,
  CountEventsQuery,
  CreateEventCommand,
  DeleteEventCommand,
  GetEventQuery,
  GetEventsQuery,
  RemoveParticipantFromEventCommand,
  UpdateEventCommand,
} from '../../../../domain/event';
import { Event } from '../../types/event.type';
import { PaginatedEvent } from '../../types/paginated-event.type';
import { Participant } from '../../types/participant.type';
import { CreateEventInput } from '../../inputs/create-event.input';
import { UpdateEventInput } from '../../inputs/update-event.input';

@Resolver(() => Event)
export class EventResolver {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus
  ) {}

  @Query(() => PaginatedEvent, {
    description: 'Retrieve a paginated list of events',
  })
  async events(@Args() args: PaginationArgs) {
    const [nodes, total] = await Promise.all([
      this.queryBus.execute(new GetEventsQuery(args.page, args.size)),
      this.queryBus.execute(new CountEventsQuery()),
    ]);
    return new PaginatedEvent(nodes, total);
  }

  @Query(() => Event, {
    description: 'Retrieve a single event by ID',
  })
  event(@Args('id', { type: () => ID }) id: string) {
    return this.queryBus.execute(new GetEventQuery(id));
  }

  @Mutation(() => Event, {
    description: 'Create a new event',
  })
  createEvent(@Args('input') input: CreateEventInput) {
    return this.commandBus.execute(
      new CreateEventCommand(
        input.title,
        input.description,
        input.startAt,
        input.endAt,
        input.enableRegistration,
        input.registrationStartAt,
        input.registrationEndAt,
        input.registrationLimit
      )
    );
  }

  @Mutation(() => Event, {
    description: 'Update an existing event by ID',
  })
  updateEvent(
    @Args('id', { type: () => ID }) id: string,
    @Args('input') input: UpdateEventInput
  ) {
    return this.commandBus.execute(
      new UpdateEventCommand(
        id,
        input.title,
        input.description,
        input.startAt,
        input.endAt,
        input.enableRegistration,
        input.registrationStartAt,
        input.registrationEndAt,
        input.registrationLimit
      )
    );
  }

  @Mutation(() => Event, {
    description: 'Delete an event by ID',
  })
  deleteEvent(@Args('id', { type: () => ID }) id: string) {
    return this.commandBus.execute(new DeleteEventCommand(id));
  }

  @Mutation(() => Event, {
    description: 'Add a participant to an event',
  })
  addParticipantToEvent(
    @Args('eventId', { type: () => ID }) eventId: string,
    @Args('name') name: string,
    @Args('email') email: string
  ) {
    return this.commandBus.execute(
      new AddParticipantToEventCommand(eventId, name, email)
    );
  }
  @Mutation(() => Event, {
    description: 'Remove a participant from an event',
  })
  removeParticipantFromEvent(
    @Args('eventId', { type: () => ID }) eventId: string,
    @Args('participantId', { type: () => ID }) participantId: string
  ) {
    return this.commandBus.execute(
      new RemoveParticipantFromEventCommand(eventId, participantId)
    );
  }

  @ResolveField(() => [Participant], {
    description: 'Get participants of the event',
  })
  async participants(
    @Parent() parent: { participants: string[] },
    @InjectLoader('participant')
    participantLoader: DataLoader<string, Participant>
  ) {
    return participantLoader.loadMany(
      parent.participants.map((id) => id.toString())
    );
  }
}
