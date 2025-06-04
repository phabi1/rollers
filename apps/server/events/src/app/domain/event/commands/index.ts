import { AddParticipantToEventHandler } from './add-participant-to-event/add-participant-to-event.handler';
import { CreateEventHandler } from './create-event/create-event.handler';
import { DeleteEventHandler } from './delete-event/delete-event.handler';
import { RemoveParticipantFromEventHandler } from './remove-participant-from-event/remove-participant-from-event.handler';
import { UpdateEventHandler } from './update-event/update-event.handler';

export const COMMAND_HANDLERS = [
  CreateEventHandler,
  UpdateEventHandler,
  DeleteEventHandler,
  AddParticipantToEventHandler,
  RemoveParticipantFromEventHandler,
];
