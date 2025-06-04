import { CountEventsHandler } from './count-events/count-events.handler';
import { GetEventHandler } from './get-event/get-event.handler';
import { GetEventsHandler } from './get-events/get-events.handler';
import { GetParticipantsByIdsHandler } from './get-participants-by-ids/get-participants-by-ids.handler';

export const QUERY_HANDLERS = [
  GetEventsHandler,
  CountEventsHandler,
  GetEventHandler,
  GetParticipantsByIdsHandler,
];
