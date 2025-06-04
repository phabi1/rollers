import { Schema } from 'mongoose';
import { ParticipantAddedToEventEvent } from '../events/participant-added-to-event.event';
import { IParticipantProps } from '../models/participant.model';
import { ParticipantRemovedFromEventEvent } from '../events/participant-removed-from-event.event';

export const EventSchemaName = 'Event';

export const EventSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    startAt: { type: Date, required: true },
    endAt: { type: Date, required: true },
    enableRegistration: { type: Boolean, default: false },
    registrationStartAt: { type: Date, default: null },
    registrationEndAt: { type: Date, default: null },
    registrationLimit: { type: Number, default: null },
    participants: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Participant',
      },
    ],
  },
  {
    timestamps: true,
  }
);

EventSchema.methods.addParticipant = function (participant: IParticipantProps) {
  if (!this.participants.includes(participant.id)) {
    this.participants.push(participant.id);
    this.apply(
      new ParticipantAddedToEventEvent(
        this.id,
        participant.id,
        participant.name,
        participant.email
      )
    );
  }
};

EventSchema.methods.removeParticipant = function (
  participant: IParticipantProps
) {
  const index = this.participants.indexOf(participant.id);
  if (index > -1) {
    this.participants.splice(index, 1);
    this.apply(new ParticipantRemovedFromEventEvent(this.id, participant.id));
  }
};
