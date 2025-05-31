import { DashboardWidgetRegistry } from './dashboard-widget-registry';

export class DashboardWidgetRegistryManager {
  private static instance: DashboardWidgetRegistryManager;
  private static defaultRegistryName = 'default';

  private widgetRegistry: Map<string, any>;

  private constructor() {
    this.widgetRegistry = new Map();
  }

  public static getDefaultRegistryName(): string {
    return DashboardWidgetRegistryManager.defaultRegistryName;
  }
  public static setDefaultRegistryName(name: string): void {
    DashboardWidgetRegistryManager.defaultRegistryName = name;
  }

  public static getInstance(): DashboardWidgetRegistryManager {
    if (!DashboardWidgetRegistryManager.instance) {
      DashboardWidgetRegistryManager.instance =
        new DashboardWidgetRegistryManager();
    }
    return DashboardWidgetRegistryManager.instance;
  }

  public registerWidget(name: string, widget: any, registry?: string): void {
    const registryInstance = this.getRegistry(
      registry || DashboardWidgetRegistryManager.defaultRegistryName
    );
    registryInstance.register(name, widget);
  }

  public unregisterWidget(name: string, registry?: string): void {
    const registryInstance = this.getRegistry(
      registry || DashboardWidgetRegistryManager.defaultRegistryName
    );
    registryInstance.unregister(name);
  }

  public isWidgetRegistered(widgetId: string, registry?: string): boolean {
    const registryInstance = this.widgetRegistry.get(
      registry || DashboardWidgetRegistryManager.defaultRegistryName
    );
    return registryInstance.isRegistered(widgetId);
  }

  public getWidget(widgetId: string, registry?: string): any | undefined {
    const registryInstance = this.widgetRegistry.get(
      registry || DashboardWidgetRegistryManager.defaultRegistryName
    );
    return registryInstance.get(widgetId);
  }

  private getRegistry(name: string): DashboardWidgetRegistry {
    let registry = this.widgetRegistry.get(name);
    if (!registry) {
      registry = new DashboardWidgetRegistry();
      this.widgetRegistry.set(name, registry);
    }
    return registry;
  }
}
