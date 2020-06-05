import React from 'react';
import Types from 'prop-types';
import classNames from 'classnames';

import '@transferwise/neptune-css/dist/css/tick.css';

const CheckboxButton = ({ checked, disabled, readOnly, className, onClick, onFocus, onBlur }) => (
  <button
    type="button"
    className={classNames('tw-checkbox-button', { checked }, className)}
    aria-pressed={checked}
    onFocus={onFocus}
    onClick={onClick}
    onBlur={onBlur}
    disabled={disabled || readOnly}
  >
    <span className="tw-checkbox-check" />
  </button>
);

CheckboxButton.propTypes = {
  checked: Types.bool,
  onFocus: Types.func,
  onClick: Types.func,
  onBlur: Types.func,
  disabled: Types.bool,
  readOnly: Types.bool,
  className: Types.string,
};

CheckboxButton.defaultProps = {
  checked: false,
  disabled: false,
  readOnly: false,
  onFocus: null,
  onClick: null,
  onBlur: null,
  className: '',
};

export default CheckboxButton;
