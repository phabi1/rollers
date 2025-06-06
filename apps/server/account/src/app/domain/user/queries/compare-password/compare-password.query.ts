import { IQuery } from "@nestjs/cqrs";

export class ComparePasswordQuery implements IQuery {
  constructor(
    public readonly plainPassword: string,
    public readonly hashedPassword: string
  ) {}

}