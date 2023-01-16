After the module is installed, you can begin running the migration processes. You can run a single migration, or run all available migrations at the same time.

To list all available migrations, with current status, run the following command:

`$ drush ms --group=devportal`

To run a single migration:

`$ drush mim <name_of_migration> --execute-dependencies`

For example:

`$ drush mim devportal_article --execute-dependencies`

To revert a single migration:

`$ drush mr <name_of_migration>`

For example:

`$ drush mr devportal_article`

To run all devportal migrations, use the following command:

`$ drush mim --group=devportal`