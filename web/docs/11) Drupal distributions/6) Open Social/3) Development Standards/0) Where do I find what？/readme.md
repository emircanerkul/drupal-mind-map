You can find the install profile in: /profiles/contrib/social. The install profile includes all of the packaged:

* config
* modules
* unit tests

The module directory has the following structure:

* custom
* social\_features

The feature folder contains all the custom code and configuration necessary for a given functionality.

Since the installation is composer-based contrib modules and themes will be installed in the appropriate directory in the Drupal root.

### Coding standards

All of the code should comply to the coding standards defined at [drupal.org/coding-standards](https://www.drupal.org/coding-standards).

### Automated testing

1. Functional tests: [Simpletest](https://www.drupal.org/simpletest) or [Behat](http://docs.behat.org/en/v3.0/)(Open Social tests are located in [tests/behat](https://github.com/goalgorilla/open%5Fsocial/tree/8.x-1.x/tests/behat))
2. Unit tests: [Phpunit](https://www.drupal.org/phpunit)
3. Upgrade tests: [Testing](https://www.drupal.org/node/1429136)

### GIT flow

The main branch should always be in a stable state. When working on specific bugs, features or improvements you should always work in a separate branch (preferably prefixed with feature/) which can eventually be merged into the main branch.

For the main branch you should always choose for the latest 11.x-x.x branch. Work will, if needed and possible, be back-ported to previous major versions.

### Definition of done

We consider the work of the developer done when:

* Functionality passes the acceptance criteria
* Manual test is provided, modified if needed and passing
* Automated test is provided if needed and passing
* Code complies to Drupal coding standards
* A pull request is created, assigned to a reviewer and How-To-Test are provided
* CI build is passing
* If issue type is bug, a short description of the solution is provided
* The issue has been set to a reviewer with the correct status

We consider the work of the reviewer done when:

* The code looks good
* The How-To-Test steps can be executed
* The manual test is executed successfully
* The pull request is merged into the correct branch
* The issue has been completed

### Commit messages guidelines

Drupal.org is used for the issue queue. In order to link the commits and pull requests with the issues we use the following template:

```php
[DS-#Issue] by [comma-separated usernames]: [Summary of the change]

```

For example:

```php
Issue #2752625 by jaapjan, ronaldtebrake: first dev release.
```