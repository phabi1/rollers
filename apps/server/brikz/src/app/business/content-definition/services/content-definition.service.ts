import { Injectable } from '@nestjs/common';
import { Result } from '../models/result.model';
import { Content } from '../models/content.model';

type Brik = {
  [key: string]: any;
};

@Injectable()
export class ContentDefinitionService {
  validateContent(str: string): Result {
    if (!str) {
      return Result.failure(['Content is required']);
    }

    const content = new Content();
    content.fromJson(str);

    const requiredFields = ['component'];

    if (!this.checkRequiredFieldsEveryAllBrikzs(content, requiredFields)) {
      return Result.failure(['Content must contain all required fields']);
    }

    return Result.success();
  }

  private checkRequiredFieldsEveryAllBrikzs(
    content: Brik,
    requiredFields: string[]
  ): boolean {
    return true;
  }
}
