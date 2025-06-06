import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { PasswordEncoderService } from '../../services/password-encoder/password-encoder.service';
import { ComparePasswordQuery } from './compare-password.query';

@QueryHandler(ComparePasswordQuery)
export class ComparePasswordHandler
  implements IQueryHandler<ComparePasswordQuery, boolean>
{
  constructor(
    private readonly passwordEncoderService: PasswordEncoderService
  ) {}

  async execute(query: ComparePasswordQuery): Promise<boolean> {
    const { plainPassword, hashedPassword } = query;
    return this.passwordEncoderService.comparePasswords(
      plainPassword,
      hashedPassword
    );
  }
}
