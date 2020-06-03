import React from 'react';
import Switch from './Switch';

export default {
  component: Switch,
  title: 'Switch',
};

export const basic = () => {
  return <Switch onClick={(checked) => console.log(checked)} />;
};
