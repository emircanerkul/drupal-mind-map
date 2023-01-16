The basic idea of an automated test for an update is:

1. Make a test class that extends \\Drupal\\FunctionalTests\\Update\\UpdatePathTestBase.
2. Set up the database and configuration to match the "prior" data model. There is a standard database dump file to use to get the basics, and then you'll write a PHP file that makes additions to set up your data (examples below). The test will execute both the standard database dump file and your custom PHP file, to set up the database and configuration.
3. Run the update using the method in the test class (shown below).
4. Verify that the resulting database/configuration matches the "new" data model

Details of the process are in the following sections. Specific testing examples can be found in the following core issues:  
[#2455125: Update EntityViewsData use of generic timestamp to use Field API formatter](https://www.drupal.org/project/drupal/issues/2455125 "Status: Closed (fixed)")  
[#2528178: Provide an upgrade path for blocks context IDs #2354889 (context manager)](https://www.drupal.org/project/drupal/issues/2528178 "Status: Closed (fixed)")  
(or look for classes that extend UpdatePathTestBase).