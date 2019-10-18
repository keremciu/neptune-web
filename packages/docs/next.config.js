const getBranch = require('git-branch');
const rehypePrism = require('@mapbox/rehype-prism');
const rehypeSlug = require('rehype-slug');
const withCSS = require('@zeit/next-css');
const withFonts = require('next-fonts');
const withImages = require('next-images');
const withMDX = require('@next/mdx')({
  options: {
    rehypePlugins: [rehypeSlug, rehypePrism],
  },
});

const pageExtensions = ['js', 'mdx'];

const branch = getBranch.sync();
const assetPrefix =
  process.env.NODE_ENV === 'production'
    ? `/neptune${branch !== 'master' ? `/branch/${branch}` : ''}`
    : '';

module.exports = () =>
  withImages(
    withFonts(
      withCSS(
        withMDX({
          pageExtensions,
          assetPrefix,
          env: {
            ASSET_PREFIX: assetPrefix,
          },
        }),
      ),
    ),
  );
