import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class PaginationArgs {
  @Field(() => Int, {
    nullable: true,
    description: 'Number of items to skip',
  })
  public readonly page: number;

  @Field(() => Int, {
    nullable: true,
    description: 'Number of items to return',
  })
  public readonly size: number;

  @Field(() => String, {
    nullable: true,
  })
  public readonly sortBy?: string;
  @Field(() => String, {
    nullable: true,
  })
  public readonly sortOrder?: 'ASC' | 'DESC';

  constructor(
    page?: number,
    size?: number,
    sortBy?: string,
    sortOrder?: 'ASC' | 'DESC'
  ) {
    this.page = page ?? 1; // Default to page 1
    this.size = size ?? 10; // Default to size 10
    this.sortBy = sortBy;
    this.sortOrder = sortOrder ?? 'ASC'; // Default to ascending order
  }
}
