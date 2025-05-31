import { render } from '@testing-library/react';

import EventsForm from './form';

describe('Form', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EventsForm />);
    expect(baseElement).toBeTruthy();
  });
});
