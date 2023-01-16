This example begins the development process on the developer’s local development environment, but you could follow these steps on the server as well. Let's clone Drupal (version 7) to create a local development environment.

(On your local development environment)

```php
$ git clone http://git.drupal.org/project/drupal.git fooproject
$ cd fooproject
$ git checkout 7.x 

```

The first command clones the Drupal core Git repository from[ Drupal.org](https://www.drupal.org/) and saves it in a directory named **fooproject**. The **fooproject** directory will become your working tree. The final command, `git checkout 7.0`, ensures your code is on the Drupal 7.0 release. When using Drupal 8 or higher, note the addition of a decimal place in the version. For example, the equivalent command for Drupal 9.2.0 would be `git checkout 9.2.0` To choose another release before install, you can run the following command to view a list of all releases:

```php
$ git tag

```

Then, to switch to the version you want, you would type the following command, where **<tagname>** is the name of the release you want to use:

```php
$ git checkout <tagname>

```