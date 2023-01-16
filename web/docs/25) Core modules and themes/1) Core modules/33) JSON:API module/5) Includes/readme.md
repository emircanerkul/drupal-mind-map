---
url: >-
  https://www.drupal.org/docs/core-modules-and-themes/core-modules/jsonapi-module/includes
description: >-
  TL;DR: Use a query string like ?include=field_comments.uid to include all the
  entities referenced by field_comments and all the entities referenced by uid
  on those entities! JSON:API helps you eliminate HTTP requests by allowing you
  to specify relationship paths which you would like to be included in the
  response document. How? Fetching single resources Fetch article Let's imagine
  you have an article with two comments and each of those comments have the same
  author.
published_time: '2018-10-04T21:27:51+00:00'
modified_time: '2020-07-13T18:03:04+00:00'
---
**TL;DR**: Use a query string like `?include=field_comments.uid` to include all the entities referenced by `field_comments` and all the entities referenced by `uid` on _those_ entities!

---

JSON:API helps you eliminate HTTP requests by allowing you to specify relationship paths which you would like to be included in the [response document](https://www.drupal.org/docs/8/modules/json-api/glossary-of-terms-read-first#term-document). How?