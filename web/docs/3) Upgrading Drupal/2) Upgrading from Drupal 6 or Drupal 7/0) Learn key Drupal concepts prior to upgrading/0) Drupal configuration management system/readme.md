One of the most powerful new Drupal concepts is an advanced configuration management system that can be used to deploy the whole Drupal configuration from one environment to another, for example DEV - STAGING - PROD. 

In Drupal, _every_ configuration change you make on the various configuration forms can be exported to a yaml text file and imported to another environment. You can define the 'sync directory' where the whole site configuration is exported and where it is imported from. Best practice is to have this directory under version control system such as Git so that you can manage the configuration changes in a controlled way. 

This means that one possible upgrade strategy is to migrate _configurations_ such as content types, fields etc. to a DEV environment and finalize the site configuration manually. The complete site configuration can then be easily deployed to STAGING and PROD. The actual site _content_ would then be migrated to STAGING and PROD after the complete site configuration has been deployed.

[Read more about choosing the upgrade approach](https://www.drupal.org/docs/8/upgrade/choosing-the-upgrade-approach).  
[Read more about the Drupal 8 (or later) configuration management](https://www.drupal.org/docs/8/configuration-management/managing-your-sites-configuration)