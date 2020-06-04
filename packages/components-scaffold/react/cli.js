#!/usr/bin/env node

import prompt from 'prompt';
import path from 'path';
import fs from 'fs';
import colors from 'colors';
import templateComponent from './templates/component.js';
// import 'templateStyleFile' from "./templates/templateStyleFile");
import templateComponentExport from './templates/componentExport.js';
import templateJest from './templates/jest.js';
import templateStory from './templates/story.js';
import { capitalizeFirstLetter, message } from './utils/index.js';

const scrFolder = 'src';

//
// Start the prompt
//
prompt.start();

//
// Get the components infos
//
const schema = {
  properties: {
    name: {
      // pattern: /^[A-Za-z\s]+$/,
      // message: 'Please insert a component name: Only letters allowed',
      // required: true,
      default: 'test',
    },
    path: {
      message: 'Please insert a realtive component path: ',
      default: `${scrFolder}`,
    },
  },
};
const files = [
  {
    name: 'Index file',
    ext: 'js',
    template: templateComponentExport,
    fileName: 'index',
  },
  {
    name: 'Component file',
    ext: 'js',
    template: templateComponent,
  },
  // {
  //   name: "style file",
  //   ext: "less",
  //   template: templateStyleFile
  // },
  {
    name: 'Jest file',
    ext: 'spec.js',
    template: templateJest,
  },
  {
    name: 'Story file',
    ext: 'story.js',
    template: templateStory,
  },
];
prompt.get(schema, (err, result) => {
  const capitalizedName = capitalizeFirstLetter(result.name);

  const componentPath = `${process.env.INIT_CWD}/${result.path}/${result.name.toLowerCase()}`;

  if (!fs.existsSync(componentPath)) {
    try {
      fs.mkdirSync(componentPath);
      try {
        files.map((file) => {
          try {
            fs.writeFileSync(
              `${componentPath}/${file.fileName || capitalizedName}.${file.ext}`,
              file.template(capitalizedName),
            );
            console.log(message('success', file.name.green));
          } catch (err) {
            console.log(message('error', file.name.red, err));
          }
        });
      } catch (err) {
        console.log(message('error', 'directory').red, err);
      }
    } catch (err) {
      console.log('Error while creating directory'.red);
    }
  } else {
    console.log('Directory already exists'.red);
  }
});
