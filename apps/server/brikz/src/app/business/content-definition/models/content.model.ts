export class Content {
  private definition: any;

  getSources(): string[] {
    const sources: string[] = [];
    return sources;
  }

  fromJson(json: string): Content {
    const content = new Content();
    return content;
  }

  toJSON(content: Content): string {
    return JSON.stringify(content.definition);
  }
}
