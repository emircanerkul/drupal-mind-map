---
url: https://www.drupal.org/docs/drupal-apis/migrate-api/debugging-migrations
description: >-
  Executing and rolling back migrations Contributed modules Migrate Tools and
  Migrate Run provide the drush migrate-import command that allow execution of
  an individual migration. The command drush migrate-rollback can be used to
  undo a migration so that it can be executed again after adjusting it. If the
  execution of a migration fails, its state may continue to say "Importing".
  Running the migration in this state again will give you an error message
  "Migration xxx is busy with another operation". To fix this you can stop and
  reset the migration with the drush migrate-reset-status command.
published_time: '2018-03-29T18:52:03+00:00'
modified_time: '2022-07-08T16:28:14+00:00'
---
