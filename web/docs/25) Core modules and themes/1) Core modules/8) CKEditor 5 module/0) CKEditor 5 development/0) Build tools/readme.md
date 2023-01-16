CKEditor plugins are created via a build process.

In the `/core` directory, first install dependencies:

```php
yarn install
```

Changes can be built from source code with:

```php
yarn build:ckeditor5
```

Trigger the build process any time a source file changes:

```php
yarn watch:ckeditor5
```