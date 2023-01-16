Assert() statements help to define the expectations of the codebase. Drupal has a large API with many public methods that your modules may call, and many that in accordance with the API guidelines your code is expected to call. These methods often expect to receive data from your module in a particular way. PHP 5 solves some of this problem with type hints - enforcing that a module argument is an object or array. But what if it should be a string? What if it should be one of a few specific keywords - such as "template", "module", or so on? What if an array is called for where all the members of the array must fit a certain constraint such as all of them being strings or numbers?

PHP documentation code in the comments only records what the code should be doing, it can't verify that it's actually being done. Only an assert() statement can do that cleanly. It could be checked for with normal control structures, but the performance loss of checking some of Drupal's larger data structures such as render arrays every single time they are passed between public functions would be enormous.

Actively checking expectations this way is a programming paradigm known as "Design by Contract." Think of the API description as a contract - you provide the Drupal code with data in a known range and format and you will receive the same. This isn't a replacement for Test Driven Design but a supplement to it. Unit tests check known scenarios and configurations, and collections of such tests constantly recheck such scenarios to prevent regressions in the system. Functional tests check to see if the whole system behaves as expected, again in known scenarios. At the time of this writing, there are nearly 100,000 such tests in Drupal 8\. But what about the unknown?

This is the role of the Design by Contract approach. The tests were done with the assert() statement aren't so much about the components of Drupal themselves but the interactions between them and their interactions with module code written by anyone.

Assert() statements most frequently show up at the start and the end of functions. Those assert() statements at the start are known as "preconditions." They also show up just before the return statement of the code - these are known as post conditions.

Occasionally assert() statements are placed as the default of a switch case statement. Consider the following example dealing with card suits.

```php
switch($suit) {
  case 'heart':
    //some action
    break;
  case 'diamond':
    // some action
    break;
  case 'club':
    // some action
    break;
  case 'spade':
    // some action
    break;
  default:
    assert(FALSE, "Invalid suit {$suit}");
}

```

Here the assertion only fails when the function this branching appears in gets passed a suit that doesn't exist.