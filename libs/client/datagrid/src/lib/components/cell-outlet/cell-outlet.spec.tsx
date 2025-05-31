import { render } from '@testing-library/react';

import CellOutlet from './cell-outlet';

describe('CellOutlet', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CellOutlet />);
    expect(baseElement).toBeTruthy();
  });
});
