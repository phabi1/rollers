import { render } from '@testing-library/react';

import Boolean from './boolean';

describe('Boolean', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Boolean />);
    expect(baseElement).toBeTruthy();
  });
});
