import { PartialType } from '@nestjs/graphql';
import { CreatePostInput } from './create-post.input';

export class UpdatePostInput extends PartialType(CreatePostInput) {}
