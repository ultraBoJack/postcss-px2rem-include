'use strict';

var postcss = require('postcss');
var Px2rem = require('px2rem');

module.exports = postcss.plugin('postcss-px2rem-include', function (options) {
  return function (css, result) {
    if (options.include && css.source.input.file.match(options.include) !== null) {
      var oldCssText = css.toString();
      var px2remIns = new Px2rem(options);
      var newCssText = px2remIns.generateRem(oldCssText);
      result.root = postcss.parse(newCssText)
    } else {
      result.root = css;
    }
  }
});
