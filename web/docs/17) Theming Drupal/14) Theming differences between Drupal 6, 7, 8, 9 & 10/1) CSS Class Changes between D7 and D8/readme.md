### Menu

#### D7:

* [Upgrading 7.x themes to 8.x](/node/2023177)
* [Change notice for themers](/list-changes/published/drupal?keywords%5Fdescription=&to%5Fbranch=&version=&created%5Fop=%3E%3D&created[value]=&created[min]=&created[max]=&impacts[]=3)
* [Sqndr's Drupal 8 theming guide](https://github.com/sqndr/d8-theming-guide)
* [Ultimate Guide to Drupal 8: Episode 5 - Front-End Developer Improvements](https://dev.acquia.com/blog/ultimate-guide-drupal-8-episode-5-front-end-developer-improvements)

```php
.menu li.expanded
.menu li.collapsed
.menu li.leaf
.menu li.active-trail
.menu li.first
.menu li.last

```

#### D8:

```php
.menu-item--expanded
.menu-item--collapsed
.menu-item--active-trail
.menu-item:first-child
.menu-item:last-child

```

.menu-item--leaf was rarely used so it was removed. It can be added back. @see example <https://www.drupal.org/node/2425691#comment-9629101>  
@todo replace with the link in this documentation.