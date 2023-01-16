The wider PHP community uses Composer to manage packages; this is also done in Drupal. For example, the Drupal project has a dependency on the "drupal/core" package. The "drupal/core" package has a type defined as "drupal-core" so Composer knows what to do with it, e.g. how to install it. The [composer/installers](https://github.com/composer/installers) library defines a number of Drupal types (see that page for a full list of types). For project types that are publicly available, one of the following Drupal types should work:

* drupal-module
* drupal-theme
* drupal-library
* drupal-profile
* drupal-drush
* drupal-database-driver

For custom code which is typically not available publicly, choose one of the following Drupal types:

* drupal-custom-module
* drupal-custom-theme
* drupal-custom-profile

You can use the composer `init` command to generate a composer.json file:

1. Run: `composer init`
2. When prompted for `Package name (<vendor>/<name>):` enter `drupal/your-project-name`. If your code is hosted on drupal.org, the project name should match the URL used for the project, e.g. `drupal/components`.
3. When prompted for `Description []:` enter a concise description of your project.
4. When prompted for `Author [YourGitAuthorName <me@example.com>, n to skip]:`, hit enter as the default value should already be the one you prefer in Git.
5. When prompted for `Minimum Stability []`:, hit enter to use the the default of "stable" stability. This will have no effect on websites where your code is installed, but may affect which versions of dependencies are used when running your project's tests. Stable dependencies during testing is preferred to unstable ones.
6. When prompted for `Package Type (e.g. library, project, metapackage, composer-plugin) []:`, use one of the Drupal types shown above, e.g. `drupal-module`.
7. When prompted for `License []:`, you must enter `GPL-2.0-or-later` for projects hosted on drupal.org.
8. When prompted for `Would you like to define your dependencies (require) interactively [yes]?`, hit enter and then enter the name of each dependency that is _required_ for you project's code to run correctly on a Drupal website.
9. When prompted for `Would you like to define your dev dependencies (require-dev) interactively [yes]?`, hit enter and then enter the name of each dependency that is required to develop or test your project's code and _not_ required for you project's code to run correctly on a Drupal website.
10. When prompted for `Do you confirm generation [yes]?`, look at the proposed JSON and hit enter to generate the `composer.json` file or type `no` to abort and start over.

Here is a full example of how a project uses composer.json to depend on the external project `exampledetect/exampledetectlib`:

```php
{
    "name": "drupal/example_project",
    "description": "Example Project is a lightweight PHP class for detecting examples",
    "type": "drupal-module",
    "license": "GPL-2.0-or-later",
    "authors": [
        {
            "name": "Matthew Donadio (mpdonadio)",
            "homepage": "https://www.drupal.org/u/mpdonadio",
            "role": "Maintainer"
        },
        {
            "name": "Darryl Norris (darol100)",
            "email": "admin@darrylnorris.com",
            "homepage": "https://www.drupal.org/u/darol100",
            "role": "Co-maintainer"
        }
    ],
    "homepage": "https://drupal.org/project/example_project",
    "support": {
        "issues": "https://drupal.org/project/issues/example_project",
        "source": "https://git.drupalcode.org/project/example_project"
    },
    "require": {
        "exampledetect/exampledetectlib": "^2.8"
    }
}


```

Note that the example composer.json shows how to list multiple maintainers and link to the project's homepage, support queue and source code. You should edit your composer.json, if needed, to add those items.

For naming your package, you must follow Drupal's [Composer package naming conventions](https://www.drupal.org/node/2471927).

Always run the [composer validate](https://getcomposer.org/doc/03-cli.md#validate "Command-line interface / Commands - Composer") command before committing a new or changed _composer.json_ file. It will check if your _composer.json_ is valid.