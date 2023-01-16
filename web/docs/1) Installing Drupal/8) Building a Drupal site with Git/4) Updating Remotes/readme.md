You’ll need to update your remotes to reflect that you won’t be pushing to [drupal.org](https://www.drupal.org/) with your project’s code. You should rename the original origin remote (the[ drupal.org](https://www.drupal.org/) Drupal project repository) to ‘drupal’ and create a new origin pointed at the bare repository you’ve created on your server.

(On your local development environment)

```php
$ git remote rename origin drupal
$ git remote add origin path/to/your/central/git/repo

```

(example: `ssh://fooproject@fooproject.com/home/fooproject/fooproject.git`)

To see a list of your remote repositories, run the command:

```php
$ git remote

```

For a more detailed listing that includes the remote repositories' URLs, add a `-v` flag (for _verbose_) to the end of the command:

```php
$ git remote -v

```