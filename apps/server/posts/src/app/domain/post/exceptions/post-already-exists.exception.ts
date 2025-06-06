import { ConflictException } from '@nestjs/common';

export class PostAlreadyExistsException extends ConflictException {
  static withSlug(slug: string): PostAlreadyExistsException {
    return new PostAlreadyExistsException({
      code: 'POST_ALREADY_EXISTS',
      message: `Post with slug "${slug}" already exists.`,
    });
  }
}
