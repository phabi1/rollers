import { IQuery } from "@nestjs/cqrs";

export class GetLegoQuery implements IQuery {
  constructor(public readonly id: string) {}
}