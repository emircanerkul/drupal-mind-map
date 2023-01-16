Open Social 11 is now based on Drupal 9, this means that the upgrade path will take a big step from Drupal 8 to Drupal 9\. Please consider the following steps for the upgrade path from Open Social 10.3.8, to 11.0.0:

#### 1\. Assumptions:

* Open Social was first installed using social template: `composer create-project goalgorilla/social_template:dev-master DIRECTORY --no-interaction`

#### 2\. Recommendations before starting the process:

* If you’re coming from **Open Social 9.x** it would be worth to move to **10.x** first due to the composer / Drush updates and we won’t support 10.x anymore
* Be careful to fully test the upgrade on a safe environment ( I.E. local, test ) before applying any changes to production
* Make sure that your environment meets the[ Drupal 9 requirements](https://www.drupal.org/docs/understanding-drupal/how-drupal-9-was-made-and-what-is-included/environment-requirements-of-drupal-9)

#### 3\. Support:

* We tested and support Open Social 11.0.0 using `PHP 7.4`
* We tested and support Open Social 11.0.0 using `Drush v10`
* Global Drush installations might cause issues, we recommend installing “[Drush launcher](https://www.drupal.org/project/drupal/issues/3225540#comment-14375163)”

#### 4\. Steps:

1. Backup your files and database before starting;
2. Uncomment `deployment_identifier` from your settings file, this will make sure that _Drupal’s dependency injection container will be automatically invalidated and rebuilt when the Drupal core version changes_;
3. Make sure you download and enable[ message notify module ](https://www.drupal.org/project/message%5Fnotify)**BEFORE** updating to Open Social 11.0.0, since it’s a [requirement for Private Message](https://www.drupal.org/project/private%5Fmessage/issues/3184550);
4. Make sure PHP version on social\_template, composer.json file is set to `"php": "^7.4"`
5. Execute: `composer require goalgorilla/open_social:~11.0.0 --with-all-dependencies`
6. Enable `variationcache` module ( necessary for group updates );
7. Make sure to execute `drush updb -y ` or `/update.php` and that all updates are executed;
8. Make sure to `drush cr` after the update is completed;

**5\. Finalising installation.**

That's it! Open Social is updated to the latest version on your local environment.