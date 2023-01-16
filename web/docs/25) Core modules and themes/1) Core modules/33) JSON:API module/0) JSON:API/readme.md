---
url: >-
  https://www.drupal.org/docs/core-modules-and-themes/core-modules/jsonapi-module/jsonapi
description: >-
  The JSON:API module is a fully compliant implementation of the JSON:API
  Specification. In its own words, the JSON:API specification is: [A]
  specification for how a client should request that resources be fetched or
  modified, and how a server should respond to those requests. JSON:API is
  designed to minimize both the number of requests and the amount of data
  transmitted between clients and servers. This efficiency is achieved without
  compromising readability, flexibility, or discoverability. Drupal's
  datastructures, i.e.
published_time: '2016-09-20T14:38:28+00:00'
modified_time: '2022-05-28T19:57:30+00:00'
---
The JSON:API module is a fully compliant implementation of the [JSON:API Specification](https://jsonapi.org/).

In its own words, the JSON:API specification is:

> \[A\] specification for how a client should request that resources be fetched or modified, and how a server should respond to those requests.
> 
> JSON:API is designed to minimize both the number of requests and the amount of data transmitted between clients and servers. This efficiency is achieved without compromising readability, flexibility, or discoverability.

Drupal's datastructures, i.e. entity types, bundles, and fields, are incredibly well suited to the JSON:API.

By enabling the JSON:API module, you immediately gain a full REST API for every type in your Drupal application. JSON:API inspects your entity types and bundles so that it can dynamically provide URLs by which to access each and every one of them using the standard HTTP methods, GET, POST, PATCH, and DELETE.

JSON:API takes the philosophy that the module should be production-ready "out of the box". This means the module is highly opinionated about where your resources will reside, what methods are immediately available on them, and leaves access control to Drupal Core's permissions system. At this time, there are no available configuration pages. This means that you can get up and running with an API-driven Drupal application with minimal effort.

The child pages of this documentation page will include:

* Core concepts of the JSON:API specification - and how they apply to Drupal
* A broad overview of the API that the module makes available.
* Practical information about how to craft your HTTP requests.
* How to authenticate your requests.
* Common "gotchas."
* Specific documentation for:  
   * Fetching individual resources (GET)  
   * Fetching collections of resources (GET with filters, pagination, and sorting)  
   * Creating new resources (POST)  
   * Updating existing resources (PATCH)  
   * Removing existing resources (DELETE)

If you have specific questions, please create a support request in the [JSON:API module's issue queue](/project/issues/search/drupal?text=&assigned=&submitted=&project%5Fissue%5Ffollowers=&component%5B%5D=jsonapi.module&issue%5Ftags%5Fop=%3D&issue%5Ftags=).