export class ArchivePostCommand {
  constructor(public readonly postId: string, public readonly userId: string) {}

  static create(postId: string, userId: string): ArchivePostCommand {
    return new ArchivePostCommand(postId, userId);
  }
}
