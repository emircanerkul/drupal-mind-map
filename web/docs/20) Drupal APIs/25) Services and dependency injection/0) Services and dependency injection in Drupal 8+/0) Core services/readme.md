Core services are defined in [CoreServiceProvider.php](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21CoreServiceProvider.php/8) and [core.services.yml](https://api.drupal.org/api/drupal/core%21core.services.yml/8). Some examples:

```php
  ...
  language_manager:
    class: Drupal\Core\Language\LanguageManager
    arguments: ['@language.default']
  ...
  path.alias_manager:
    class: Drupal\Core\Path\AliasManager
    arguments: ['@path_alias.repository', '@path_alias.whitelist', '@language_manager', '@cache.data']
    deprecated: 'The "%service_id%" service is deprecated. Use "path_alias.manager" instead. See https://drupal.org/node/3092086'
  ...
  string_translation:
    class: Drupal\Core\StringTranslation\TranslationManager
  ...
  breadcrumb:
    class: Drupal\Core\Breadcrumb\BreadcrumbManager
    arguments: ['@module_handler']
  ...

```

Each service can also depend on other services. In the example above, the `path.alias_manager` is dependent on the `path_alias.repository,` `path_alias.whitelist,` `cache.data` and `language_manager` services specified in the `arguments` list.

Define a dependency on a service by prefixing the name of the dependee service with an `@` sign, like `@language_manager`. (The `@` sign is needed to tell Drupal that the argument is a service. If we omitted the `@` sign, the argument would be a simple string).

When code elsewhere in Drupal requests the `path.alias_manager` service, the service container ensures that the `path_alias.repository,` `path_alias.whitelist,` `cache.data` and `language_manager` services are passed to the constructor of the `path.alias_manager` service by first requesting each of those and then passing them in turn to the constructor of the `path.alias_manager` service. In turn the `language_manager` depends on the `language.default`, etc.

Drupal 8 contains a large number of services. The best way to get a list of the available services is by looking at the [CoreServiceProvider.php](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21CoreServiceProvider.php/8) and [core.services.yml](https://api.drupal.org/api/drupal/core%21core.services.yml/8) files. The Devel module provides a searchable list at _/devel/container/service_;Drush gives that list with `drush devel:services` which is equivalent to `drupal debug:container` in Drupal Console.

A service container (or _dependency injection container_) is a PHP object that manages the instantiation of services. Drupal's service container is built on top of the Symfony service container. Documentation on the structure of this file, special characters, optional dependencies, etc. can all be found in [the Symfony service container documentation](https://symfony.com/doc/3.4/service%5Fcontainer.html).