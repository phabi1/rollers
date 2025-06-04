import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { DiscoveryService } from '@nestjs/core';
import { Loader } from '../decorators/loader.decorator';
import { DataloaderFactory } from '../interfaces/dataloader-factory.interface';

@Injectable()
export class DataloaderService implements OnModuleInit, OnModuleDestroy {
  private readonly loaders: Map<string, DataloaderFactory> = new Map();

  constructor(private readonly discoveryService: DiscoveryService) {}

  onModuleInit() {
    const providers = this.discoveryService.getProviders();
    const dataloaders = providers.filter((item) =>
      this.discoveryService.getMetadataByDecorator(Loader, item)
    );

    dataloaders.forEach((provider) => {
      const metadata = this.discoveryService.getMetadataByDecorator(
        Loader,
        provider
      );
      if (metadata) {
        this.loaders.set(metadata, provider.instance);
      }
    });
  }

  onModuleDestroy() {
    this.loaders.clear();
  }

  getLoader(name: string): DataloaderFactory {
    const loader = this.loaders.get(name);
    if (!loader) {
      throw new Error(`Loader with name "${name}" not found`);
    }
    return loader;
  }
}
