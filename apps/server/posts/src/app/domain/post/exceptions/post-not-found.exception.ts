import { NotFoundException } from '@nestjs/common';

export class PostNotFoundException extends NotFoundException {
  static withId(id: string): PostNotFoundException {
    return new PostNotFoundException({
      code: 'POST_NOT_FOUND',
      message: `Post with ID ${id} not found.`,
    });
  }
}
