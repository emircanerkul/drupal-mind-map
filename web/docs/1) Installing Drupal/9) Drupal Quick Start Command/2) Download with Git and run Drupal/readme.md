Paste the two lines below into your command line to download and extract the Drupal package with Git and start it:

```php
git clone https://git.drupalcode.org/project/drupal.git && cd drupal && composer install
php -d memory_limit=256M ./core/scripts/drupal quick-start demo_umami
```

PS! You can also quickly test a core patch with the latest dev-release of Drupal by [obtaining and applying the patch](https://www.drupal.org/docs/develop/git/using-git-to-contribute-to-drupal/applying-a-patch-in-a-feature-branch#s-obtain-and-apply-a-patch-file) after cloning, but before running the quick-start command.