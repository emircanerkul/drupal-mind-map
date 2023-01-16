---
url: >-
  https://www.drupal.org/docs/converting-drupal-7-modules-to-drupal-8/wscci-conversion-guide-pass-2
description: >-
  Dig deeper into our new controller class So far it doesn't seem like we've
  gotten much out of this work. The class will now lazy load for us, but that's
  about it. Where it becomes useful is dependencies. A dependency is some other
  object or code that our code leverages. There are two kinds of dependencies:
  Hard dependencies are those that are hard coded into our code and cannot be
  changed without rewriting. Injected dependencies are objects that we pass into
  our object explicitly, which means we can change them by passing in different
  objects that have the same interface.
published_time: '2013-03-26T16:04:05+00:00'
modified_time: '2017-01-29T13:39:46+00:00'
---
### Dig deeper into our new controller class

So far it doesn't seem like we've gotten much out of this work. The class will now lazy load for us, but that's about it. Where it becomes useful is dependencies.

A dependency is some other object or code that our code leverages. There are two kinds of dependencies: **Hard dependencies** are those that are hard coded into our code and cannot be changed without rewriting. **Injected dependencies** are objects that we pass into our object explicitly, which means we can change them by passing in different objects that have the same interface. That makes code more cleanly separated, makes it clearer what dependencies we have, and makes testing far easier.

There are lots of ways to go about separating and injecting dependencies. For now, we'll show one example: both of our new controller methods call book\_get\_books(), making that a hard dependency. Instead of having a random function floating around that we cannot test, let's convert that into a **service**. A service is simply any object that 1) is managed by the service container and 2) gets its own dependencies from the service container. Otherwise, there's nothing special about them.

We'll create a new class for managing lookups of book-related information, called BookManager. For now, it will just contain the equivalent functionality of book\_get\_books(), but write it in such a way that we can easily move other floating utility functions into it later. Our new BookManager class will be named \\Drupal\\book\\BookManager, and therefore we need a new file named /core/modules/book/src/BookManager.php:

```php
/**
 * @file
 * Contains \Drupal\book\BookManager.
 */

namespace Drupal\book;

use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\Core\Database\Connection;

/**
 * Book Manager Service.
 */
class BookManager {

  /**
   * Books Array.
   *
   * @var array
   */
  protected $books;

  /**
   * Returns an array of all books.
   *
   * This list may be used for generating a list of all the books, or for building
   * the options for a form select.
   *
   * @return
   *   An array of all books.
   */
  public function getAllBooks() {
    if (!isset($this->books)) {
      $this->loadBooks();
    }
    return $this->books;
  }

  /**
   * Loads Books Array.
   */
  protected function loadBooks() {
    $this->books = array();
    $nids = db_query("SELECT DISTINCT(bid) FROM {book}")->fetchCol();
    if ($nids) {
      $query = db_select('book', 'b', array('fetch' => \PDO::FETCH_ASSOC));
      $query->join('node', 'n', 'b.nid = n.nid');
      $query->join('menu_links', 'ml', 'b.mlid = ml.mlid');
      $query->addField('n', 'type', 'type');
      $query->addField('n', 'title', 'title');
      $query->fields('b');
      $query->fields('ml');
      $query->condition('n.nid', $nids, 'IN');
      $query->condition('n.status', 1);
      $query->orderBy('ml.weight');
      $query->orderBy('ml.link_title');
      $query->addTag('node_access');
      $book_links = $query->execute();
      foreach ($book_links as $link) {
        $link['href'] = $link['link_path'];
        $link['options'] = unserialize($link['options']);
        $this->books[$link['bid']] = $link;
      }
    }
  }
}

```

All we've done is move the code from book\_get\_books() into a class, and split it into two methods for simplicity. However, look carefully and you'll notice that there's another hard dependency here, too. We're calling db\_query() and db\_select(), both of which are hard coded. That means our class still isn't decoupled. We need to _inject_ the database connection. To do that, add the following to the BookManager class:

```php
class BookManager{
  // ...

  /**
   * Database Service Object.
   *
   * @var \Drupal\Core\Database\Connection
   */
  protected $database;

  /**
   * Constructs a BookManager object.
   */
  public function __construct(Connection $database) {
    $this->database = $database;
  }

 // ...
}

```

Now, when we create a new BookManager class, we have to pass in the database connection to use rather than referencing a global function that we hope works. Now, change the db\_query() call to $this->database->query() and the db\_select() call to $this->database->select(). Our BookManager class is now nicely injected, and its one dependency is cleanly defined. It also means that we could test it by passing in a fake database connection, or one that we setup with just the table that BookManager is going to use and nothing else. We don't even need Drupal at all!

Of course, to use our BookManager class we need to first pass in that database connection. That's where the Dependency Injection Container comes in (or just "Container"). To wire that up, we create a new YAML file called book.services.yml in our module's root directory:

book.services.yml

```php
services:
  book.manager:
    class: Drupal\book\BookManager
    arguments: ['@database']

```

Simple, no?

Think of the Container as a giant array of objects and instructions on how to create those objects. What we're saying here is that the container ID "book.manager" is associated with an object of class Drupal\\book\\BookManager. When the Container goes to create it, that class's constructor's first parameter should get whatever object is associated with the "database" key. (That's what the @ means.) Now accessing the book.manager object will automatically retrieve the "database" object (which is the main database connection) and use it, without us having to think about it.

(For far more details on Dependency Injection, see the Symfony guide for the [Dependency Injection Component](http://symfony.com/doc/current/components/dependency%5Finjection/index.html).)

Now, let's close the loop. Remember that static create() method on the BookController class? Here's where it comes in useful. Let's add the BookManager dependency at the top of BookController and change the create() method and the constructor to look like this:

```php
use Drupal\book\BookManager;

use Drupal\Core\DependencyInjection\ContainerInjectionInterface;

/**
 * Controller routines for book routes.
 */
class BookController implements ContainerInjectionInterface {

  /**
   * Book Manager Service.
   *
   * @var \Drupal\book\BookManager
   */
  protected $bookManager;

  /**
   * Constructs a BookController object.
   *
   * @param \Drupal\book\BookManager\BookManager $book_manager
   *   The book manager.
   */
  public function __construct(BookManager $book_manager) {
    $this->bookManager = $book_manager;
  }

  /**
   * {inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    return new static($container->get('book.manager'));
  }

```

As with BookManager itself, we add a protected variable to hold the dependency and setup the constructor to accept that dependency and save it. (That's pretty much all a constructor should be doing.) But rather than putting the controller into the Container, we use the create() static method. The routing system will always call that create() method if it can, and pass it the entire container. Our create() method then pulls the book.manager service out of the container and passes it to the constructor. (That's what the `return new static()` does.) Because book.manager is configured (in the bundle class) to depend on the database, the Container takes care of that part for us.

That means that the object itself has a clean dependency, but we can easily map services from the Container to our controller class all in the same place. Score!

The last step is to change the calls to book\_get\_books() in the controller methods to `$this->bookManager->getAllBooks()`.

Clear all caches and try those pages again. If we did it right, nothing should have changed... except that our code is now more cleanly separated, it lazy-loads for us, it's clear what our dependencies are, and our code is more unit testable.

What else does this buy us? Consider what happens if we're running a site that uses MongoDB instead of MySQL to store nodes. Clearly, the BookManager class is not going to work because it only knows how to read from an SQL database. However, it's possible for modules to manipulate the Container configuration. That means another module could change book.manager to not use \\Drupal\\book\\BookManager, but \\Drupal\\mymodule\\MongoReplacements\\BookManager. That second class extends from the first, but instead of depending on an SQL database connection it depends on a MongoDB connection. It then overrides the loadBooks() method and looks up data from MongoDB instead.

Poof! Without modifying any code in core, without any hacking, our controllers now work on MongoDB. Or on any other storage engine. Or a flat-file based system if you were so inclined. Or just a differently-denormalized SQL table. The possibilities for "hacking core without hacking core" are enormous!

The process of converting to the new-style controllers also helps us flush out these sorts of dependencies, and refactor them as we go. That is, it's an excuse to finally fix some long-standing knots in the code and structure it the way it should be structured.