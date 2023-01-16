Administrators will generally need to address the following areas in a new site.

### Check your site's status

Open the _Status report_ via _Menu > Reports > Status report_ (admin/reports/status) to get an overview of your site's current status. You can check the Drupal version, database version, PHP version, PHP memory limit, web server information, and potential security issues. Items with a red background are issues that need immediate attention. An example would be a required security update for Drupal core or an installed module, or an unprotected settings.php file (see [What permissions does Drupal need?](https://www.drupal.org/node/244924 "Securing file permissions and ownership | Drupal.org") for more information). The Status report page also shows when the [cron script](https://www.drupal.org/docs/7/setting-up-cron/overview "Overview | Drupal 7 guide on Drupal.org") last ran. This script needs to run regularly for your site to function properly.

### Configure your site information

Open the _Site information settings_ via _Menu > Configuration > System > Basic site settings_ (admin/config/system/site-information) to basic settings, such as the site name, slogan, e-mail address or the default front-page path.

### Manage users

Open the _People_ page via _Menu > People_ (admin/people) to add new users or manage existing users. You can manage user roles and permissions by clicking on the "Permissions" tab on this page. To change the process by which users apply for accounts, visit the "People and Permissions" page via _Menu > Configuration > People > Account settings_ (admin/config/people/accounts).  
[Read more about Users, Roles, and Permissions](/node/120614 "Users, roles and permissions | Drupal.org").

### Add additional functionality

You can extend Drupal's functionality by enabling modules. The standard Drupal installation comes with a number of modules that are ready to be enabled. In addition, you can download community-contributed ("contrib") modules.  
Open the _Extend_ page via _Menu > Extend_ (admin/modules) to administer modules.  
Additional modules can be downloaded from the [Modules section](https://www.drupal.org/project/project%5Fmodule "Module project | Drupal.org") of Drupal.org.  
[Read more about installing contributed modules](/node/1897420 "Installing Drupal 8 Modules | Drupal 8 guide on Drupal.org").

### Working with Search

The search module lets users search for specific content on your site. You can search both for users and for particular words. When you are on the "content" tab of Search, you will be able to search for words appearing in the default rendering of node content on your site, which would include the default rendering of any CCK fields, Location fields, Taxonomy, etc., as well as comments. When you are on the "users" tab of Search, you will be able to search the user's names of registered users on your site, and if you have sufficient permissions, also their email addresses.  
[Read more about using Search](https://drupal.org/documentation/modules/search "Search module overview | Drupal 8 guide on Drupal.org")

### Customize the site appearance

Open the _Appearance_ page via _Menu > Appearance_ (admin/appearance) to change the site's appearance by installing new themes or editing theme settings. Drupal by default provides a small number of themes. You can create your own theme or find [contributed themes on Drupal.org](https://www.drupal.org/project/project%5Ftheme "Theme project | Drupal.org").  
[Read more about using Drupal themes](/docs/8/theming "Theming Drupal 8 | Drupal 8 guide on Drupal.org").

### Manage the site structure

Open the _Structure_ page via _Menu > Structure_ (admin/structure) to change the structure of the site's content types, blocks layout, Menus, Taxonomy, Views, Display modes, and Contact form by managing appropriate changes in the site. Drupal by default provides some structured components of sites.  
[Read more about using Drupal structure](https://www.drupal.org/docs/7/nodes-content-types-and-fields "Nodes, content types and fields | Drupal 7 guide on Drupal.org").