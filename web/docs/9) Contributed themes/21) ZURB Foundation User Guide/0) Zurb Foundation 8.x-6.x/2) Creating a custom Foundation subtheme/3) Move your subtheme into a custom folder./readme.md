By default, the drush command places your theme into the _themes/_ _contrib_ folder. We encourage you to follow conventional Drupal 8 folder structure and move your subtheme into a _custom/_ folder.

With command line:

```php
mkdir themes/custom
```

```php
mv -v themes/contrib/mycustomtheme/ themes/custom/
```

You can also do this manually.

Create a new directory in the _themes/_ folder named _custom_

Click and drag the mycustomtheme folder from _themes/_ _contrib_ to _themes/custom_