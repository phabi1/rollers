'use client';

import { createElement, Suspense, useContext } from 'react';
import { DashboardWidgetRegistryContext } from '../contexts/dashboard-widget-registry';
import { DashboardWidgetRegistryManager } from '../services/dashboard-widget-registry-manager';

export interface DashboardWidgetOutletProps {
  type: string;
  settings: Record<string, unknown>;
  className?: string;
}

export function DashboardWidgetOutlet({
  type,
  settings,
  className,
  ...restProps
}: DashboardWidgetOutletProps) {
  const registryName = useContext(DashboardWidgetRegistryContext);

  const dashboardWidgetRegistryManager =
    DashboardWidgetRegistryManager.getInstance();

  const componentType = dashboardWidgetRegistryManager.getWidget(
    type,
    registryName
  );

  if (!componentType) {
    console.error(
      `Widget type "${type}" not found in registry "${registryName}"`
    );
    return null;
  }

  const WidgetComponent = createElement(componentType, {
    ...settings,
  });

  return (
    <div className={className} {...restProps}>
      <div className="w-full h-full bg-white rounded shadow dark:bg-gray-700">
        <Suspense fallback={<div>Loading...</div>}>{WidgetComponent}</Suspense>
      </div>
    </div>
  );
}

export default DashboardWidgetOutlet;
