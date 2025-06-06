import { InputType, PartialType } from '@nestjs/graphql';
import { CreateEventInput } from './create-event.input';

@InputType({
  description: 'Input for updating an event',
})
export class UpdateEventInput extends PartialType(CreateEventInput) {}
