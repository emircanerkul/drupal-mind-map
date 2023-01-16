---
url: https://www.drupal.org/docs/drupal-apis/database-api/database-api-overview
description: >-
  The Drupal 8 Database API provides a standard, vendor-agnostic abstraction
  layer for accessing database servers. You should almost never be making
  database calls directly unless you are developing core APIs.
published_time: '2016-12-06T16:22:21+00:00'
modified_time: '2021-03-11T21:35:31+00:00'
---
The Drupal 8 Database API provides a standard, vendor-agnostic abstraction layer for accessing database servers. **You should almost never be making database calls directly unless you are developing core APIs.**

The API is designed to preserve the syntax and power of SQL as much as possible, but also:

* To support multiple database servers easily;
* To allow developers to leverage more complex functionality, such as transactions;
* To provide a structured interface for the dynamic construction of queries;
* To enforce security checks and other good practices;
* To provide modules with a clean interface for intercepting and modifying a site's queries.

The [main Database API documentation](http://api.drupal.org/api/group/database) is derived directly from comments in the code. This Handbook section augments those API docs by providing a tutorial for module authors who wish to interact with the database system, as well as an overview of the system from an administrator's point of view.

The Database API was built with object-oriented design concepts, and this document therefore assumes at least a partial familiarity with those concepts. Common operations also have a procedural style available for use, but those procedural styles are deprecated. It is recommended to use a connection object for database interaction.

Please note that the Database API may not always be the best option for interacting with data. API use in Drupal 8 is usually situational, e.g. using the Node API for Node CRUD operations, the Entity API for Entity creation, etc. Please view the API docs to determine which API best fits your needs.

Note: this Handbook might not cover every feature of the API.