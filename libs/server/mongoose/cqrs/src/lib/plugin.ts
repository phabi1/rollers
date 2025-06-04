import { IEventBus } from '@nestjs/cqrs';

export function Plugin(
  schema: any,
  options: { autoCommit?: boolean; eventBus: IEventBus }
) {
  schema.method(
    'apply',
    function (
      this: any,
      event: any,
      position: 'append' | 'prepend' = 'append'
    ) {
      if (this._events === undefined) {
        this._events = [];
      }
      if (position === 'prepend') {
        this._events.unshift(event);
      } else {
        this._events.push(event);
      }
    }
  );

  schema.method('commit', function (this: any) {
    if (this._events === undefined || this._events.length === 0) {
      return;
    }
    const events = this._events;
    this._events = [];
    options.eventBus.publishAll(events);
  });

  schema.post('save', function (doc: any, next: any) {
    if (options.autoCommit !== false) {
      doc.commit();
    }
    next();
  });
}
