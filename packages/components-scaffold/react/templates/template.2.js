module.exports = {
  type: 'export',
  path: 'src',
  ext: 'js',
  name: (name) => 'index',
  template: (name) => `export { default } from  './${name}'
export default templateIndexFile;
`,
};
