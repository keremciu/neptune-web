import React, { useState, useEffect } from 'react';
import Types from 'prop-types';
import classnames from 'classnames';
import './Switch.css';
import { Check } from '@transferwise/icons';

/**
 * Switch docs.
 *
 * @param {type} [propname=""] - propsDescription.
 *
 * @usage '<Switch/>'
 **/

const Switch = ({ onClick }) => {
  const [checked, setChecked] = useState(false);
  const handleOnClick = () => {
    setChecked(!checked);
  };

  useEffect(() => {
    onClick(checked);
  }, [checked]);

  return (
    <span
      className={classnames('switch', {
        'switch--unchecked': !checked,
        'switch--checked': checked,
      })}
      onClick={handleOnClick}
    >
      <input type="checkbox" checked={checked} onClick={handleOnClick} />
      <span class="switch--thumb">
        <Check />
      </span>
    </span>
  );
};

Switch.propTypes = {
  onClick: Types.func.isRequired,
};
Switch.defaultProps = {};

export default Switch;
