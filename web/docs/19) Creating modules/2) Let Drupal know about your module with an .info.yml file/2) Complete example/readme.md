In addition to the basic properties shown in the previous example, there are also a number of optional properties. This is a complete example.

```yaml
name: Hello World Module
description: Creates a page showing "Hello World".
package: Custom

type: module
core_version_requirement: ^9.4 || ^10

dependencies:
  - drupal:link
  - drupal:views
  - paragraphs:paragraphs
  - webform:webform (>=6.1.0)

test_dependencies:
 - drupal:image

configure: hello_world.settings
configure_parameters:
  pluginId: hello_world_plugin

php: 8.0

hidden: true
required: true

# Note: do not add the 'version' or 'project' properties yourself.
# They will be added automatically by the packager on drupal.org.
# version: 1.0
# project: 'hello_world'

```

* `dependencies`: a list of other modules your module depends on. Dependencies on Drupal core or contrib modules should be namespaced in the format `{project}:{module}`, where `{project}` is the project name as it appears in the Drupal.org URL (e.g. drupal.org/project/paragraphs) and `{module}` is the module's machine name. Dependencies can also include version restrictions, for example`webform:webform (>=6.1.0)`. Note that if your module has dependencies on other contributed modules or libraries, these should be declared in the module's [composer.json file](/docs/8/creating-custom-modules/add-a-composerjson-file). If you have local custom modules that are dependent on each other you can use `{module}:{module}` (or `{module}:{submodule}` for sub-modules.)
* `test_dependencies`: a list of other modules (in the same format as `dependencies`) that are needed to run certain automated tests for your module on Drupal's automated test runner ("DrupalCI"), but not needed as module dependencies in general (or that are in development as module dependencies but not finalized yet). Note that you need to have the test\_dependencies change committed to your Git repository before you try to run a test that depends on it – you cannot just put the info.yml change into the same patch as the new test. As an alternative, you can also use Composer for test dependencies – see the [relevant documentation](https://www.drupal.org/docs/develop/using-composer/managing-dependencies-for-a-contributed-project) for more information.
* `configure`: if your module offers a configuration form, then you can specify the route to this form here. It will then show up as a link in the **Extend** page (at /admin/modules URL path) when the user expands the details.
* `configure_parameters`: if a route for a configuration form requires parameters, you can set them here.
* `php: 8.0`: defines the minimal PHP version that is required for your module. Users will not be able to enable the module if they use an older PHP version. This can be used to avoid errors if your module uses newer functions that did not exist in earlier PHP versions.
* `hidden: true`: this will hide your module from the module list on the **Extend** page. You might find it useful to hide a module if it only contains tests, or is intended to serve as an example for developers who need to implement the main module's API. You can make these modules visible by adding `$settings['extension_discovery_scan_tests'] = TRUE` to your settings.php file.
* `required: true`: this means your module must be enabled and cannot be uninstalled.
* **Restricted properties**, added by Drupal packaging system (only when `"preferred-install": "dist"` is set in project's `composer.json`). Do not add these manually to info.yml in your repository.  
   * `version`  
   * `project`