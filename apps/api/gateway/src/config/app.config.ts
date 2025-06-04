import { registerAs } from '@nestjs/config';

export const config = registerAs('app', () => ({
  name: process.env.NAME || 'api-gateway',
  port: parseInt(process.env.PORT || '3000', 10),
  host: process.env.HOST || 'localhost',
  env: process.env.NODE_ENV || 'development',
  data: process.env.DATA_DIR || 'data',
}));
