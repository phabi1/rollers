'use client';
import {
  Dashboard,
  DashboardWidgetInfo,
  DashboardWidgetRegistryProvider,
} from '@rollers/libs-client-dashboard';
import { lazy, useCallback, useEffect, useState } from 'react';

const AVAILABLE_WIDGETS = {
  clock: lazy(() => import('@/components/admin/dashboard/widget/clock/clock')),
  weather: lazy(
    () => import('@/components/admin/dashboard/widget/weather/weather')
  ),
};

export default function DashboardPage() {
  const [widgets, setWidgets] = useState<DashboardWidgetInfo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const loadDashboard = useCallback(async () => {
    try {
      // Simulate an API call to fetch dashboard data
      const response = await fetch('/api/dashboard');
      if (!response.ok) {
        throw new Error('Failed to fetch dashboard data');
      }
      const data = await response.json();
      setWidgets(data.widgets);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadDashboard();
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {!loading && !error && (
        <DashboardWidgetRegistryProvider
          registryName="admin"
          widgets={AVAILABLE_WIDGETS}
        >
          <div>
            <h1>Dashboard</h1>
            <Dashboard widgets={widgets} />
          </div>
        </DashboardWidgetRegistryProvider>
      )}
    </div>
  );
}
