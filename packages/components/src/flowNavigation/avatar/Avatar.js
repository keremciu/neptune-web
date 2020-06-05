import React, { useState, useEffect } from 'react';
import Types from 'prop-types';
import classnames from 'classnames';

import { Profile as ProfileIcon, Briefcase as BriefcaseIcon } from '@transferwise/icons';

import './Avatar.css';

const ProfileType = {
  BUSINESS: 'BUSINESS',
  PERSONAL: 'PERSONAL',
};

export default function Avatar({ url, profileType }) {
  const [hasImageLoadError, setImageLoadError] = useState(false);
  const renderImage = url && !hasImageLoadError;
  const isBusinessProfile = profileType === ProfileType.BUSINESS;

  // Reset the errored state when url changes
  useEffect(() => setImageLoadError(false), [url]);

  function detectAvatar() {
    if (isBusinessProfile) {
      return <BriefcaseIcon />;
    } else if (renderImage) {
      return (
        <img
          src={url}
          alt="Avatar"
          className="tw-avatar__image"
          onError={() => setImageLoadError(true)}
        />
      );
    } else {
      return <ProfileIcon />;
    }
  }

  return (
    <div
      className={classnames('circle circle-responsive circle-inverse', {
        'tw-avatar--with-image': !isBusinessProfile && renderImage,
      })}
    >
      {detectAvatar()}
    </div>
  );
}

Avatar.defaultProps = {
  url: '',
  profileType: ProfileType.PERSONAL,
};

Avatar.propTypes = {
  url: Types.string,
  profileType: Types.oneOf(Object.keys(ProfileType)),
};
