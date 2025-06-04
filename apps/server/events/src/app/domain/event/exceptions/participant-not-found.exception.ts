import { NotFoundException } from '@nestjs/common';

export class ParticipantNotFoundException extends NotFoundException {
  static withId(id: string): ParticipantNotFoundException {
    return new ParticipantNotFoundException({
      message: `Participant with id ${id} not found.`,
      code: 'PARTICIPANT_NOT_FOUND',
    });
  }
}
