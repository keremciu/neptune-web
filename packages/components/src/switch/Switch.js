import React, { useState, useEffect } from 'react';
import Types from 'prop-types';
import classnames from 'classnames';
import './Switch.css';
import { CheckCircle, CrossCircle } from '@transferwise/icons';

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
      <span className="switch--thumb">
        {checked ? <CheckCircle /> : <CrossCircle filled hasFillVariant />}
      </span>
      <input type="checkbox" checked={checked} />
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
