import { IQuery } from '@nestjs/cqrs';

export class GetPostsQuery implements IQuery {
  private readonly page: number;
  private readonly size: number;
  

  public get pagination() {
    return {
      skip: (this.page - 1) * this.size,
      take: this.size,
    };
  }

  constructor(page: number = 1, size: number = 10) {
    this.page = page;
    this.size = size;
  }
}
