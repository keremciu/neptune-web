import React from 'react';
import Types from 'prop-types';
import classnames from 'classnames';

import './Avatar.css';

import { Size } from '../common';

const BASE_CLASS_NAME = 'avatar';

const Avatar = ({ size, badge, children, outlined }) => {
  const classNames = classnames(BASE_CLASS_NAME, `${BASE_CLASS_NAME}--${size}`, {
    [`${BASE_CLASS_NAME}--outlined`]: outlined,
  });

  return <div className={classNames}>{children}</div>;
};

Avatar.Size = Size;

Avatar.propTypes = {
  size: Types.oneOf([Avatar.Size.MEDIUM, Avatar.Size.LARGE]),
  children: Types.node.isRequired,
  outlined: Types.bool,
};

Avatar.defaultProps = {
  outlined: false,
};

export default Avatar;
