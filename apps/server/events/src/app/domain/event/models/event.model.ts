import { Model } from 'mongoose';
import { IParticipantProps } from './participant.model';

export interface IEventProps {
  id: string; // Unique identifier for the event
  title: string;
  description: string;
  startAt: Date;
  endAt: Date;
  enableRegistration: boolean;
  registrationStartAt?: Date;
  registrationEndAt?: Date;
  registrationLimit?: number;
  participants?: string[]; // Assuming participants are stored as an array of string IDs
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IEventMethods {
  addParticipant(participant: IParticipantProps): void;
  removeParticipant(participant: IParticipantProps): void;
}

export type EventModel = Model<IEventProps, {}, IEventMethods>;
