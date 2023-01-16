The JSON:API is highly opinionated about how JSON documents should be structured and what information must go into every request and/or response body.

Every request/response body must be underneath a single JSON object.

```php
{
   // your data here...
}

```

The data, or the information specific to a resource or resources, must live _within_ this top-level object under the `data` "member". A "member" is just a predefined key in the JSON object. The `data` member can be either an object (`{}`) _or_ an array (`[]`). When creating or updating a resource, this will always be a single object (`{}`) representing a _single_ item. Only when retrieving a "collection" of multiple resource will this property be an array.

```php
{
  "data": {
    // Your resource data goes here.
  }
}

```

Other top-level members include: `errors`, `meta`, `links`, and `included`. Of these, `included` will be used most often, but will be addressed later in the documentation.

For more information on the top-level structure, you may consult the [specification](http://jsonapi.org/format/#document-top-level).

Within the `data` and `included` members are "resource objects" or "resource identifier objects". "Resource objects" represent the content of the resources (entities) with which you will be concerned. "Resource identifier objects" are like foreign keys in a database; they identify a resource without containing any of that resource's fields. In Drupal terms, a resource object is generally the JSON representation of a single entity, that may be a single node, a single taxonomy term, or a single user. In Drupal terms again, a resource identifier is just enough information to load an entity—you have its type and its ID and nothing else.

Every resource object _must_ contain two members: `type` and `id`. The only exception to this in when creating a new entity, in this case, the `id` may be omitted in order to allow Drupal to generate an id for the new resource. However, it is entirely possible for the client application to provide a UUID for the resource when creating a new entity. _All_ ID's in the JSON:API are UUIDs.

The `type` member is _always_ required. The value for the type member is derived from the entity type name and bundle, where applicable. The type for an entity resource always follows the pattern `entity_type--bundle`. As an example, the core article and basic page node types will be represented as: `node--article` and `node--page`.

Thus, on an entity with no required properties or fields, one can create a new entity with the following JSON:

```php
{
  "data": {
    "type": "node--my-bundle",
  }
}

```

This wouldn't be very useful though. We need to include actual values for the entity. To do this, JSON:API has two members for holding values, `attributes` and `relationships`. `attributes` store values specific to the underlying resource. `relationships` are values that belong to another resource in the system. In Drupal terms, `relationships` usually represent values that are stored by an entity reference. On Drupal's core article bundle, this might be the `uid` property. This is because the `uid` property is an entity reference to the user that authored the article. The body of a document with `attributes` and `relationships` might look something like this:

```php
{
  "data": {
    "type": "node--my-bundle",
    "id": "2ee9f0ef-1b25-4bbe-a00f-8649c68b1f7e",
    "attributes": {
      "title": "An Example"
    },
    "relationships": {
      "uid": {
        "data": {
          "type": "user--user",
          "id": "53bb14cc-544a-4cf2-88e8-e9cdd0b6948f"
        }
      }
    }
  }
}

```

As you can see, the `uid` property lives under the `relationships` member. Like the main resource, it also contains a `type` and an `id` member since it is a separate and distinct resource.

Note that `uid` does _not_ have any `attributes` or `relationships`. This is because JSON:API will not include the contents of a relationship unless specifically asked to via by the use of a special query parameter, `include`. More on that later in the documentation (See "[Fetching resources (GET)](https://www.drupal.org/docs/8/modules/jsonapi/fetching-resources-get)").

For more details on the structure of resource objects, you may consult the [specification](http://jsonapi.org/format/#document-resource-objects).

### § "Virtual" Resource Identifiers

In some circumstances, Drupal permits a relationship to target a resource (an entity reference to target an entity) which is not stored in the database and is therefore not retrievable via JSON:API. The "virtual" resource identifier may signal different circumstances depending on its context, although it will always correspond to a resource which cannot be found.

<!-- note-version -->
> VERSION: Usage and meaning of the 'virtual' resource identifier in Drupal core
The&nbsp;taxonomy term parent&nbsp;field&nbsp;is the most noteworthy&nbsp;example of this special case in Drupal core.&nbsp;This relationship field may contain a resource identifier for a "virtual" taxonomy term resource. In this case, the "virtual" resource identifier&nbsp;identifies&nbsp;the&nbsp;&lt;root&gt; &nbsp;taxonomy term. As such, this signals&nbsp;that the referencing&nbsp;term is at the top level of its vocabulary.
Take the following response document for a hypothetical&nbsp;taxonomy term as an example:
{
  "data": {
    "type": "taxonomy_term--tags",
    "id": "2ee9f0ef-1b25-4bbe-a00f-8649c68b1f7e",
    "attributes": {
      "name": "Politics"
    },
    "relationships": {
      "parent": {
        "data": [
          {
            "id": "virtual",
            "type": "taxonomy_term--tags",
            "meta": {
              "links": {
                "help": {
                  "href": "https://www.drupal.org/docs/8/modules/json-api/core-concepts#virtual",
                  "meta": {
                    "about": "Usage and meaning of the 'virtual' resource identifier."
                  }
                }
              }
            }
          }
        ]
      }
    }
  }
}
Note how this&nbsp;Term's parent relationship (an entity reference field) has a resource identifier object where&nbsp;id&nbsp;is&nbsp;not&nbsp;a UUID, it is&nbsp;"virtual". This is necessary because a&nbsp;top-level or root-level Term has a reference to an unstored &lt;root&gt; term (target_id = 0) as its parent.
Why?
Given that the root term is not stored and that a Term may have more than one parent, the crucial question to ask is: how do we distinguish between a Term that:

has only Term 3&nbsp;as its parent ([3]) ?
has both this unstored root Term as its parent&nbsp;and&nbsp;a Term 3 ([0, 3])?

The answer is that if JSON:API were to omit the unstored root term&nbsp;0 rather than use the "virtual"&nbsp;ID, then&nbsp;it would&nbsp;not be possible to distinguish between those two cases!

### § "Missing" Resource Identifiers

Drupal does not "clean up" relationships to resources that have been deleted (entity reference fields that have references to entities that have been deleted). In other words: Drupal leaves "dangling" relationships (entity references) in place.

When JSON:API encounters such dangling relationships, it'll use the "missing" resource identifier.

<!-- note-version -->
> VERSION: Usage and meaning of the 'missing' resource identifier in Drupal core
Staying with the example given for the 'virtual' resource identifier: the&nbsp;taxonomy term parent&nbsp;field. Imagine a particular taxonomy term used to have the "Belgium" taxonomy term as its parent, but now the "Belgium" taxonomy term resource no longer exists —&nbsp;perhaps because the small country of Belgium ceased&nbsp;to exist. Then this relationship field would contain a resource identifier for a "missing" taxonomy term resource.
Take the following response document for a hypothetical&nbsp;taxonomy term as an example:
{
  "data": {
    "type": "taxonomy_term--tags",
    "id": "2ee9f0ef-1b25-4bbe-a00f-8649c68b1f7e",
    "attributes": {
      "name": "Politics"
    },
    "relationships": {
      "parent": {
        "data": [
          {
            "id": "missing",
            "type": "unknown",
            "meta": {
              "links": {
                "help": {
                  "href": "https://www.drupal.org/docs/8/modules/json-api/core-concepts#missing",
                  "meta": {
                    "about": "Usage and meaning of the 'missing' resource identifier."
                  }
                }
              }
            }
          }
        ]
      }
    }
  }
}
Note how this&nbsp;Term's parent relationship (an entity reference field) has a resource identifier object where&nbsp;id&nbsp;is&nbsp;not&nbsp;a UUID, it is&nbsp;"missing". Not only that, but its type&nbsp;is&nbsp;unknown&nbsp;(because Drupal does not store the bundle of the referenced entity, only the entity type, hence determining the JSON:API resource type name is impossible).