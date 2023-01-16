Use the following command to install the [simpleSAMLphp](https://www.drupal.org/project/simplesamlphp%5Fauth) and [simplesamlphp\_custom\_attributes](https://www.drupal.org/project/simplesamlphp%5Fcustom%5Fattributes) modules using Composer:

`composer require drupal/simplesamlphp_auth:3.x-dev drupal/simplesamlphp_custom_attributes --prefer-dist`

You should now see the simpleSAMLphp library in `[root]/vendor/simplesamlphp`.

**Note**: If you experience a memory limit issue, set `export COMPOSER_MEMORY_LIMIT=-1` and then run the Composer command again.