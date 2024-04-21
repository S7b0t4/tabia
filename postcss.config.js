const postcssUrlRewrite = require('postcss-urlrewrite');

module.exports = {
  plugins: [
    postcssUrlRewrite({
      rules: [
        { from: './img/', to: './assets/' }
      ]
    })
  ]
};
