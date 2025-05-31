import { Layout } from 'react-grid-layout';

export type DashboardWidgetInfo = Layout & {
  type: string;
  settings: Record<string, unknown>;
};
