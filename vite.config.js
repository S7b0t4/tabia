const path = require('path');
const postcss = require('rollup-plugin-postcss');
const postcssUrlRewrite = require('postcss-urlrewrite');

module.exports = {
  root: path.resolve(__dirname, 'src'),
  build: {
    outDir: '../dist'
  },
  server: {
    port: 8080
  },
  plugins: [
    postcss({
      plugins: [
        postcssUrlRewrite({
          rules: [
            { from: './img/', to: './assets/' }
          ]
        })
      ]
    })
  ]
};
