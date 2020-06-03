import React, { useState, useEffect } from 'react';
import Types from 'prop-types';

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
    <>
      {console.log(checked)}
      <input type="checkbox" checked={checked} onClick={handleOnClick} />
    </>
  );
};

Switch.propTypes = {
  onClick: Types.func.isRequired,
};
Switch.defaultProps = {};

export default Switch;
