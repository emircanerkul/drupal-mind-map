---
url: >-
  https://www.drupal.org/docs/core-modules-and-themes/core-modules/jsonapi-module/api-overview
description: >-
  The API that the JSON:API module makes available is centered on Drupal's
  entity types and bundles. Every bundle receives its own, unique URL path,
  which all follow a shared pattern. Unlike the Drupal Core REST module, these
  paths are not configurable and are all enabled by default. Unlike core REST
  the JSON:API is not simply a format like JSON or HAL+JSON. It encompasses a
  much broader set of rules about how your API will work.
published_time: '2016-09-21T15:27:09+00:00'
modified_time: '2022-11-03T13:54:06+00:00'
---
The API that the JSON:API module makes available is centered on Drupal's entity types and bundles. Every bundle receives its own, unique URL path, which all follow a shared pattern.

Unlike the Drupal Core REST module, these paths are not configurable and are all **enabled by default**. Unlike core REST the JSON:API is not simply a format like JSON or HAL+JSON. It encompasses a much broader set of rules about how your API will work. It dictates which HTTP methods should be used, what HTTP response codes should be returned under specific circumstances, the format of your response body, and the linkage between resources. For a more detailed comparison, see [JSON:API vs. core's REST module](/docs/8/modules/jsonapi/jsonapi-vs-cores-rest-module).

### Types

Every resource in JSON:API must have a globally unique `type` property. The Drupal JSON:API implementation derives this type property from the entity type machine name and bundle machine name. For example, articles, pages, and users are given the types `node--article`, `node--pages`, and `user--user`, respectively. Note that the user entity type in Drupal does not have a bundle. When an entity type does not have a bundle, the entity type is simply repeated for consistency.

### URL Structure

A JSON:API URL looks like this:

```php
GET|POST     /jsonapi/node/article
PATCH|DELETE /jsonapi/node/article/{uuid}

```

Every resource type must be uniquely addressable in the API. This means that every type that's available to the API must have a unique URL. In addition to requiring that each type be addressable, this always means that only one resource type can be fetched by a given URL. The Drupal implementation follows the pattern: `/jsonapi/{entity_type_id}/{bundle_id}[/{entity_uuid}]`.

The URL is _always_ prefixed by `/jsonapi`.

After that, the entity type id and the bundle id are concatenated by a forward slash. Note that there is _no_ URL at `/jsonapi/node`, this is because this URL would violate the specification by serving multiple resource types (because of multiple bundle types) from a single URL.

```php
Exists:
/jsonapi/node/page
/jsonapi/node/article

Does not exist:
/jsonapi/node

```

Following the entity type and bundle id, there is an optional ID part. For addressing single resource, either to fetch, update, or remove them, you must include this path part. It is `always` the UUID of the resource. When creating a new resource, with or without an ID, or fetching a collection of resources of a single type, one omits the ID path part.

```php
GET, POST
/jsonapi/node/article

PATCH, DELETE
/jsonapi/node/article/{uuid}

```

### HTTP Methods

JSON:API specifies what HTTP Methods to accept. Those are: GET, POST, PATCH, and DELETE. Notably, PUT is not included.

* GET - Retrieve data, can be a collection of resources or an individual resource
* POST - Create a new resource
* PATCH - Update an existing resource
* DELETE - Remove an existing resource

### Request headers

Make sure to use 'Content type' and 'Accept' headers when appropriate. See [Client responsibility](http://jsonapi.org/format/#content-negotiation-clients) for more details.

```php
Accept: application/vnd.api+json
Content-Type: application/vnd.api+json

```

### Response Codes

The JSON:API Specification also dictates [acceptable responses](http://jsonapi.org/format/#crud-updating-responses-202). The Drupal implementation uses a subset of those. The module can respond with the following codes:

* 200 OK - All successful GET and PATCH requests
* 201 Created - All successful POST requests (response includes the newly created resource)
* 204 No Content - All successful DELETE requests