import { DataloaderService } from '../services/dataloader.service';

export class DataLoaderContext {
  private instances: Record<string, any> = {};

  private readonly dataloaderService: DataloaderService;

  constructor(dataloaderService: DataloaderService) {
    this.dataloaderService = dataloaderService;
  }

  getLoader(name: string) {
    if (this.instances[name]) {
      return this.instances[name];
    }
    const factory = this.dataloaderService.getLoader(name);
    if (!factory) {
      throw new Error(`Loader with name "${name}" not found`);
    }

    this.instances[name] = factory.create();

    return this.instances[name];
  }
}
