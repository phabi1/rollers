import { Saga } from '@nestjs/cqrs';
import { map } from 'rxjs';
import { LegoContentChangedEvent } from '../../lego/events/lego-content-changed.event';
import { LegoCreatedEvent } from '../../lego/events/lego-created.event';
import { GenerateContentCommand } from '../commands/generate-content/generate-content.command';

export class LegoSaga {
  @Saga()
  created = (events$: any) => {
    return events$
      .ofType(LegoCreatedEvent)
      .pipe(
        map(
          (event: LegoCreatedEvent) => new GenerateContentCommand(event.legoId)
        )
      );
  };

  @Saga()
  contentChanged = (events$: any) => {
    return events$
      .ofType(LegoContentChangedEvent)
      .pipe(
        map(
          (event: LegoContentChangedEvent) =>
            new GenerateContentCommand(event.legoId)
        )
      );
  };
}
