import { ConflictException } from '@nestjs/common';

export class ParticipantAlreadyExistsException extends ConflictException {
  static withEmail(
    email: string,
    eventId: string
  ): ParticipantAlreadyExistsException {
    return new ParticipantAlreadyExistsException({
      message: `Participant with email ${email} already exists for event ${eventId}.`,
      code: 'PARTICIPANT_ALREADY_EXISTS',
    });
  }
}
