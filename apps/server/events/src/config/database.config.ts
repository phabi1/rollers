import { registerAs } from '@nestjs/config';

export const config = registerAs('database', () => ({
  uri: process.env.MONGO_URL || 'mongodb://localhost:27017/events',
}));
