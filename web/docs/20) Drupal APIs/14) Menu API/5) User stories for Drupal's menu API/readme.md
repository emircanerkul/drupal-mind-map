---
url: https://www.drupal.org/docs/8/api/menu-api/user-stories-for-drupals-menu-api
description: >-
  Adapted from [#2351379]. Here are various user stories for the menu API and
  how they fare against the plan at [#2407505]. Content Authors/Site Builder Use
  Cases (UI) As a content author, I want to create an "About" page
  (/content/about) with a link in my main site navigation, and I don't want that
  link to break when I edit the page later to change the page title/path to
  "About Us" (/content/about-us). D7: PASS: Node paths are resolved to the
  system path (node/1); changing path to /content/about-us won't break the link.
published_time: '2015-01-14T22:01:52+00:00'
modified_time: '2017-04-19T14:58:18+00:00'
---
Adapted from [#2351379: \[meta\] Define, then support exact use cases for link generation and storage](https://www.drupal.org/project/drupal/issues/2351379 "Status: Closed (duplicate)"). Here are various user stories for the menu API and how they fare against the plan at [#2407505: \[meta\] Finalize the menu links (and other user-entered paths) system](https://www.drupal.org/project/drupal/issues/2407505 "Status: Closed (fixed)").

### Content Authors/Site Builder Use Cases (UI)

#### As a content author, I want to create an "About" page (/content/about) with a link in my main site navigation, and I don't want that link to break when I edit the page later to change the page title/path to "About Us" (/content/about-us).

* D7: PASS: Node paths are resolved to the system path (node/1); changing path to /content/about-us won't break the link.
* D8 (current): PASS: It does basically the same thing, except route name/parameters rather than system path.
* D8 (proposed): PASS: An entity reference is saved, which is resolved to route name / parameters by the menu link system.

#### As a content author, I want to create an "About Us" page (/content/about) in my main site navigation that currently just says "Coming Soon" while the Marketing team puts together a much better page, which I then want to put the new page at /content/about after deleting/re-pathing the old one. I expect my menu link to /content/about to continue to work.

* D7: FAIL: This is basically the opposite of use case #1 and as such is not supported. The menu link disappears when the "Coming soon" page is deleted.
* D8 (current): FAIL: Same.
* D8 (proposed): PASS: In the custom menu link form, enter "content/about", and we preserve that.

#### As a site builder, I want to set up a link to /blog that currently points to View, but later I will remove the View page and create a panel page at /blog with lots of blocks.

* D7: PASS: Because system path is stored, switching the underlying implementation out from underneath works fine.
* D8 (current): FAIL: Because all paths are resolved to routes.
* D8 (proposed): PASS: In the custom menu link form, enter "blog", and we preserve that.

#### As a content author, I want to build out my site navigation first, then fill it with content as I go, like I do in other CMSes.

* D7: FAIL: Linking to non-existing content is not supported.
* D8 (current): FAIL: Same.
* D8 (proposed): PASS: In the custom menu link form, enter the URL aliases you want and then when building content, use those aliases. However, taking this site building approach has its drawbacks, since if you later change any of those node path aliases, you'll need to update the links manually to match.

#### As a site builder, I want to change the canonical path of the login page from /user/login to /login, without breaking any code (modules, themes, .htaccess, robots.txt). (I'm not concerned about links that are editable in the UI referencing the old path, as I can update those through the UI.)

* D7 (core): FAIL: Because paths == routes, changing a path means changing the route, and code that explicitly links to those would fail.
* D8 (current): PASS. References to any static routes to use the route machine name, not the system path.
* D8 (proposed): PASS, since it keeps this behaviour. This is a reason not to do [#2405551: Add a method to support UIs where users enter paths instead of route names and other valid use cases](https://www.drupal.org/project/drupal/issues/2405551 "Status: Closed (duplicate)").

### Translator use cases

#### As a translator I want to use one menu and have translations for items in this same menu.

* D7 (core): FAIL: Menu items cannot be translated in core, i18n\_menu provides a solution in contrib
* D8 (core, current): PASS: Menu items can be translated either as configuration, as content or as interface
* D8 (core, proposed):PASS: Menu items will ALSO be translatable as a field.

#### As a translator, I want to use the same menu for translations but different menu items that are shown conditionally based on language.

* D7 (core): FAIL: Menu items don't know their language so cannot be shown/hidden by their language. i18n\_menu provides this feature in contrib.
* D8 (core, current): semi-FAIL: Nodes get menu item content entities for their menu items. These know their language, but per language hiding is not implemented. That could be contrib.
* D8 (core, proposed): semi-FAIL: Fields know their language, so per language hiding may be implement in contrib.

#### As a translator, I want to use different menus per language and consequently need to use different menu items for translations.

* D7 (core): semi-PASS: Translated nodes are their own nodes if using core’s translation module and naturally have their own menu items (but not if using entity\_translation). The menu selection widget cannot be limited to the specific language menu as needed, but contrib solves that.
* D8 (core, current): FAIL: Entity translations are the same entity and neither the menu item "entity reference" is translatable nor the menu name/weight on the menu item content entity.

D8 (core, proposed): semi-FAIL: Menu items as fields are proposed to support weight and title/description translation but not menu name swapping. Should figure out how this may be possible in contrib at least.

### Developer/Themer Use Cases (Code)

#### As a module developer, I want to add a link to the user login form, and I want that link to stay working even if Drupal at some point renames user/login to account/login.

* D7: FAIL: Because there's no concept of route machine names, your only option is linking to system paths, which can change.
* D8 (current): PASS: This is one advantage of the new routing system.
* D8 (proposed): PASS: Url::fromRoute() continues to work and is the recommended practice.

#### As a distribution developer, I want to add a menu link to /blog, but provide both a "Simple Blog View" and "Fancy Blog View" and let my site builders choose.

* D7: PASS: System paths are stored, so whichever View gets enabled wins.
* D8 (current): FAIL: Because paths are always resolved to route names/parameters, there's no way to support this use case.
* D8 (proposed): PASS: During install the distro can save a menu link content entity referencing the path.

#### As a developer, I want to provide a link to an internal URL that resolves to a single route, such as '/admin/structure/book'.

* D7: PASS: `url('admin/structure/book');`
* D8: PASS: `Url::fromRoute('book.admin');`

#### As a developer, I want to provide a link to an internal URL that resolves to one or more routes, such as '/blog'.

* D7: PASS: `url('blog')`;
* D8 (current): semi-FAIL: Technically, you can workaround with `Url::fromUri('base://blog')`; but this is awkward.
* D8 (proposed): PASS: Url::fromPath('/blog'); Note though that this use case is controversial in D8 because we do not want to encourage developers to do this, even though it is an easier/more natural progression from D7.

#### As a developer, I want to provide a link to an external URL, such as '<https://drupal.org/>'.

* D7: PASS: url('<https://drupal.org/>', array('external' => TRUE);
* D8: PASS: Url::fromUri('<https://drupal.org>');

#### As a developer, I want to provide a link to a URL to a resource on the same host as the Drupal installation that does not resolve to a route, such as robots.txt or /wordpress/.

* D7: PASS: url('robots.txt', array('external' => TRUE));
* D8: PASS: Url::fromUri('base://robots.txt');

#### As a distribution developer, I want to change the canonical path of /admin/structure/contact and /admin/structure/contact/\* to /admin/config/contact and /admin/config/contact/\*. If possible, I still want to leave the site builder the freedom to create a URL alias to them.

* D7: ? hook\_url\_outbound\_alter(), but not sure if this completely solves the use case
* D8 (current): PASS: the 'path' property of the routes can be altered (in code).
* D8 (proposed): semi-FAIL: if the site builder adds a contrib module that invokes Url::fromPath('admin/structure/contact');

#### As a themer, I want to be able to do all the linky things a developer can do!

Available twig functions:  
file\_url() /// wraps file\_create\_url()  
url\_fromPath() // Basically Url::fromPath() in twig  
url() // Basically Url::fromRoute() in twig