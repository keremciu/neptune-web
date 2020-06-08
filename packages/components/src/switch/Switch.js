import React, { useState, useEffect } from 'react';
import Types from 'prop-types';
import classnames from 'classnames';
import './Switch.css';

/**
 * Switch docs.
 *
 * @param {type} [propname=""] - propsDescription.
 *
 * @usage '<Switch/>'
 **/

const Switch = ({ checked, onClick }) => {
  return (
    <span
      className={classnames('switch', {
        'switch--unchecked': !checked,
        'switch--checked': checked,
      })}
      onClick={onClick}
    >
      <input type="checkbox" checked={checked} />
      <span className="switch--thumb">
        <span
          className={classnames({
            'close-mark': !checked,
            'tick-mark': checked,
          })}
        ></span>
      </span>
    </span>
  );
};

Switch.propTypes = {
  checked: Types.boolean,
  onClick: Types.func,
};
Switch.defaultProps = {
  onClick: () => {},
  checked: false,
};

export default Switch;
