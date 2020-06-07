const { capitalizeFirstLetter } = require('../utils/index.js');

module.exports = {
  type: 'jest',
  path: 'src',
  ext: 'spec.js',
  name: (name) => capitalizeFirstLetter(name),
  template: (name) => `import React from 'react';
  import ${name} from './';
  import { render } from '@testing-library/react';
  import '@testing-library/jest-dom';
  import user from '@testing-library/user-event';
  
  describe('${name}', () => {
      it('your test here', () => {});
  });
  `,
};
