---
url: >-
  https://www.drupal.org/docs/8/themes/bs-base/additional-features/maintenance-page
description: >-
  We are providing default maintenance page template which looks like If you are
  not satisfied with the default image you can change this image by changing the
  theme configuration value.
published_time: '2019-12-05T10:35:18+00:00'
modified_time: '2019-12-05T10:39:56+00:00'
---
We are providing default maintenance page template which looks like

![](https://www.drupal.org/files/Selection_690.png)

If you are not satisfied with the default image you can change this image by changing the theme configuration value. If your theme is called design and your maintenance image is located in \`themes/custom/design/images/maintenance.svg\` then execute next drush command:

```php
drush cset design.settings bs_base.maintenance_image.path 'themes/custom/design/images/maintenance.svg'
```

You can also disable image rendering and related CSS grid by setting path value to an empty string

```php
drush cset design.settings bs_base.maintenance_image.path ''
```

If you need additional customization options you can override \`bs\_base/themes/bs\_bootstrap/templates/layout/maintenance-page.html.twig\` template and add additional CSS rules. Recommended place for CSS rules is in your custom theme \`web/themes/custom/design/sass/layout/maintenance-page.scss\` SASS file.