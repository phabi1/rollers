import ReactGridLayoutBase, { WidthProvider } from 'react-grid-layout';
import DashboardWidgetOutlet from './components/dashboard-widget-outlet';
import type { DashboardWidgetInfo } from './models/dashboard-widget-info.model';

export interface DashboardProps {
  widgets: DashboardWidgetInfo[];
}

const ReactGridLayout = WidthProvider(ReactGridLayoutBase);

export function Dashboard({ widgets }: DashboardProps) {
  return (
    <ReactGridLayout layout={widgets} cols={12} rowHeight={30}>
      {widgets.map((widget) => {
        const { i, type, settings } = widget;
        return (
          <DashboardWidgetOutlet
            key={i}
            type={type}
            settings={settings || {}}
            data-grid={widget}
          />
        );
      })}
    </ReactGridLayout>
  );
}

export default Dashboard;
