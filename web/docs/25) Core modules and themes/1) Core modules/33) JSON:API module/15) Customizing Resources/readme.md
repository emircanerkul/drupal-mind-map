---
url: >-
  https://www.drupal.org/docs/core-modules-and-themes/core-modules/jsonapi-module/customizing-resources
description: >-
  Some sites may not wish to expose certain JSON:API resource types or fields or
  may wish to rename fields to provide a cleaner interface. To allow these
  alterations, JSON:API dispatches a ResourceTypeBuildEvent event object using
  the event name ResourceTypeBuildEvents::BUILD. Please refer to subscribe to
  and dispatch events on how to use these events. Subscribers can call the
  following methods: ResourceTypeBuildEvent::disableResourceType()to prevent a
  resource type from being accessed in any way via JSON:API.
published_time: '2021-12-10T10:23:46+00:00'
modified_time: '2021-12-18T05:11:17+00:00'
---
Some sites may not wish to expose certain JSON:API resource types or fields or may wish to rename fields to provide a cleaner interface.

To allow these alterations, JSON:API dispatches a `ResourceTypeBuildEvent` event object using the event name `ResourceTypeBuildEvents::BUILD`. Please refer to [subscribe to and dispatch events](https://www.drupal.org/docs/creating-custom-modules/subscribe-to-and-dispatch-events) on how to use these events.

Subscribers can call the following methods:

* `ResourceTypeBuildEvent::disableResourceType()`to prevent a resource type from being accessed in any way via JSON:API.
* `ResourceTypeBuildEvent::disableField()`to prevent a field from being accessed in any way via JSON:API.
* `ResourceTypeBuildEvent::setPublicFieldName()`to set a field alias so that JSON:API does not expose the internal Drupal field name.
* `ResourceTypeBuildEvent::setResourceTypeName()`to set a resource alias so that JSON:API does not expose the internal Drupal resource name.

Any module, custom or contrib, can implement a subscriber for this event. That means a module for a specific site can disable resource types and also that modules providing their own entity types can disable their own JSON:API representations.