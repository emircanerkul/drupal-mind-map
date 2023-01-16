---
url: >-
  https://www.drupal.org/docs/core-modules-and-themes/core-modules/jsonapi-module/security-considerations
description: >-
  The JSON:API module is designed to take the data model defined in Drupal using
  Drupal's Entity API, Field API and Typed Data API and expose it via an API
  conforming to the JSON:API specification in order to facilitate interaction
  with the data (entities) managed by Drupal. In doing so, it respects all of
  Drupal's security measures for that data: Entity Access is respected. Field
  Access is respected. When modifying data, validation constraints are
  respected.
published_time: '2019-03-12T22:48:53+00:00'
modified_time: '2022-12-13T05:41:14+00:00'
---
The JSON:API module is designed to take the data model defined in Drupal using Drupal's Entity API, Field API and Typed Data API and expose it via an API conforming to the [JSON:API specification](https://jsonapi.org/) in order to facilitate interaction with the data (entities) managed by Drupal.

In doing so, it respects all of Drupal's security measures for that data:

* Entity Access is respected.
* Field Access is respected.
* When modifying data, validation constraints are respected.
* The `internal` flag is respected (see [documentation](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Entity%21EntityTypeInterface.php/function/EntityTypeInterface%3A%3AisInternal/8.7.x) about how it can be set on an entity type definition, field definition or property definition).

In other words: JSON:API does not bypass any of the existing security measures and it does not add any layer of its own; it reuses Drupal's foundation.

### Bugs in entity types, field types and data types can lead to security vulnerabilities

Nevertheless, bugs do exist in the code implementing entity types, field types and data types, and their access control handler and validation constraints. This can largely be attributed to Drupal's legacy: Drupal originally didn't have validation constraints but form validation callbacks; the shift to an API-first mentality may be considered complete in Drupal core, but is not guaranteed for contributed or custom modules.

These bugs can lead to security vulnerabilities; they certainly have in the past. Such vulnerabilities are not limited to the JSON:API module; they also affect, for example, the [RESTful Web Services](https://www.drupal.org/docs/8/core/modules/rest) module as well as any PHP code that interacts with the Entity API.

However, since a malicious user can more easily access an HTTP API like JSON:API or RESTful Web Services than a PHP API, extra care is needed in this case. Unlike other HTTP API modules, JSON:API has a bigger API surface out of the box: all non-`internal` entity types are made available by default (while of course still respecting Entity Access) to make the developer experience as smooth as possible.

### Six security considerations

#### 1\. The importance of using stable contributed modules

Security vulnerabilities caused by entity types, field types and data types are resolved as quickly as possible only for stable modules published on Drupal.org that are covered by the [security advisory policy](https://www.drupal.org/security-advisory-policy). **Custom modules and non-stable contributed modules are not covered.** If you are using some of those, please exercise extra care.

#### 2\. Auditing Entity & Field Access

Regardless of whether you are using JSON:API or any other API-like module, it is always recommended to [audit Entity Access & Field Access](http://www.previousnext.com.au/blog/introducing-entity-access-audit-module) on Drupal sites. This is especially important if JSON:API's writing capabilities are enabled.

#### 3\. Exposing only what you use

When specific resource types (entity types + bundles) don't need to be exposed, after ensuring access to them is denied, you can choose to go even further and disable them. To disable a resource type or field, there is a [PHP API that you can implement in a custom module](https://www.drupal.org/node/3079797), or you can use the [JSON:API Extras contrib module, which provides a UI for disabled resource types and fields](https://www.drupal.org/docs/8/modules/jsonapi/jsonapi-extras). This is not always possible, but in a case where the site owner also owns all API clients, you can do this to make the API surface as small as possible.

#### 4\. Read-only mode

If for your particular needs you only need to be able to read data, you can choose to enable JSON:API's read-only mode at `/admin/config/services/jsonapi`. This mitigates risks from hypothetical, as-yet-unknown bugs in preexisting validation constraints and write logic. Because most modern decoupled Drupal setups only need to be able to read data, **read-only mode is turned on by default.**  (In Drupal core's JSON:API and version [2.4](https://www.drupal.org/project/jsonapi/releases/8.x-2.4) and newer of the contributed module.)

#### 5\. Security through obscurity: secret base path

The base path for JSON:API is `/jsonapi` by default. This can be changed to something like `/hidden/b69dhj027ooae/jsonapi`, which is one way to reduce the effectiveness of automated attacks. Create `sites/example.com/services.yml` if it doesn't exist already and add this:

```yaml
parameters:
  jsonapi.base_path: /hidden/b69dhj027ooae/jsonapi

```

#### 6\. Limit which entity bundles may be created or edited by removing some routes

If you only need to be able to create or update some entity bundles via JSON:API you can implement an event subscriber to remove all but a whitelist of POST and PATCH routes in a custom module. This will have an effect after disabling read-only mode and may require router rebuild.

Add a service to your module's services.yml file:

```php
services:
  mymodule.route_subscriber:
    class: Drupal\mymodule\Routing\JsonapiLimitingRouteSubscriber
    tags:
      - { name: event_subscriber }

```

Create the event subscriber. This example also makes it impossible to delete any content via JSON:API

```php
<?php

namespace Drupal\mymodule\Routing;

use Drupal\Core\Routing\RouteSubscriberBase;
use Symfony\Component\Routing\RouteCollection;

/**
 * Class JsonapiLimitingRouteSubscriber.
 *
 * Remove all DELETE routes from jsonapi resources to protect content.
 *
 * Remove POST and PATCH routes from jsonapi resources except for those
 * we want end users to create and update via the decoupled API.
 */
class JsonapiLimitingRouteSubscriber extends RouteSubscriberBase {

  /**
   * {@inheritdoc}
   */
  protected function alterRoutes(RouteCollection $collection) {
    $mutable_types = $this->mutableResourceTypes();
    foreach ($collection as $name => $route) {
      $defaults = $route->getDefaults();
      if (!empty($defaults['_is_jsonapi']) && !empty($defaults['resource_type'])) {
        $methods = $route->getMethods();
        if (in_array('DELETE', $methods)) {
          // We never want to delete data, only unpublish.
          $collection->remove($name);
        }
        else {
          $resource_type = $defaults['resource_type'];
          if (empty($mutable_types[$resource_type])) {
            if (in_array('POST', $methods) || in_array('PATCH', $methods)) {
              $collection->remove($name);
            }
          }
        }
      }
    }
  }

  /**
   * Get mutable resource types, exposed to user changes via API.
   *
   * @return array
   *   List of mutable jsonapi resource types as keys.
   */
  public function mutableResourceTypes(): array {
    return [
      'node--article' => TRUE,
      'node--document' => TRUE,
      'custom_entity--custom_entity' => TRUE,
    ];
  }

}

```

### Limit access to all JSON:API routes with an extra permission

When using JSON:API for backend integrations. limited API clients or other non-public use cases, it may be desirable to limit all JSON:API to users with a specific permission. Instead/additionally, add the following snippet to the mentioned route subscriber:

```php
    // Limit access to all jsonapi routes with an extra permission.
    foreach ($collection as $route) {
      $defaults = $route->getDefaults();
      if (!empty($defaults['_is_jsonapi'])) {
        $route->setRequirement('_permission', 'FOO custom access jsonapi');
      }
    }
```

Then define that permission in FOO.permissions.yml and grant it to the desired user roles.