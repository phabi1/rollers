import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { IUserRepository } from "../../interfaces/user-repository.interface";
import { GetUserByEmailOrUsernameQuery } from "./get-user-by-email-or-username.query";

@QueryHandler(GetUserByEmailOrUsernameQuery)
export class GetUserByEmailOrUsernameHandler implements IQueryHandler<GetUserByEmailOrUsernameQuery, any> {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(query: GetUserByEmailOrUsernameQuery): Promise<User | null> {
    const { identity } = query;
    return this.userRepository.findByEmailOrUsername(identity);
  }
}