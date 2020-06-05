import React from 'react';
import Types from 'prop-types';
import classNames from 'classnames';
import { Cross as CrossIcon } from '@transferwise/icons';

export const CloseButton = ({ onClick }) => (
  <button
    className={classNames(
      'tw-flow-navigation__close-button',
      'btn-link',
      'text-no-decoration',
      'icon-lg',
      'm-l-3',
      'close-button-with-avatar',
    )}
    aria-label="close button"
    onClick={onClick}
  >
    <CrossIcon size={24} />
  </button>
);

CloseButton.propTypes = {
  onClick: Types.func.isRequired,
};

export default CloseButton;
