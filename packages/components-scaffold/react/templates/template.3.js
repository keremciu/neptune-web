const { capitalizeFirstLetter } = require('../utils/index.js');

module.exports = {
  type: 'story',
  path: 'src',
  ext: 'story.js',
  name: (name) => capitalizeFirstLetter(name),
  template: (name) => `import React from 'react';
  import ${name} from './${name}';
  
  export default {
    component: ${name},
    title: '${name}',
  };
  
  export const basic = () => {
    return (
      <${name}/>
    );
  };
  `,
};
