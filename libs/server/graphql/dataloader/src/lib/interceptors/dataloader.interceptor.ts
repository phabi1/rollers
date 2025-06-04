import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { DataloaderService } from '../services/dataloader.service';
import { DataLoaderContext } from '../models/dataloader-context.model';

@Injectable()
export class DataloaderInterceptor implements NestInterceptor {
  constructor(private readonly dataloaderService: DataloaderService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    if (!context.getType().includes('graphql')) {
      return next.handle();
    }

    // Get the request object from the context
    const [request] = context.getArgs();
    if (!request.loaders) {
      const loaders = new DataLoaderContext(this.dataloaderService);
      request.loaders = loaders;
    }

    return next.handle();
  }
}
