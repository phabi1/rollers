import { render } from '@testing-library/react';

import DashboardWidgetOutlet from './dashboard-widget-outlet';

describe('DashboardWidgetOutlet', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DashboardWidgetOutlet />);
    expect(baseElement).toBeTruthy();
  });
});
