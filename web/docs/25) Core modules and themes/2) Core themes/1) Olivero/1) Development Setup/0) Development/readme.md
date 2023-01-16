### Installing Olivero using Git or development release

Before starting, ensure that you are using at least the latest LTS release of Node.js, once Node.js has been installed, we recommend installing yarn

```php
npm i -g yarn

```

To install the required packages use

```php
yarn install

```

The repository doesn't contain compiled CSS and JavaScript files. You will have to run the following commands before the theme will work:

```php
yarn run build:js
yarn run build:css

```

### Working on JavaScript

When developing JavaScript locally you can use the watcher to make changes and  
have them compiled as you save as well as generate source maps.

```php
yarn run watch:js

```

It is also possible to build all files at once

```php
yarn run build:js

```

To build source maps you need to use

```php
yarn run watch:js-dev

```

For building a single file use

```php
yarn run build:js -- --file js/responsive-details.es6.js

```

### Working on CSS

The project uses [PostCSS](https://postcss.org/) for compiling CSS for better browser support. CSS source files are located in the `/css` folder for the Post CSS version as well as the compiled version. When making changes, the patch should contain changes to the source Post CSS files` .pcss.css` and the `.css` compiled version.

See Olivero CSS coding standards: [https://www.drupal.org/docs/contributed-themes/olivero/authoring-css-for...](https://www.drupal.org/docs/contributed-themes/olivero/authoring-css-for-olivero)

CSS scaffolding tasks are following the logic of the JavaScript tasks:

`yarn run build:css `

Process sources without writing source maps.

`yarn run build:css-dev `

Process sources with (external) source maps.

`yarn run watch:css`

Watches source assets and applies a distributive task if any of the changes.

`yarn run watch:css-dev `

Watches source assets and apply development tasks if any of the changes.

### Linting JavaScript and CSS

For linting compiled CSS use

```php
yarn run lint:css

```

For JavaScript there are two separate configs you can use

```php
yarn run lint:js

yarn run lint:js-passing

yarn run lint:js-stats

```