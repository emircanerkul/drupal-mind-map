<!-- note-warning -->
> WARNING: Warning
At this time, DrupalCI does not support testing patches which change the core_version_requirement.

When determining core version constraints, the following order of precedence is used.

* If a core requirement is specified in `composer.json`, it receives utmost precedence.
* If there is no core requirement in `composer.json`, the core\_version\_requirement in `info.yml` will take precedence next.
* If the core\_version\_requirement is not set in `info.yml`, then any version specified on a core module in the `info.yml` dependencies section will be used.

### Specifying the core\_version\_requirement

The `core_version_requirement` key in `*.info.yml` files for modules, themes, and profiles now supports semantic versioning as implemented by the Composer project. This allows modules, themes, and profiles to also specify that they are compatible with multiple major versions of Drupal core.

For example, a module that is compatible with Drupal 9 and Drupal 10 can have a `info.yml` file like this

```yaml
name: My Module
type: module
core_version_requirement: ^9 || ^10

```

For example a module that is compatible with Drupal 8 and Drupal 9 can have a `info.yml` file like this

```yaml
name: My Module
type: module
core: 8.x
core_version_requirement: ^8 || ^9

```

This specifies that the module is compatible with all versions of Drupal 8 and 9\. The `core:` is required here because Drupal Core versions before 8.7.7 do not recognize the `core_version_requirement:` key.

Most modules however [will have to remove deprecated code to be compatible with Drupal 9](https://www.drupal.org/docs/9/how-to-prepare-your-drupal-7-or-8-site-for-drupal-9/deprecation-checking-and-correction-tools). Therefore they will not able to be compatible with all versions of Drupal 8.

For example a module that is compatible with Drupal 8 versions after Drupal 8.8.0 and also Drupal 9 will need a info.yml file like this:

```yaml
name: My Module
type: module
core_version_requirement: ^8.8 || ^9

```

The `core:` key   **must not be used here** to make sure that versions of Drupal before 8.7.7 will not install the module. Adding both `core` and `core_version_requirement` with anything other than `core_version_requirement: ^8 || ^9` will result in an exception.

The `core_version_requirement` **cannot** be used to restrict to core version before 8.7.7\. For instance, `core_version_requirement: ^8.7 || ^9` would throw a parsing exception: This is not valid because `^8.7` would include versions like 8.7.0 which do not recognize the `core_version_requirement: ` key.

When using the new `core_version_requirement` key with anything other than `core_version_requirement: ^8 || ^9`, it is important that the module be tested on Drupal 8.7.7 or later.