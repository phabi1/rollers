import { ICommand } from '@nestjs/cqrs';

export class CreateBrikzCommand implements ICommand {
  constructor(
    private data: {
      title: string;
      content?: string;
      url: string;
    }
  ) {}

  get title(): string {
    return this.data.title;
  }

  get content(): string | undefined {
    return this.data.content;
  }

  get url(): string {
    return this.data.url;
  }
}
