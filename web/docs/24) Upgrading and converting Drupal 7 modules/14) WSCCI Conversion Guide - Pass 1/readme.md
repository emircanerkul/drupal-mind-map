---
url: >-
  https://www.drupal.org/docs/converting-drupal-7-modules-to-drupal-8/wscci-conversion-guide-pass-1
description: >-
  1. Leverage the new routing system First, we need to switch the declaration of
  the routes (the mapping rules) to the new routing system. The new routing
  system doesn't use a hook but a YAML file, book.routing.yml, that is placed in
  the root of the module directory.
published_time: '2013-03-26T16:00:43+00:00'
modified_time: '2017-03-21T17:51:54+00:00'
---
### 1\. Leverage the new routing system

First, we need to switch the declaration of the routes (the mapping rules) to the new routing system. The new routing system doesn't use a hook but a YAML file, `book.routing.yml`, that is placed in the root of the module directory.

book.routing.yml

```php
book.render:
  path: '/book'
  defaults:
    _controller: '\Drupal\book\Controller\BookController::bookRender'
    _title: 'Books'
  requirements:
    _permission: 'access content'

book.admin:
  path: '/admin/content/book'
  defaults:
    _controller: '\Drupal\book\Controller\BookController::adminOverview'
    _title: 'Books'
  requirements:
    _permission: 'administer book outlines'

```

There's a lot going on here, so let's take it one step at a time.

Every route has a machine name. By default, using the name of the page callback function we're replacing is usually fine. Then there are three key sections for each route.

path

This is the path, what would have gone in the $items array as a key in hook\_menu. Note that the path must begin with a / and may consist of not more than 9 parts each separated by a /. Also note that any placeholders are marked with {}, rather than %. More on that later.

defaults

Under defaults, we specify additional properties that should be made available to the routing system. The most important for now is \_controller. We'll talk about others later. These may be nested further.

requirements

These are restrictions on the route. A key that does not begin with a \_ is assumed to be a regular expression that applies to a placeholder. A key that does begin with a \_ has some other special meaning.

In both of these cases, we're converting a page callback that is access controlled by a permission, so we specify a requirement of \_permission with a value of whatever the name of the permission is. Instead of specifying a "page callback", we instead specify a class and a method of that class with \_controller. That method will be responsible for returning the body of the page.

### 2\. Adjust the menu definition

Of course, that's just for routing. We still need the menu tree to work. For that, we replace the routing-related parts of book\_menu with a reference to this route, like so:

```php
  $items['admin/content/book'] = array(
    'title' => 'Books',
    'description' => "Manage your site's book outlines.",
    'route_name' => 'book.admin',
    'type' => MENU_LOCAL_TASK,
  );
  $items['book'] = array(
    'title' => 'Books',
    'route_name' => 'book.render',
    'type' => MENU_SUGGESTED_ITEM,
  );

```

The "page callback", "access arguments", and "file" keys have been replaced with simply "route\_name", which refers to the name of the route we just defined. Those keys are no longer necessary. \[Note: We're not entirely happy with this setup, and would like to simplify it further. Discussion for what to do with what's left of hook\_menu() is happening in [this issue](http://drupal.org/node/1889790).)

Note that we're currently leaving the definition of MENU\_DEFAULT\_LOCAL\_TASKs in, without assigning a separate, yet redundant "route\_name". If redundant "page callback", "access arguments", and "file" keys are present, they can also be removed. A visitable, yet UI-wise hidden URL isn't worth adding more cruft to the router, and the tab will display fine on the URL of the parent's item as it always did, see [this issue](/node/1995620).

### 3\. Create the new controller

Now, we need to create our new controller, which will replace the page callback. We already decided on the class name above, because we specified it in the route definition. Create a new file at: `/core/modules/book/src/Controller/BookController.php`. (That is, the path to the module, "lib", and then the full path of the class name.) Let's start off with a simple skeleton in that file:

```php
/**
 * @file
 * Contains \Drupal\book\Controller\BookController.
 */

namespace Drupal\book\Controller;

use Symfony\Component\DependencyInjection\ContainerInterface;

use Drupal\Core\DependencyInjection\ContainerInjectionInterface;

/**
 * Controller routines for book routes.
 */
class BookController implements ContainerInjectionInterface {

  /**
   * Constructs a BookController object.
   */
  public function __construct() {
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    return new static();
  }

  /**
   * Returns an administrative overview of all books.
   *
   * @return string
   *   A HTML-formatted string with the administrative page content.
   *
   */
  public function adminOverview() {
  }

  /**
   * Prints a listing of all books.
   *
   * @return string
   *   A HTML-formatted string with the listing of all books content.
   */
  public function bookRender() {
  }

}

```

It should be really simple so far. We have two methods that are the actual controllers, as specified in the routing.yml file. We have a constructor that doesn't do anything yet. (Normally you'd omit such a constructor, but we'll be using it shortly.) And we have this weird create() static method.

That create() method is part of the ContainerInjectionInterface, which many controller classes will use. When the routing system goes to create this object, it will do so by calling that method with the Service Container (aka Dependency Injection Container), and let create() return a new instance of BookController. For now we just return a basic instance. (`new static()` means "a new instance of whatever class this method is defined in". We could have said `new BookController()`, but it's easier to just always say `static`.) We'll explore that a bit more in a moment.

Now, let's start by taking the entire contents of book\_render() and pasting them into the bookRender() method, and doing the same for book\_admin\_overview() and adminOverview(). As a first pass, that should work fine. We can then remove the old functions entirely (after testing, of course).

Clear the cache, then try going to /book or /admin/content/book. Cool, we're now using the new routing system!

Note that there's no requirement that both controller methods be in the same class. They can be organized however you decide makes sense. Generally, controller methods should be grouped into a single class if they will share the same utility code (protected methods in that class) or the same dependencies. More on that in the next pass.