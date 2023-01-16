Ordered by most to least frequently used APIs:

Configuring REST resources

<!-- note-version -->
> VERSION: Specific version(s)
Before Drupal 8.2, this used to live in rest.settings.yml. The configuration in there is migrated automatically when you update to Drupal 8.2 or later. For details, see the change record: "REST config converted to config entities".

Each REST resource has a `\Drupal\rest\RestResourceConfigInterface` config entity that corresponds to a `@RestResource` [plugin](/node/2817957). Without such a config entity, the REST resource plugin will not be available for use.

Each REST resource can be configured in its config entity: you can configure which HTTP methods, serialization formats & authentication mechanisms it supports. The same serialization formats and authentication mechanisms are then supported on all of its methods.

Install the [REST UI](/project/restui) contributed module to configure REST resources. (Or, if you want to modify & import config YAML by hand, look at `core/modules/rest/config/optional/rest.resource.entity.node.yml` to get started!)

Resource plugins

[\\Drupal\\rest\\Plugin\\ResourceInterface](https://api.drupal.org/api/drupal/core%21modules%21rest%21src%21Plugin%21ResourceInterface.php/interface/ResourceInterface/8): resource plugins, to expose additional resources over REST.
* Plugin implementations must be annotated with the [@RestResource](https://api.drupal.org/api/drupal/core%21modules%21rest%21src%21Annotation%21RestResource.php/class/RestResource/8) annotation so they can be discovered.
* Discovered plugins' annotation metadata can be altered using [hook\_rest\_resource\_alter](https://api.drupal.org/api/drupal/core%21modules%21rest%21rest.api.php/function/hook%5Frest%5Fresource%5Falter/8).
* [\\Drupal\\rest\\Plugin\\ResourceBase](https://api.drupal.org/api/drupal/core%21modules%21rest%21src%21Plugin%21ResourceBase.php/class/ResourceBase/8) provides a default implementation so resource plugins don't need to implement every method.

The above allows Drupal to automatically expose that resource using REST, using any authentication mechanism (see [Authentication API](/developing/api/8/authentication) for details), and any serialization format (both encoding & normalization — see [Serialization API](/developing/api/8/serialization) for details). So as a developer, you only need to implement the logic to work with the object in question that you're exposing as a resource.