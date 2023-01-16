1\. Make the desired changes on your Drupal 6 / Drupal 7 test site that are needed for your additional test coverage.

2\. Export your changes to the fixture file. Make sure that you are now working in the git branch of your patch.

Command for Drupal 6:  
`php core/scripts/db-tools.php dump --database fixture_connection > core/modules/migrate_drupal/tests/fixtures/drupal6.php`

Command for Drupal 7:  
`php core/scripts/db-tools.php dump --database fixture_connection > core/modules/migrate_drupal/tests/fixtures/drupal7.php`

3\. View the diff of the fixture file and keep only relevant changes.

When you export the database dump, it contains a lot of noise which is not related to the changes that are needed for your additional test coverage. The patch should only include relevant changes which means that you need to discard the unwanted changes. This can be done using a [git difftool](https://git-scm.com/docs/git-difftool) of your choice. 