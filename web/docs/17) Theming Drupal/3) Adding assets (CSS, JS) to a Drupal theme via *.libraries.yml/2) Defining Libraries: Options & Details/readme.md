### Adding properties to included css/js

Properties are added in the curly brackets following each file added in your theme's `THEMENAME.libraries.yml` file

### CSS properties

The following properties are optional and applied per CSS asset.

| **attributes**                                                                     | Optional attributes. Known use case[ Bootstrap CDN](https://getbootstrap.com/).                                                         | { attributes: { crossorigin: anonymous } }     |
| ---------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| **browsers** _([deprecated in Drupal 9.1.0](https://www.drupal.org/node/3102997))_ | Load asset conditionally based on browser. _Note that this method uses conditional comments, which are only supported in IE up to IE9._ | { browsers: { IE: 'lte IE 9', '!IE': false } } |
| **group**                                                                          | Assets are aggregated per group. Default: The SMACSS group in which the asset is placed.                                                | Is rarely used                                 |
| **media**                                                                          | Media type.                                                                                                                             | { media: print }                               |
| **minified**                                                                       | Whether the asset is already minified. Default: false                                                                                   | { type: external, minified: true }             |
| **preprocess**                                                                     | Whether the assets should be aggregated. Default: true                                                                                  | { preprocess: false }                          |
| **type**                                                                           | The source of the asset. Default: file                                                                                                  | { type: external, minified: true }             |
| **weight**                                                                         | Adjusts order relative to other assets (within the same SMACSS group). Default: 0\. Use a numeric between -50 to +50.                   | { weight: 1 }                                  |

### JS properties

The following properties are optional and applied per JS asset.

| **attributes**                                                                     | Additional script attributes. See [Mozilla's "<script>: The Script element" page](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attributes) for the list of available attributes and values. | { type: external,    attributes: {      async: true,     type: module   }  } |
| ---------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| **browsers** _([deprecated in Drupal 9.1.0](https://www.drupal.org/node/3102997))_ | Load asset conditionally based on the browser. _Note that this method uses conditional comments, which are only supported in IE up to IE9._                                                                     | { browsers: { IE: 'lte IE 9', '!IE': false } }                               |
| **preprocess**                                                                     | Whether the assets should be aggregated. Default: true                                                                                                                                                          | { preprocess: false }                                                        |
| **type**                                                                           | The source of the asset. Default: file                                                                                                                                                                          | { type: external, minified: true }                                           |
| **weight**                                                                         | Discouraged, use dependencies instead. Adjusts order relative to other assets. Must be negative.                                                                                                                | { weight: \-1 }                                                              |