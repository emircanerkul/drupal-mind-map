Just resaving your image style will flush the image cache. If you need to flush all image styles (eg. after adjusting the JPEG quality), you can execute [drush image\-flush](https://drushcommands.com/drush-8x/core/image-flush/), use the [Image style flush](https://drupal.org/project/imagestyleflush) module, or run the following code (for instance using [Devel](http://drupal.org/project/devel)):

```php
// Flush all image styles in Drupal 7.
foreach (image_styles() as $style) {
  image_style_flush($style);
}

```

If images are not generated at all, check that HTTP error 404 is handled by Drupal. This is set by default in Drupal's provided `.htaccess`.