import { Model } from "mongoose";

export interface IParticipantProps {
  id: string;
  name: string;
  email: string;
  eventId: string; // Reference to the event this participant belongs to
  createdAt?: Date;
  updatedAt?: Date;
  status?: 'registered' | 'attended' | 'cancelled'; // Status of the participant
  registrationDate?: Date; // Date when the participant registered
}

export type ParticipantModel = Model<IParticipantProps>;