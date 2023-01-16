---
url: https://www.drupal.org/docs/contributed-modules/block-class/attributes
description: >-
  You can enable an option to use attributes, and you're free to customize that
  if you want. To do it you can go to admin/config/content/block-class/settings
  and mark the option "Enable attributes". With that the next time that you go
  to block settings page you'll be able to see a textarea where you can insert
  your attributes. You need to use key | value format, and one per line. For
  example: data-block-type|info
published_time: '2022-03-18T03:07:58+00:00'
modified_time: '2022-03-18T03:09:59+00:00'
---
You can enable an option to use attributes, and you're free to customize that if you want. To do it you can go to admin/config/content/block-class/settings and mark the option "Enable attributes". With that the next time that you go to block settings page you'll be able to see a textarea where you can insert your attributes. You need to use key | value format, and one per line. For example:

```php
data-block-type|info
```