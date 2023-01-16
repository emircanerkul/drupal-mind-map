## Installation

Download the BEE Hotel module with related contributed modules using composer. If you need instructions on how to download a module using composer for your Drupal project you can read the documentation here: [how to install dependencies with composer in Drupal 8](http://www.drupal.org/docs/8/install/step-2-install-dependencies-with-composer).

> composer require drupal/commerce\_cart drupal/checkout drupal/commerce\_number\_pattern drupal/commerce\_order drupal/commerce\_payment drupal/commerce\_price drupal/commerce\_product drupal/commerce\_store drupal/bat drupal/bat\_calendar\_reference drupal/bat\_event drupal/bat\_event\_ui drupal/bat\_fullcalendar drupal/bat\_options drupal/bat\_unit drupal/bee drupal/bee\_hotel

Enable the module with from command line

> drush en bee\_hotel

or from the "extend" section of Drupal back-office (admin/modules)

you wlll also need to enable Commerce Payment and Commerce Checkout