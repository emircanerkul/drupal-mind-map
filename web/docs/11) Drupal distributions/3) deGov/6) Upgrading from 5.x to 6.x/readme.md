---
url: https://www.drupal.org/docs/distributions/degov/upgrading-from-5x-to-6x
description: >-
  deGov 6.x Upgrade Resolve dependencies If you want to upgrade your deGov-based
  project from version 5.x to 6.x, you need to check if you still need any of
  the following modules: "drupal/jsonapi" "drupal/scheduled_updates"
  "degov/degov_base_theme" "drupal/workbench_access" "drupal/openapi"
  "drupal/openapi_ui" "drupal/openapi_ui_swagger" "drupal/openapi_ui_redoc"
  "drupal/scheduled_updates" "drupal/schemata" "drupal/consumers" If you don't
  need them you should uninstall them before upgrading.
published_time: '2019-01-28T13:36:19+00:00'
modified_time: '2019-02-11T14:14:16+00:00'
---
### **deGov 6.x Upgrade**

#### Resolve dependencies

If you want to upgrade your deGov-based project from version 5.x to 6.x, you need to check if you still need any of the following modules:

* "drupal/jsonapi"
* "drupal/scheduled\_updates"
* "degov/degov\_base\_theme"
* "drupal/workbench\_access"
* "drupal/openapi"
* "drupal/openapi\_ui"
* "drupal/openapi\_ui\_swagger"
* "drupal/openapi\_ui\_redoc"
* "drupal/scheduled\_updates"
* "drupal/schemata"
* "drupal/consumers"

If you _don't_ need them you should uninstall them before upgrading. Otherwise you must require them in your project directly via "composer require NAMESPACE/MODULE"

#### Uninstall \*\_rewrite modules

You need to uninstall all \*\_rewrite modules before upgrading. They were deleted and merged into other modules in 6.x.

#### Edit profile

If you created your project with deGov version 1.x you'll need to change your custom profile YAML file, too. The "base profile" tag needs to be changed to the new syntax.

Old base profile tag:

```yaml
base profile:
  name: degov
```

New base profile tag:

```yaml
base profile: degov
```

#### Edit composer.json

You need to add following class to the "classmap" tag in your composer.json.   
If there is no "classmap", create it.

```yaml
"extra": {
  "autoload-dev": {
    "classmap": [
      "docroot/profiles/contrib/degov/modules/lightning_core/tests/contexts/AwaitTrait.inc"
    ]
  }
}
```