import { createContext } from 'react';
import { DashboardWidgetRegistryManager } from '../services/dashboard-widget-registry-manager';

export const DashboardWidgetRegistryContext = createContext<string>('default');

export function DashboardWidgetRegistryProvider({
  children,
  widgets,
  registryName,
}: {
  children: React.ReactNode;
  widgets: Record<string, any>;
  registryName?: string;
}) {
  if (!registryName) {
    registryName = DashboardWidgetRegistryManager.getDefaultRegistryName();
  }
  if (!widgets) {
    throw new Error(
      'No widgets provided to the DashboardWidgetRegistryProvider'
    );
  }
  const dashboardWidgetRegistryManager =
    DashboardWidgetRegistryManager.getInstance();
  Object.entries(widgets).forEach(([name, widget]) => {
    dashboardWidgetRegistryManager.registerWidget(name, widget, registryName);
  });

  return (
    <DashboardWidgetRegistryContext.Provider value={registryName}>
      {children}
    </DashboardWidgetRegistryContext.Provider>
  );
}
