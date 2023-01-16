Install the Anu LMS module as you would normally install a contributed Drupal module. Follow Drupal's standard instructions for [installing modules](https://www.drupal.org/docs/extending-drupal/installing-modules).

If your site is [managed via Composer](https://www.drupal.org/node/2718229), use Composer to download the module and its dependencies:

```php
composer config minimum-stability dev
composer require drupal/anu_lms

```

Enable Anu LMS (anu\_lms) module as usual. Proceed with the next steps to ensure the best out-of-the-box user experience.