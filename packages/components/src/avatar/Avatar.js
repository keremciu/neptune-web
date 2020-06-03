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

  return (
    <div className={classNames}>
      <div className={`${BASE_CLASS_NAME}__content`}>{children}</div>
      {badge && <div className={`${BASE_CLASS_NAME}__badge`}>{badge}</div>}
    </div>
  );
};

Avatar.Size = Size;

Avatar.propTypes = {
  size: Types.oneOf([Avatar.Size.MEDIUM, Avatar.Size.LARGE]),
  badge: Types.node,
  children: Types.node.isRequired,
  outlined: Types.bool,
};

Avatar.defaultProps = {
  badge: null,
  outlined: false,
};

export default Avatar;
