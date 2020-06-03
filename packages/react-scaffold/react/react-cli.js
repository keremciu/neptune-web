#!/usr/bin/env node

const prompt = require('prompt');
const path = require('path');
const fs = require('fs');
const colors = require('colors');
const templateComponent = require('./templates/template.component');
// const templateStyleFile = require("./templates/templateStyleFile");
const templateIndex = require('./templates/template.index');
const templateJest = require('./templates/template.jest');
const templateStory = require('./templates/template.story');
const { capitalizeFirstLetter, message } = require('./utils');

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
    template: templateIndex,
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
