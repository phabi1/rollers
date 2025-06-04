import DataLoader from 'dataloader';

export interface DataloaderFactory {
  create(): DataLoader<any, any>;
}
