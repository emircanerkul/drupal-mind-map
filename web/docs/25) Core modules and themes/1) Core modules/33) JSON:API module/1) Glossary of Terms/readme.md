---
url: >-
  https://www.drupal.org/docs/core-modules-and-themes/core-modules/jsonapi-module/glossary-of-terms
description: >-
  TL;DR: HTTP requests are made to JSON:API resources. Don't confuse them with
  resource objects. The JSON object that the client receives is called a
  document. A document is always a JSON object and it has primary data under a
  data key. The data under that key are called resource objects or resource
  identifier objects. When you request that related data be embedded in the
  document, it becomes a compound document. A compound document is one with an
  included key in the top-level object. Resources that return many resource
  objects are called collection resources.
published_time: '2018-10-04T17:10:12+00:00'
modified_time: '2018-11-22T11:16:13+00:00'
---
**TL;DR**:

* HTTP requests are made to JSON:API _resources_. Don't confuse them with _resource_ _objects_.
* The JSON object that the client receives is called _a document._
* A document is always a JSON object and it has _primary data_ under a `data` key.
* The data under that key are called _resource objects_ or _resource identifier objects_.
* When you request that related data be embedded in the document, it becomes a _compound document_.
* A compound document is one with an `included` key in the top-level object.
* Resources that return _many_ resource objects are called _collection resources_.
* Resources that return _one_ resource object are called _individual resources_.
* Resources that return information about relationships _between_ resource objects are called _relationship resources_.
* In Drupal terms:  
   * Resource Objects -> Entities  
   * Resource Identifier Objects -> Entity reference field Items  
   * Document -> Request/response JSON payload

---

The following provides a brief description of the terms and concepts used when describing the JSON:API module.

This glossary closely resembles the [JSON:API specification](http://jsonapi.org/format/), however it attempts to frame definitions as they apply to Drupal. It also expands on subtleties of the specification that may not be obvious to a newcomer who is not intimately familiar with the specification or [how to read a specification](https://www.mnot.net/blog/2018/07/31/read%5Frfc).

Many of these definitions are intertwined with one another. There is a [diagram at the bottom of this page](#resource-diagram) which puts these terms into the context in which they appear.

#### Resource

A location at which a JSON:API [response document](#term-document) can be retrieved. A resource can be found via its URL (universal resource locator). It should _not_ be confused with a "[resource object](#term-resource-object)". A resource does _not_ have a one-to-one correspondence with an application's data.

In Drupal terms, this means that a JSON:API resource is _not_ synonymous with an entity. Instead, a resource is a place where one can retrieve the data for a _concept_. For example, that concept could be "a collection of resource objects of the `node--article` type" or it could be "a representation of the `field_tags` entity reference field of a particular article node."

#### Response Document

The JSON-encoded response _body_ returned from a JSON:API [resource](#term-resource). It is the "envelope" in which data or errors are communicated to the HTTP client. It is sometimes referred to as the _top-level object_. When a document has an `included` [document member](#term-document-member), it is referred to as a [compound document](#term-compound-document).

#### Compound Document

A [response document](#term-document) that contains an `included` [document member](#term-document-member). A compound document can be used to eliminate HTTP requests by embedding related [resource objects](#term-resource-object) alongside the primary data of a response document. A compound document can be requested by adding an `include` query parameter to a request's URL.

#### Error Document

A [response document](#term-document) that contains an `errors` [document member](#term-document-member) which contains one or more [error objects](#term-error-object). It will never contain a `data` document member. The HTTP status code of a response containing an error document will always be a 4xx or 5xx level code.

#### Individual Resource

A [resource](#term-resource) which contains a _single_ [resource object](#term-resource-object) as the `data` [member](#term-document-member) of the [response document](#term-response-document). With sufficient authorization, this resource is readable and mutable. In Drupal terms, this resource can be used to 'view', 'update' or 'delete' an individual entity. It _cannot_ be used to 'create' an entity.

#### Collection Resource

A [resource](#term-resource) which contains a _many_ [resource objects](#term-resource-object) as the `data` [member](#term-document-member) of the [response document](#term-response-document). With sufficient authorization, this resource is readable and writeable. These resources can be [paginated](https://www.drupal.org/docs/8/modules/json-api/pagination), [filtered](https://www.drupal.org/docs/8/modules/json-api/filtering) and [sorted](https://www.drupal.org/docs/8/modules/json-api/collections-and-sorting). In Drupal terms, this resource can be used to 'create' a new entity. It _cannot_ be used to 'update' or 'delete' entities in the collection.

#### Relationship Resource

A [resource](#term-resource) which contains a [relationship object](#term-relationship-object) _as the top-level object_ of the [response document](#term-response-document). It contains one or more [resource identifier objects](#term-resource-identifier-object) which each represent a reference from a [resource object](#term-resource-object) to another resource object. With sufficient authorization, this resource is readable and mutable. In Drupal terms, this resource can be used to 'view' or 'edit' a single entity reference field's items.

#### Related Resource

A [resource](#term-resource) which is a special [collection resource](#term-collection-resource) containing one or more [resource objects](#term-resource-object) as the `data` [member](#term-document-member) of the [response document](#term-response-document). The resource objects in this collection are the subjects of a relationship on a referencing resource object. This resource is read-only. In Drupal terms, this resource can be used to 'view' the entities that are _referenced by_ an entity reference field, but it cannot be used to 'update' those entities or to 'edit' the entity reference field which references them.

#### Document member

A JSON object that is part of the top-level JSON:API [document](#term-response-document). These objects are always located in the document under specification defined keys (e.g. `jsonapi`, `data`, `included` or `errors`)

#### Resource Object

A representation of an entity as a JSON object. It should _not_ be confused with a "[resource](#term-resource)". _This_ has a one-to-one correspondence with an application's data.

#### Attributes Object

A JSON object which represents information about the [resource object](#term-resource-object) in which it is defined. Attributes may contain any valid JSON value. In Drupal terms, this object represents all entity field values which are not entity references.

#### Relationships Object (plural)

A JSON object which contains references from the [resource object](#term-resource-object) in which it is defined to other resource objects. It contains many members which are relationship (singular) objects. In Drupal terms, this object represents all entity reference field values.

#### Relationship Object (singular)

A JSON object which represents the references from the [resource object](#term-resource-object) in which it is defined to other resource objects. It contains r[esource identifier objects](#term-resource-identifier-object), each represents a single relationship to another resource[ ](#term-resource-object)object. In Drupal terms, this object represents a single entity reference field.

#### Resource Identifier Object

A very simple JSON object which represents a relationship from one [resource object](#term-resource-object) to another. It should _not_ be confused with a "[resource object](#term-resource-object)". It contains only a `type` and `id` key and an optional `meta` key to contain information about that relationship. Notably, it does not contain a `links` member.

It provides "resource linkage" which, in a [compound document](#term-compound-document), lets the HTTP client correlate [relationship objects](#term-relationship-object) with the referenced [resource object(s)](#term-resource-object) in the `included` member of a [compound document](#term-compound-document).

#### Links Object

A JSON object which contains hyperlinks to other [resources](#term-resource).

#### Error Object

A JSON object which represents an error that occurred while processing a request. These can represent client errors, validation errors and server errors, amongst other things.

![Labelled boxes nested within one another showing the hierarchy of JSON API objects](https://www.drupal.org/files/jsonapi-structure-diagram.png)