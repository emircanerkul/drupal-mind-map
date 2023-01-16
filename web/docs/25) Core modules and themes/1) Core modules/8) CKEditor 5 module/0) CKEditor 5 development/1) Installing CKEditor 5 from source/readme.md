For development, it can be useful to be able to pull a specific commit from the CKEditor 5 repository instead of a tagged release. This could be useful for testing future releases, or finding commit that caused a regression.

Outside of Drupal directory structure, clone CKEditor 5 from Github:

```php
git clone git@github.com:ckeditor/ckeditor5.git
cd ckeditor5
```

Install dependencies:

```php
yarn install
```

Build source code (this could take several minutes):

```php
yarn dll:build
```

Note: you might want to use unminified development only files for debugging purpose. To achieve it, use the `--dev` option as such:

```php
yarn dll:build --dev
```

Use [yarn link](https://classic.yarnpkg.com/en/docs/cli/link) for loading the locally built version of CKEditor 5\. You will have to do this separately for the main CKEditor 5 project, as well as `ckeditor5-editor-classic` subpackage, on top of any of the subpackages that you would like to test locally (e.g. `ckeditor5-image`):

```php
yarn link
cd packages/ckeditor5-editor-classic
yarn link
cd ../ckeditor5-image
yarn link
```

Navigate back to `/core` in the Drupal directory. Ensure to have installed the dependencies of Drupal itself already using `yarn install` . Run:

```php
yarn link ckeditor5
yarn link @ckeditor/ckeditor5-editor-classic
yarn link @ckeditor/ckeditor5-image
```

Now the packages in `node_modules` directory should be symlinked to the local CKEditor 5 directories. To update the build files in Drupal directory structure:

```php
yarn vendor-update
```

\---

_This documentation is being referred to from the code (see [#3273532: Better discovery of DX CKE5 debug documentation](https://www.drupal.org/project/drupal/issues/3273532 "Status: Closed (fixed)")). If this content is moved to a node other than this one (node 3258901), Drupal core would also have to be updated._