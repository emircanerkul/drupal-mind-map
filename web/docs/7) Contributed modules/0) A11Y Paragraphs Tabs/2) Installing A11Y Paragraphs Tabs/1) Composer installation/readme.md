If you are using composer on your project, installation is very easy.

* Run "composer require drupal/paragraphs" in your command line, this will add the entry into your composer.json file.
* Run: "composer require drupal/a11y\_paragraphs\_tabs" in your command line, this will add the entry into your composer.json file.
* Run "composer require npm-asset/a11y-accordion-tabs:^0.5.0" in your command line, this will add the entry into your composer.json file.
* if you have not added third-party libraries to your composer before, you can look at the composer documention on Drupal.org: <https://www.drupal.org/docs/develop/using-composer/using-composer-to-install-drupal-and-manage-dependencies#third-party-libraries> . The steps in that document will show you how to easily add third-party libraries. **Do step 1, 2 and 3.**
* Verify that these lines are in your composer.json file under: "require": {:  
   * "drupal/a11y\_paragraphs\_tabs": "^1.0",  
   * "npm-asset/a11y-accordion-tabs": "^0.5.0",
* Run "composer install" and that will install the module as well as the a11y acordion tabs js library.
* Then go to your Drupal installation and click on "Extend". Search for the module "A11Y Paragraphs Tabs" and if it isn't yet enabled, go ahead and enable it.
* Then click on "Reports" in your top admin menu and then on "Status Report". Check if there is an error message for missing "A11Y Accordion Tabs" library. if there isn't one, Everything went perfect. If the error message is there, verify that the library is in fact in the correct folder. See if you have the folder structure: /libraries/a11y-accordion-tabs/a11y-accordion-tabs.js
* Verify that your paragraphs have been added: /admin/structure/paragraphs\_type and seeing your new Paragraphs: A11Y Paragraphs Tabs Wrapper, A11Y Paragraphs Tabs Panel, A11Y Paragraphs Tab Content.