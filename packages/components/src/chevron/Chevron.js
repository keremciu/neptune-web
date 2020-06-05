import '@transferwise/neptune-css/dist/css/chevron.css';
import React from 'react';
import Types from 'prop-types';
import { Size, Position } from '../common';

import { ChevronLeft, ChevronRight, ChevronUp, ChevronDown } from '@transferwise/icons';

const CONTAINER_SIZE = {
  [Size.SMALL]: 16,
  [Size.MEDIUM]: 24,
};

const Chevron = ({ orientation, size }) => {
  const { LEFT, BOTTOM, RIGHT, TOP } = Chevron.Orientation;
  const props = {
    className: 'chevron-color',
    size: CONTAINER_SIZE[size],
  };
  switch (orientation) {
    case LEFT:
      return <ChevronLeft {...props} />;
    case RIGHT:
      return <ChevronRight {...props} />;
    case TOP:
      return <ChevronUp {...props} />;
    case BOTTOM:
    default:
      return <ChevronDown {...props} />;
  }
};

Chevron.Orientation = Position;
Chevron.Size = Size;

Chevron.propTypes = {
  orientation: Types.oneOf([
    Chevron.Orientation.TOP,
    Chevron.Orientation.BOTTOM,
    Chevron.Orientation.LEFT,
    Chevron.Orientation.RIGHT,
  ]),
  size: Types.oneOf([Chevron.Size.SMALL, Chevron.Size.MEDIUM]),
};

Chevron.defaultProps = {
  orientation: Chevron.Orientation.BOTTOM,
  size: Chevron.Size.SMALL,
};

export default Chevron;
