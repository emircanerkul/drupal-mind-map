If steps 1-2 were performed on a dev/staging environment:

* Push the changed composer.json and composer.lock files to production.
* run `composer install --no-dev` on production, rather than `composer update.`
* run drush updatedb or update.php