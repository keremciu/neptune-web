const { capitalizeFirstLetter } = require('../utils/index.js');

module.exports = {
  type: 'component',
  path: 'src',
  ext: 'js',
  name: (name) => capitalizeFirstLetter(name),
  template: (name) => `import React from "react";
import Types from "prop-types";
/**
 * ${name} docs.
 *
 * @param {type} [propname=""] - propsDescription.
 *
 * @usage "<${name}/>"
**/
    
const ${name} = (props) => {
  return ();
};

${name}.propTypes = {};
${name}.defaultProps = {};

export default ${name};
`,
};
