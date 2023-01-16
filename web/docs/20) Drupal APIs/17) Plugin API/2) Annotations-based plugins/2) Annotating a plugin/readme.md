In order to tell the system that something is a plugin you have to place the following comment right before your class definition (with @Plugin replaced with the particular plugin type):

```php
/**
 * @Plugin(
 *
 * )
 */

```

An example of a plugin using this annotation class is the `UserNameUnique` found in `core/modules/user/src/Plugin/Validation/Constraint/UserNameUnique.php`.

This annotation contains just the ID and label:

```php
/**
 * Checks if a user name is unique on the site.
 *
 * @Constraint(
 *   id = "UserNameUnique",
 *   label = @Translation("User name unique", context = "Validation"),
 * )
 */
class UserNameUnique extends Constraint {
...
}

```

### The annotation syntax

In a nutshell, annotations are inherently key-value data structures, with support for nesting.

The annotations syntax comes from the Doctrine project (for details, see the [documentation](https://www.doctrine-project.org/projects/doctrine-orm/en/2.6/reference/annotations-reference.html)), though Drupal has a slightly different coding style, such as a new line after each value, so that will be used here.

* You should start with a plugin ID, equivalent to a Drupal 7 "machine name", which is unique for your plugin type
* _Keys_ on the root level MAY use double quotes.
* _Keys_ in sublevels MUST use double quotes.
* **Do not use single quotes, only double quotes. Single quotes throw an exception.**
* Available data types for _values_ are:  
   * Strings: MUST use double-quotes (for example `"foo"`). If your string includes a double-quote character, use a pair of double-quotes to escape it (for example `"The ""On"" value"`).  
   * Numbers: MUST NOT use quotes (for example `21`) — will be parsed as a string if quotes are used.  
   * Booleans: MUST NOT use quotes (`TRUE` or `FALSE`) — will be parsed as a string if quotes are used.  
   * Lists: use curly brackets.  
   ```php  
   base = {  
     "node",  
     "foo",  
   }  
   ```  
   Note the comma at the end of the last list element; This is not a typo! It helps prevent parsing errors if another element is placed at the end of the list later.  
   * Maps: using curly brackets and an equality sign to separate the key and the value.  
   ```php  
   edit = {  
     "editor" = "direct",  
   }  
   ```
* Constants are allowed.