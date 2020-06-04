const templateEntryFile = (name) => `import React from 'react';
import Types from 'prop-types';

/**
 * ${name} docs.
 *
 * @param {type} [propname=""] - propsDescription.
 *
 * @usage '<${name}/>'
 **/

const ${name} = (props) => {
  return ();
};

${name}.propTypes = {};
${name}.defaultProps = {};

export default ${name};
`;

module.exports = templateEntryFile;
