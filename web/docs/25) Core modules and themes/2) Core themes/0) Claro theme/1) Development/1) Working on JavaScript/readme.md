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