The first one is \`gulp-options.yml\` which define parent themes and their paths and stylelint configuration file position. You don't need to edit this file manually, it will be created automatically with drush generator.

The second one is \`gulp-tasks.js\` where you can define your additional gulp tasks if needed. Usually, this is not needed and built-in tasks cover most of the use cases:

```php
$ npx gulp --tasks
Using gulpfile /web/themes/custom/demo_theme/gulpfile.js
Tasks for /web/themes/custom/demo_theme/gulpfile.js
├── sass
├── sass:dev
├── sass:lint
├── clean:css
├─┬ default
│ ├── clean
│ ├── sass:lint
│ └── sass
├─┬ prod
│ └── default
├─┬ dev
│ └── sass:dev
├─┬ clean
│ └── clean:css
├── watch
└── watch:dev
```

There are multiple commands available to you, but normally you will use only a couple of them while developing custom theme CSS code.

Use

```php
npx gulp sass:dev
```

while developing SASS code.

<!-- note-tip -->
> TIP: Compiling dev version of CSS will inject source maps into your CSS which allows you to easily debug CSS, see related SASS code and figure which SASS variables you need to override.

When your SASS code is ready then use

```php
npx gulp sass
```

To compile the production-ready CSS code.

<!-- note-tip -->
> TIP: Instead of this, you can use `drush&nbsp;bs-theme-build demo_theme` which will download theme package.json dependencies&nbsp;and build production-ready CSS files. This is useful&nbsp;when automating development steps with custom scripts.
There is also npm script `npm run build-css` you can use instead of drush which will do the same thing. Drush is using the same script.
You can change the content of `build-css` script in your theme package.json and modify the build to suit your needs, for example, use yarn package manager instead of pnpm, etc.

The third file is \`gulpfile.js\`. Normally you will not want to change the content of this file. This is the main gulp file which loads all gulp tasks from parent themes, merges all gulp configuration options, add all SASS parent theme files to SASS import include paths and load all gulp plugins that we are using for gulp compilation.

Finally, we have \`package.json\` file where we define all node modules which we need for our Gulp compilation process. We also define npm build-css script in this file which we are using for standard theme build.