Now, you need a branch where you can track not only Drupal core, but also all of the contributed and custom modules and themes for your site. Create a branch using the command:

(On your local development environment)

```php
$ git checkout -b fooproject

```

This command creates a new branch named **fooproject** and checks it out. It is equivalent to running the commands:

```php
$ git branch fooproject
$ git checkout fooproject

```

You can use this **fooproject** branch as a working branch to add contributed and custom modules and themes to your site. Consider it the equivalent of the default Git ‘master’ branch for your project. For more information on standard Git development and branching see a post on [A successful Git branching model](http://nvie.com/posts/a-successful-git-branching-model/).

At this point, you should complete the Drupal installation process to get a working local installation. For Drupal 8 or higher, you'll need to do 'composer install' in the Drupal site root before running the web installer:

```php
$ composer install

```