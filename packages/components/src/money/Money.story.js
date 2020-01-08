import React from 'react';
import Money from './Money';
import { select, text, number } from '@storybook/addon-knobs';

export default {
  component: Money,
  title: 'Money',
};

export const basic = () => {
  const amount = number('amount', 1234.5678);
  const currency = text('currency', 'GBP');
  const locale = select('locale', ['en-GB', 'jp-JP'], 'en-GB');
  return <Money amount={amount} currency={currency} locale={locale} />;
};
