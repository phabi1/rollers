import { NotFoundException } from '@nestjs/common';

export class EventNotFoundException extends NotFoundException {
  static withId(id: string): EventNotFoundException {
    return new EventNotFoundException({
      code: 'EVENT_NOT_FOUND',
      message: `Event with id ${id} not found.`,
    });
  }
}
