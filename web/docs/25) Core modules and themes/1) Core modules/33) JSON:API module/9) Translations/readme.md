---
url: >-
  https://www.drupal.org/docs/core-modules-and-themes/core-modules/jsonapi-module/translations
description: >-
  JSON:API supports very simple multilingual functionality. It does not support
  advanced use cases. It currently relies on Drupal's default language
  negotiation mechanisms to negotiate the appropriate language of an entity and
  fall back when that translation is not available. In the long term, we intend
  to move away from this mechanism while retaining backwards compatibility; we
  want to add a JSON:API-spec compliant, formal translation support. The current
  language negotiation mechanism: works well for GET requests for individual
  resources, collection resources and includes.
published_time: '2019-03-05T22:18:54+00:00'
modified_time: '2019-03-11T18:43:30+00:00'
---
JSON:API supports very simple multilingual functionality. It does not support advanced use cases.

It currently relies on Drupal's default [language negotiation mechanisms](https://www.drupal.org/docs/8/multilingual/enable-language-negotiation) to negotiate the appropriate language of an entity and fall back when that translation is not available. In the long term, we intend to move away from this mechanism while retaining backwards compatibility; we want to add a [JSON:API-spec compliant, formal translation support](https://www.drupal.org/project/jsonapi/issues/2794431).

The current language negotiation mechanism:

* works well for `GET` requests for individual resources, collection resources and includes.
* does support `PATCH` requests on translations: updating translations is possible
* does not support `DELETE` requests: only the entire resource (entity) can be deleted, not just a translation
* has limited `POST` support: it does support creating an entity with a non-default langcode in a `POST` but does not allow creating additional translations

These are consequences of the peculiarities of the underlying Entity API's translation handling. To follow development of complete and formal support for translations, see: [#2794431: \[META\] Formalize translations support](https://www.drupal.org/project/drupal/issues/2794431 "Status: Needs work")