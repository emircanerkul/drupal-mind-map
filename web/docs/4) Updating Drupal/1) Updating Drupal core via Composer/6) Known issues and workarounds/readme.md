If you run the `composer update` command above but `drupal/core` is not updated, there might be another dependency holding back the Drupal upgrade. You can check for blocking dependencies using the command `composer prohibits` (synonym: `composer why-not`). For example, if you are trying to upgrade from 8.4.5 to 8.5.0, you can run `composer prohibits drupal/core 8.5.0`, and it should give a list of dependencies blocking the upgrade. Update those dependencies along with `drupal/core` and it should work (e.g. `composer update drupal/core "symfony/*" --with-dependencies`).

\*If you have updated composer, and you find you have some dependencies that only work with older composer/installer versions, then include **composer/\*** in the above command to fetch composer dependencies as well:

`composer update drupal/core "drupal/core-*" "composer/*" --with-all-dependencies`

Composer update problems are often related to abandoned composer templates or bad settings in composer.json. Make sure you are using a composer template like the one suggested in Chapter 3.5\. of the Drupal User Guide "[Using Composer to Download and Update Files](https://www.drupal.org/docs/user%5Fguide/en/install-composer.html)". See [Add Composer to existing sites](https://www.drupal.org/docs/8/install/add-composer-to-existing-sites "Add Composer to an existing site | Drupal 8 guide on Drupal.org") for a step by step guide to manually adding composer to existing Drupal 8 sites that were previously installed without Composer.

<!-- note-warning -->
> WARNING: As of January 2020 drupal-composer/drupal-project Composer template for Drupal projects is no longer the recommended template for Drupal 8.8 and above. Until Chapter 3.5 of the Drupal User Guide can be updated, please refer to The community guidelines for starting a site using composer project templates.

Some other pertinent issues and blog posts with further help:

1. [Update to Drupal core 8.4, a step by step guide](https://www.previousnext.com.au/blog/update-drupal-core-84-step-by-step-guide) \- a blog post by PreviousNext covering the problematic 8.3 to 8.4 upgrade.
2. [Updating to Drupal 8.5 with composer](https://orkjern.com/updating-to-drupal-85-with-composer "ORKJ BLOG") \- a blog post by Eirik Morland (eiriksm) covering some problems going from 8.4 to 8.5.
3. [Composer fail to upgrade from 8.4.4 to 8.5.0-alpha1](https://www.drupal.org/project/drupal/issues/2943546) \- plenty of ideas on how to resolve a Composer update problem.
4. [Having trouble updating your Drupal 8 Website? Then this Blog post is for you](https://webkings.ca/blog/having-trouble-updating-your-drupal-8-website-then-guide-you%E2%80%A6) \- Blog post for the new GoComposer plug-in that automates the update process & converts your site to the recommended template.

In case of errors and warnings occurring in the middle of the update process, it is recommended to read them carefully and search in the issue queues for possible solutions before going on. In case of fatal errors, it is always recommended to stop the updates and restart the whole process from scratch by using the backup recommended you made before.