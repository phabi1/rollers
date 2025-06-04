export class Content {
  private definition: any;

  getSources(): string[] {
    const components: string[] = [];
    return components;
  }

  fromJson(json: string): Content {
    const content = new Content();
    return content;
  }

  toJSON(content: Content): string {
    return JSON.stringify(content.definition);
  }
}
