import React from 'react';
import Switch from './Switch';
import { boolean } from '@storybook/addon-knobs';

export default {
  component: Switch,
  title: 'Switch',
};

export const basic = () => {
  const checked = boolean('checked', false);

  return <Switch checked={checked} />;
};
