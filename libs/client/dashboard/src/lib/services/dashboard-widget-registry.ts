export class DashboardWidgetRegistry {
  private types: { [key: string]: any } = {};

  register(name: string, widget: any) {
    this.types[name] = widget;
  }

  unregister(name: string) {
    delete this.types[name];
  }

  isRegistered(name: string) {
    return this.types.hasOwnProperty(name);
  }

  get(name: string) {
    return this.types[name];
  }
}
