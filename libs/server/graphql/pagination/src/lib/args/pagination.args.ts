import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class PaginationArgs {
  @Field(() => Int, {
    nullable: true,
    description: 'Page number to retrieve',
    defaultValue: 1,
  })
  public readonly page: number;

  @Field(() => Int, {
    nullable: true,
    description: 'Number of items to return',
    defaultValue: 10,
  })
  public readonly size: number;

  @Field(() => String, {
    nullable: true,
  })
  public readonly sort?: string;

  @Field(() => String, {
    nullable: true,
  })
  public readonly order?: 'ASC' | 'DESC';

  constructor(
    page?: number,
    size?: number,
    sort?: string,
    order?: 'ASC' | 'DESC'
  ) {
    this.page = page ?? 1; // Default to page 1
    this.size = size ?? 10; // Default to size 10
    this.sort = sort;
    this.order = order ?? 'ASC'; // Default to ascending order
  }
}
