import { Injectable } from '@nestjs/common';
import { Content } from '../../models/content.model';

@Injectable()
export class GeneratorService {
  generate(
    content: string | Content,
    sources: Record<string, unknown>
  ): string {
    let definition: Content;
    if (typeof content === 'string') {
      definition = new Content().fromJson(content);
    } else if (content instanceof Content) {
      definition = content;
    } else {
      throw new Error('Invalid content type');
    }

    const root = {};

    return JSON.stringify(root);
  }

  private renderComponent(
    component: Record<string, unknown>,
    sources: Record<string, unknown>
  ): string {
    // Implement the logic to render a component based on its type and sources
    return '';
  }
}
