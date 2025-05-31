import { render } from '@testing-library/react';

import PageActions from './page-actions';

describe('PageActions', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PageActions />);
    expect(baseElement).toBeTruthy();
  });
});
