One of the most powerful new concepts in Drupal is an advanced [configuration management system](https://www.drupal.org/docs/8/configuration-management/managing-your-sites-configuration) that can be used to deploy the whole Drupal configuration from one environment to another. Perhaps the most typical environment landscape is to have a development environment (DEV), a test environment (STAGING) and a production environment (PROD) which is the live site for end users. In Drupal 8 or higher, all configurations can be exported as YAML files and imported to another environment.

If you are planning to have separate DEV, STAGING and PROD environments, one possible approach is illustrated in the picture below. It is important to understand that the Drupal entities can be categorized as follows:

* Content entities (users, nodes, taxonomy terms, ...)
* Configuration entities (content types, fields, views, all configuration settings)

![Migrating content only to staging](https://www.drupal.org/files/migrate-dev-staging.PNG)

The upgrade process in the picture above:

1. The new Drupal DEV environment is upgraded from the source site.
2. The source site is kept online (content can be created or updated). At the same time, the configuration is finalized on the new Drupal DEV environment.
3. The configurations can be deployed from DEV to STAGING using the new Drupal configuration management system. Version control system (e.g. Git) is typically used.
4. When the configuration of the STAGING environment is complete, _content_ can be migrated from the source site to STAGING for final acceptance testing. Once the acceptance tests are OK, the new Drupal PROD site is deployed and _content_ is migrated from the old site to new Drupal PROD site.

This approach requires [upgrading using Drush](http://www.drupal.org/docs/8/upgrade/upgrade-using-drush). There are a couple of possible variants to this approach.

* Refer to [upgrading using Drush page](http://www.drupal.org/docs/8/upgrade/upgrade-using-drush) on how to generate the migrations.
* The upgrade to the new Drupal DEV (step 1 in the picture above) can be done by executing all migrations with `drush migrate-import --all` or by executing the desired migrations one by one using `drush migrate-import <migration name>`
* Upgrading content only (step 4 in the picture above) can be done by executing all content migrations with `drush migrate:import --tag=Content` or by executing the desired migrations one by one using `drush migrate-import <migration name>`. It is also possible to list the desired migrations in a [manifest file](https://www.drupal.org/docs/8/upgrade/upgrade-using-drush#manifest).