If your site is managed by Composer, use Composer to download the Gin Admin Theme, in your terminal run:

```yaml
composer require 'drupal/gin'
```

Otherwise, you can copy / upload it to your theme directory within you Drupal installation.

#### ⚠️ Unable to install / Unable to update

This might be related to your `minimum-stability` setting in composer. Solution:

```php
composer require drupal/gin_toolbar:^1.0@rc drupal/gin:^3.0@rc
```

For alternative ways to install the Gin Admin Theme see [this](https://www.drupal.org/docs/extending-drupal/installing-themes) guide.