import { ICommand } from '@nestjs/cqrs';

export class PublishPostCommand implements ICommand {
  constructor(
    public readonly postId: string,
    public readonly userId: string,
    public readonly draftId?: string,
  ) {}
}
