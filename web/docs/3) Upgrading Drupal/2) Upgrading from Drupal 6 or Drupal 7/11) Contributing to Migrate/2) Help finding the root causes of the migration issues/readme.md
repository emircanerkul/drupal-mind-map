If you have a bit more experience with Drupal and its data model, you will most likely be able to help understanding the root causes of the migration bugs. Since we’re talking about data migrations, the most important thing is to understand

* Where the source data is coming from in Drupal 6 or Drupal 7
* And where is it supposed to go in Drupal 8 (or later)

Some tools that will help you to understand where the data is coming from

* [Devel](https://www.drupal.org/project/devel) module is a great tool for checking the source data in Drupal 6 or Drupal 7
* phpMyAdmin or other database browser will help you to dig where the data is actually coming from in Drupal 6 or Drupal 7
* If you can identify the Drupal 6 or Drupal 7 form where the data is maintained but you can’t find the data from the database, you can always follow the trails by reading the API. Open the Drupal 6 or Drupal 7 form where the data is maintained, copy paste the field and do a google search  
site:api.drupal.org <enter here what you want to search for>

If you have used the [Migrate Upgrade](https://www.drupal.org/project/migrate%5Fupgrade) module, the migration configurations can be read in Drupal 8 (or later) as follows

* admin/config/development/configuration/single/export
* Select 'migration' as 'Configuration type'
* Select the migration that you want to inspect