import React from 'react';
import Avatar from './Avatar';
import { boolean, select, text } from '@storybook/addon-knobs';

export default {
  component: Avatar,
  title: 'Avatar',
};

export const basic = () => {
  const size = select('size', Object.values(Avatar.Size), Avatar.Size.MEDIUM);
  const outlined = boolean('outlined', true);
  const avatarContent = text('avatarContent', '✈️');
  return (
    <Avatar size={size} outlined={outlined}>
      {avatarContent}
    </Avatar>
  );
};
