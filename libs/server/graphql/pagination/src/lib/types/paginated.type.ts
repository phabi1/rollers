import { Type } from '@nestjs/common';
import { Field, Int, ObjectType } from '@nestjs/graphql';

interface IEdgeType<T> {
  cursor: string;
  node: T;
}

export interface IPaginatedType<T> {
  edges: IEdgeType<T>[];
  nodes: T[];
  total: number;
  hasNextPage: boolean;
}

export function Paginated<T>(classRef: Type<T>): Type<IPaginatedType<T>> {
  @ObjectType(`${classRef.name}Edge`)
  abstract class EdgeType {
    @Field(() => String)
    cursor!: string;

    @Field(() => classRef)
    node!: T;
  }

  @ObjectType({ isAbstract: true })
  abstract class PaginatedType implements IPaginatedType<T> {
    @Field(() => [EdgeType], { nullable: true })
    readonly edges!: EdgeType[];

    @Field(() => [classRef], { nullable: true })
    readonly nodes!: T[];

    @Field(() => Int)
    readonly total!: number;

    @Field()
    readonly hasNextPage!: boolean;

    constructor(nodes: T[], total: number, page: number, size: number) {
      this.nodes = nodes;
      this.total = total;
      this.hasNextPage = total > page * size;
      this.edges = nodes.map((node, index) => {
        const cursor = Buffer.from(`${page}:${index}`).toString('base64');
        return { cursor, node } as IEdgeType<T>;
      });
    }
  }
  return PaginatedType as Type<IPaginatedType<T>>;
}
