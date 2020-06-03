import React from 'react';
import DynamicInfo from './DynamicInfo';
// import { text } from '@storybook/addon-knobs';
// import { action } from '@storybook/addon-actions';

export default {
  component: DynamicInfo,
  title: 'DynamicInfo',
};

export const basic = () => {
  const components = [
    {
      component: 'heading',
      content: 'This is a large heading',
      size: 'lg',
      align: 'center',
      marginBottom: 'md',
    },
    {
      component: 'paragraph',
      content:
        'This is a paragraph of text. This is a paragraph of text. This is a paragraph of text.',
      align: 'center',
      marginBottom: 'xl',
    },
    {
      component: 'columns',
      bias: 'left',
      left: [
        {
          component: 'heading',
          content: 'Small heading',
          size: 'sm',
          marginBottom: 'md',
        },
        {
          component: 'list',
          items: [
            {
              description: 'This is the first item in a list',
            },
            {
              description: 'This is the second item, it has custom margin bottom',
              marginBottom: 'md',
            },
            {
              title: 'This one has a title',
              description: 'This is the third item in a list',
            },
          ],
        },
        {
          component: 'divider',
        },
        {
          component: 'heading',
          content: 'Review',
          size: 'sm',
          marginBottom: 'sm',
        },
        {
          component: 'divider',
          marginBottom: 'xl',
        },
        {
          component: 'review',
          title: 'Review thing',
          edit: {
            title: 'Edit',
            url: '',
          },
          items: [
            {
              title: 'First label',
              description: 'This is a review component',
            },
            {
              title: 'Second label',
              description: 'This is the second item in the review list',
            },
          ],
        },
      ],
      right: [
        {
          component: 'form',
          schema: {
            type: 'object',
            properties: {
              firstname: { type: 'string', title: 'First name' },
              lastname: { type: 'string', title: 'Last name' },
            },
          },
          model: {
            firstname: 'John',
          },
        },
        {
          component: 'alert',
          content: 'This is a medium size warning',
          context: 'warning',
          size: 'md',
        },
      ],
    },
    {
      component: 'image',
      content: 'Picture of dog',
      url: 'https://i.picsum.photos/id/1025/600/200.jpg',
    },
    {
      component: 'markdown',
      content:
        '##This heading comes from markdown \nWe can use it to add [links] amongst _other_ *things*.',
    },
  ];

  return <DynamicInfo components={components} />;
};
