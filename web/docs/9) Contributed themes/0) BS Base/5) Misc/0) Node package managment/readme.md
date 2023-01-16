---
url: https://www.drupal.org/docs/8/themes/bs-base/misc/node-package-managment
description: >-
  By default, we use pnpm to install needed node dependencies. We use pnpm as a
  drop-in replacement for npm because it is faster, it caches results and it
  also saves your disk space. If your system does not have pnpm installed we
  will fallback to npm. If you want to use some other package manager or node
  runner edit your custom theme package.json build-css script to your wishes.
  Drush bs-tu and bs-tc are using the same build-css script for theme building.
published_time: '2019-12-12T10:51:47+00:00'
modified_time: '2022-06-21T08:10:17+00:00'
---
By default, we use pnpm to install needed node dependencies. We use pnpm as a drop-in replacement for npm because it is faster, it caches results and it also saves your disk space. If your system does not have pnpm installed we will fallback to npm.

<!-- note-tip -->
> TIP: If you want to use some other package manager or node runner edit your custom theme package.json build-css script to your wishes. Drush bs-tu and bs-tc are using the same build-css script for theme building.

So for your typical child theme before running gulp you need to install all node dependencies that are defined in package.json like this

```php
npx run build-css
```

You do \`yarn install\` just the first time you created your child theme or you use \`drush bs-tc\` command which will generate theme and do \`yarn install\` for you.