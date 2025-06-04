import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR, DiscoveryModule } from '@nestjs/core';
import { DataloaderService } from './services/dataloader.service';
import { DataloaderInterceptor } from './interceptors/dataloader.interceptor';

@Module({
  imports: [DiscoveryModule],
  providers: [
    DataloaderService,
    {
      provide: APP_INTERCEPTOR,
      useClass: DataloaderInterceptor,
    },
  ],
})
export class LibsServerGraphqlDataloaderModule {}
