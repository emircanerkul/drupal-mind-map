In order to compile your changes/additions to the SASS files, the GOV.UK theme utililises Gulp. To install Gulp, go back to the terminal (still in the govuk\_theme folder) and issue:

`sudo npm install --global gulp-cli
npm install gulp`

Now Gulp is installed you can test with:

`gulp`

You should see something like:

```php
[17:30:12] Using gulpfile /var/www/drupal8/web/themes/contrib/govuk_theme/gulpfile.js
[17:30:12] Starting 'default'...
[17:30:12] Starting 'sass'...
[17:30:12] Finished 'sass' after 346 ms
[17:30:12] Finished 'default' after 348 ms
```

In order to compile your SASS files automatically, issue:`gulp watch` and you will see something like this:

```php
[14:09:55] Using gulpfile /var/www/drupal8/web/themes/custom/govuk/gulpfile.js
[14:09:55] Starting 'watch'...
```

Make some changes to the "style.scss" file (under /sass) and save. You will see something like:

```php
[14:09:55] Using gulpfile /var/www/drupal8/web/themes/custom/govuk/gulpfile.js
[14:09:55] Starting 'watch'...
[14:15:57] Starting 'sass'...
[14:15:57] Finished 'sass' after 364 ms
```