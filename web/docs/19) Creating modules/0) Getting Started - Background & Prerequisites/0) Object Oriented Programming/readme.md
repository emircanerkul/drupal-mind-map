OOP, while initially daunting, is now well established as a best practice.  
For a general overview of PHP best practices, read through [phptherightway.com](http://www.phptherightway.com/). Drupal doesn't make use of all the different tools and techniques documented there but it does serve as a great introduction to PHP and the language's many features.

Brush up on your OOP knowledge by reading the official PHP documentation on [Classes and Objects](http://www.php.net/manual/en/language.oop5.php) as well as some of these other good primers:

* [PHP OOP in Full Effect](http://www.phpfreaks.com/tutorial/oo-php-part-1-oop-in-full-effect)
* [Object-oriented programming](https://en.wikipedia.org/wiki/Object-oriented%5Fprogramming) (on Wikipedia)
* [Object-Oriented PHP for Beginners](http://code.tutsplus.com/tutorials/object-oriented-php-for-beginners--net-12762) (at tuts+)
* [Object Oriented Concepts](http://www.tutorialspoint.com/php/php%5Fobject%5Foriented.htm) (at tutorialspoint.com)
* [Object Oriented Programming in PHP](https://www.youtube.com/playlist?list=PLfdtiltiRHWF0RicJb20da8nECQ1jFvla) (at youtube.com)
* [Foundations of Programming: Object Oriented Design](http://www.lynda.com/Programming-tutorials/Foundations-Programming-Object-Oriented-Design/96949-2.html) (at lynda.com)
* [Must know 12 PHP OOP concepts](http://phpenthusiast.com/object-oriented-php-tutorials)
* [OOP Track on SymfonyCasts](https://symfonycasts.com/screencast/oo) (formerly KNP university)

Drupal 8 also makes use of some common design patterns and you'll want to make sure you have a basic understanding of these:

* [The Factory Pattern](http://www.phptherightway.com/pages/Design-Patterns.html), and [Late static bindings](http://php.net/lsb)
* [Software design pattern](https://en.wikipedia.org/wiki/Design%5Fpatterns%5F%28computer%5Fscience%29) (on Wikipedia)
* [Foundations of Programming: Design Patterns](http://www.lynda.com/Developer-Programming-Foundations-tutorials/Foundations-Programming-Design-Patterns/135365-2.html) (at lynda.com)
* _@todo: add more links to documentation about the patterns we use ..._

### PHP Namespaces

If you're unfamiliar with the concept of namespacing in PHP, try some of these articles:

* [How to use PHP namespaces](http://www.sitepoint.com/php-53-namespaces-basics/).
* [PHP: Namespaces ](http://php.net/manual/en/language.namespaces.php)
* [a video on PHP namespaces](http://knpuniversity.com/screencast/php-namespaces-in-120-seconds).
* [PHP Namespaces Explained](http://daylerees.com/php-namespaces-explained) (by Dayle Rees)
* [Namespacing in PHP](http://code.tutsplus.com/tutorials/namespacing-in-php--net-27203) (at tuts+)

In most cases, the Drupal code is namespaced based on the module that code belongs to.

Example: namespace for the block.module

`namespace Drupal\block;`

_@todo: explain why sometimes it's Drupal\\ and sometimes it's Drupal\\\\\[Controller|Form|Plugin|etc.\] and how I should know which to use ..._

Read more about the [Drupal namespace standards](https://drupal.org/node/1353118). More on [PSR-4 usage in Drupal here](https://www.drupal.org/node/2156625). Correctly configured coding software should be able to pick up on PHP namespaces and provide help and autocompletions.

### Dependency Injection

Although dependency injection is really just another OOP design pattern, we call it out here because Drupal 8 makes heavy use of the concept and it is important to have a baseline understanding in order to access and make use of many of the core APIs.

Read up on [dependency injection on PHP the right way](http://www.phptherightway.com/#dependency%5Finjection), as well as the additional articles linked on that page. Especially [this article](http://fabien.potencier.org/article/11/what-is-dependency-injection) because Drupal makes heavy use of the Symfony service container referenced.

See also:

* [Services and dependency injection in Drupal 8](https://drupal.org/node/2133171)
* [Dependency injection](https://en.wikipedia.org/wiki/Dependency%5Finjection) (on Wikipedia)

### Symfony

Symfony is a PHP framework that Drupal borrows from in order to reduce code duplication across various PHP projects. Much of the code that Drupal 8 uses to handle routing, sessions and the services container, amongst other things, is borrowed from Symfony 2 (and as Drupal 8 developed, moved into Symfony 3). If you want to know more about why this decision was made, check out [this presentation](https://prague2013.drupal.org/session/not-invented-here-proudly-found-elsewhere-drupal-8-story.html) by core-committer alexpott for some background.

Check out the [Symfony book](http://symfony.com/doc/current/index.html) and brush up on your Symfony knowledge. While not all of it is required to understand Drupal, knowing how Symfony works will make you both a better Drupal developer and a better PHP developer. You might also be interested in the [Symfony Glossary](http://symfony.com/doc/2.0/glossary.html).

Check out core/composer.lock to see the Symfony libraries. As of Drupal [8.6.15](https://git.drupalcode.org/project/drupal/blob/91ded4b7776e05ee9633bdc1c458b41c718133e0/core/composer.json#L21), these are the Symfony PHP and closely related libraries:

```php
...
"symfony/class-loader": "~3.4.0",
"symfony/console": "~3.4.0",
"symfony/dependency-injection": "~3.4.26",
"symfony/event-dispatcher": "~3.4.0",
"symfony/http-foundation": "~3.4.26",
"symfony/http-kernel": "~3.4.14",
"symfony/routing": "~3.4.0",
"symfony/serializer": "~3.4.0",
"symfony/translation": "~3.4.0",
"symfony/validator": "~3.4.0",
"symfony/process": "~3.4.0",
"symfony/polyfill-iconv": "^1.0",
"symfony/yaml": "~3.4.5",
"twig/twig": "^1.38.2",
"doctrine/common": "^2.5",
"doctrine/annotations": "^1.2",
...
```

### Annotations

Drupal 8 makes use of PHP annotations – @docblock comments added to your code using a special syntax – for plugin discovery and to provide additional context/meta-data for code that's being executed. Annotations are read using the [Doctrine annotation parser (v.1.6.)](http://docs.doctrine-project.org/projects/doctrine-annotations/en/1.6/) then turned into information that Drupal can use to better understand what your code is doing.

Read more about the use of [annotations for plugin discovery](https://drupal.org/node/1882526).

See a list of [all the different annotation types](https://api.drupal.org/api/drupal/core!core.api.php/group/annotation/8) in Drupal 8.

See also: [PHPDoc ](https://en.wikipedia.org/wiki/PHPDoc)(on Wikipedia)

### Plugins

Plugins provide small pieces of functionality in such a way that they can be easily swapped out for another plugin. Plugins that perform similar functionality are of the same plugin type. For example, 'Field widget' is a plugin type, and each different field widget (eg. text field, textarea, date, etc.) is implemented with a plugin.

Read more about the [Plugin API in Drupal 8](https://drupal.org/node/2087839).

### Services

In Drupal 8 speak, a service is any object managed by the services container. The concept of services was introduced to decouple reusable functionality and makes these services pluggable and replaceable by registering them with a service container of [dependency injection](https://www.drupal.org/docs/8/api/services-and-dependency-injection), which they heavily relate to.

* See also: [Service Container For Drupal Geeks](https://www.youtube.com/watch?v=0lN4TCOXFV8) (on YouTube)

### Other resources

Below is a list of additional resources to help ensure that you hit the ground running with Drupal 8.

* <http://previousnext.com.au/blog/drupal-8-ready-whats-new-developers>
* <http://www.appnovation.com/blog/top-resources-getting-started-drupal-8>
* <https://drupalize.me/blog/201409/unravelling-drupal-8-plugin-system>