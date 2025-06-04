import { IQuery } from '@nestjs/cqrs';

export class GetEventsQuery implements IQuery {
  constructor(
    private readonly page: number = 1,
    private readonly size: number = 10,
    private sortBy?: string,
    private sortOrder: 'ASC' | 'DESC' = 'ASC'
  ) {}

  get pagination() {
    return {
      skip: (this.page - 1) * this.size,
      take: this.size,
      sort: this.sortBy,
      order: this.sortOrder,
    };
  }
}
