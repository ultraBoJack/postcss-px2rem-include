# postcss-px2rem-include

Based on [postcss-px2rem](https://www.npmjs.com/package/postcss-px2rem) added the include folder option.

## Useage

### .postcssrc.js
```javascript
module.exports = {
  'plugins': {
    'postcss-px2rem-include': {
      remUnit: 75,
      include: /folder_name/i
    }
  }
}
```