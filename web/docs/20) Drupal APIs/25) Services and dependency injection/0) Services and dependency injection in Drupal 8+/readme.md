---
url: >-
  https://www.drupal.org/docs/drupal-apis/services-and-dependency-injection/services-and-dependency-injection-in-drupal-8
description: >-
  In Drupal 8 speak, a service is any object managed by the services container.
  Drupal 8 introduces the concept of services to decouple reusable functionality
  and makes these services pluggable and replaceable by registering them with a
  service container. Another important benefit of dependency injection is that
  code will be easier to test via PHPUnit tests, because your domain's business
  logic will be separated from the huge amount of Drupal dependencies.
  Dependency injection makes testing your unique business logic much easier and
  reduces the processing time.
published_time: '2013-11-11T13:03:38+00:00'
modified_time: '2022-06-05T21:07:35+00:00'
---
In Drupal 8 speak, a service is any object managed by the services container.

Drupal 8 introduces the concept of services to decouple reusable functionality and makes these services pluggable and replaceable by registering them with a service container.

Another important benefit of dependency injection is that code will be easier to test via [PHPUnit tests](/docs/testing/phpunit-in-drupal), because your domain's business logic will be separated from the huge amount of Drupal dependencies. Dependency injection makes testing your unique business logic much easier and reduces the processing time. [The official PHPUnit documentation](https://phpunit.de/) teaches you how to write tests for your unique business logic.

As a developer, it is best practice to access any of the services provided by Drupal via the service container to ensure the decoupled nature of these systems is respected. [The Symfony documentation](https://symfony.com/doc/3.4/service%5Fcontainer.html) has a great introduction to services.

As a developer, services are used to perform operations like accessing the database or sending an e-mail. Rather than use PHP's native MySQL functions, we use the core-provided service via the service container to perform this operation so that our code can simply access the database without having to worry about whether the database is MySQL or SQLlite, or if the mechanism for sending e-mail is SMTP or something else.