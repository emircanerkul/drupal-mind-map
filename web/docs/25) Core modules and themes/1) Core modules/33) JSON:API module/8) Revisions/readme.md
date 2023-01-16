---
url: >-
  https://www.drupal.org/docs/core-modules-and-themes/core-modules/jsonapi-module/revisions
description: >-
  The JSON:API module exposes entity revisions as resource versions, in a manner
  inspired by RFC5829: Link Relation Types for Simple Version Navigation between
  Web Resources. Current limitations: Resource versions (entity revisions) can
  only be read. And only for Node and Media entity types (node--* and media--*
  resource types) can JSON:API make the resource versions accessible (due to the
  absence of a formal entity revision access control API in Drupal core, once
  that's available we'll make all revisionable entity types available via
  JSON:API, see [#3031271]).
published_time: '2018-11-21T21:53:16+00:00'
modified_time: '2019-05-14T14:37:09+00:00'
---
The JSON:API module exposes entity revisions as _resource versions_, in a manner inspired by [RFC5829: Link Relation Types for Simple Version Navigation between Web Resources](https://tools.ietf.org/html/rfc5829).

Current limitations:

* Resource versions (entity revisions) can only be read. And only for `Node` and `Media` entity types (`node--*` and `media--*` resource types) can JSON:API make the resource versions accessible (due to the absence of a formal entity revision access control API in Drupal core, once that's available we'll make all revisionable entity types available via JSON:API, see [#3031271: Support version negotiation for any entity type (currently only Node & Media are supported)](https://www.drupal.org/project/drupal/issues/3031271 "Status: Closed (fixed)")).
* However, resource versions are created automatically when `PATCH`ing a resource of a resource type (entity type + bundle) that is configured to automatically create new versions (revisions). We're working to make it possible to let a `PATCH` request to a versionable resource specify whether a new revision should be created or not, in [#2993557: Allow optional creation of new revision when PATCHing revisionable entities to support autosave functionality via JSON:API.](https://www.drupal.org/project/drupal/issues/2993557 "Status: Needs work").

Revision support is not an official part of the JSON:API specification. However, a[ number of "profiles" are being developed](https://www.drupal.org/project/jsonapi/issues/2955020) (also not officially part in the spec, but already [committed to JSON:API v1.1](https://jsonapi.org/format/upcoming/#profiles)) to standardize any custom behaviors that the JSON:API module has developed (all of which are still specification compliant).

In doing so, JSON:API module should be maximally compatible with other systems and should minimize the "Drupalisms" that a developer building against a JSON:API implementation will be required to know.

A "version" in the JSON:API module is any revision that was previously, or is currently, a default revision. Not all revisions are considered to be a "version". Revisions that are not marked as a "default" revision are considered "working copies" since they are not usually publicly available and are the revisions to which most new work is applied.

When the Content Moderation module is installed, it is possible that the most recent default revision is \*not\* the latest revision.

Requesting a resource version is done via a URL query parameter. It has the following form:

```php
            version-identifier
                  __|__
                 /     \
?resourceVersion=foo:bar
                 \_/ \_/
                  |   |
  version-negotiator  |
              version-argument

```

A version identifier is a string with enough information to load a particular revision. The version negotiator component names the negotiation mechanism for loading a revision. Currently, this can be either `id` or `rel`. The `id` negotiator takes a version argument which is the desired revision ID. The `rel` negotiator takes a version argument which is either the string `latest-version` or the string `working-copy`.

In future, other negotiators may be developed. For instance, a negotiator which is timestamp or workspace based.

To illustrate how a particular entity revision is requested, imagine a node that has a "Published" revision and a subsequent "Draft" revision.

Using JSON:API, one could request the "Published" node by requesting `/jsonapi/node/page/{{uuid}}?resourceVersion=rel:latest-version`.

To preview an entity that is still a work-in-progress (i.e. the "Draft" revision) one could request `/jsonapi/node/page/{{uuid}}?resourceVersion=rel:working-copy`.

To request a specific revision ID, one can request `/jsonapi/node/page/{{uuid}}?resourceVersion=id:{{revision_id}}`.

It is not yet possible to request a collection of revisions. This is still under development in issue [#3009588: Provide a collection resource where a version history can be obtained (\`version-history\`, \`predecessor-version\` and \`successor-version\` link relations)](https://www.drupal.org/project/drupal/issues/3009588 "Status: Active").