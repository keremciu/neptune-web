const templateDocsFile = (name) => `import React from 'react';
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
`;

export default templateDocsFile;
