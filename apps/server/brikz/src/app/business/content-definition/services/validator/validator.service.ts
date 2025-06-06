import { Injectable } from '@nestjs/common';
import { Content } from '../../models/content.model';
import { Result } from '../../models/result.model';

@Injectable()
export class ValidatorService {
  async validate(content: string | Content): Promise<Result> {
    let definition: Content;
    if (typeof content === 'string') {
      definition = new Content().fromJson(content);
    } else if (content instanceof Content) {
      definition = content;
    } else {
      throw new Error('Invalid content type');
    }

    const sources = definition.getSources();
    const errors: string[] = [];

    // Example validation logic
    if (sources.length === 0) {
      errors.push('Content must have at least one source.');
    }

    return new Result(errors.length === 0, errors);
  }
}
