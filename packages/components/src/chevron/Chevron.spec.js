import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Chevron from '.';

const { Orientation, Size } = Chevron;

describe('Chevron', () => {
  const props = {
    orientation: Orientation.RIGHT,
    size: Size.SMALL,
  };

  afterEach(() => {
    cleanup();
  });

  it('has right classes when rendered with props', () => {
    const { container } = render(<Chevron {...props} />);

    expect(container.querySelector('.tw-icon-chevron-right')).not.toBe(null);
  });
});
