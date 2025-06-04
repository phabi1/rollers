import { Schema } from 'mongoose';

export const ParticipantSchemaName = 'Participant';

export const ParticipantSchema = new Schema(
  {
    eventId: { type: String, required: true },
    userId: { type: String, required: true },
    status: {
      type: String,
      enum: ['pending', 'confirmed', 'cancelled'],
      default: 'pending',
    },
    registrationDate: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);
