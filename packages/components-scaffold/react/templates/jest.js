const templateJestFile = (name) => `import React from 'react';
import ${name} from './';
import { render } from '@testing-library/react';

describe('${name}', () => {
    it('your test here', () => {});
});
`;

module.exports = templateJestFile;
