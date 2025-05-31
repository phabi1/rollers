import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LibsApiGatewayAuthModule } from '@rollers/libs-api-gateway-auth';

@Module({
  imports: [LibsApiGatewayAuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
