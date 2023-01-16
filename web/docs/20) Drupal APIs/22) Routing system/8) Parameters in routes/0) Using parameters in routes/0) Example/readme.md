A common use case for parameters is to refer to a content or configuration entity type in the route path. For example in `example.routing.yml`:

```php
example.user:
  path: '/example/{user}'
  defaults: 
    _controller: '\Drupal\example\Controller\ExampleController::content' 
  requirements: 
    _permission: 'access content' 
  options:
    parameters:
      user:
        type: entity:user
```

The `{user}` element in the URL is called a _slug_ (also called a "path parameter" or sometimes a "named parameter") and is available as `$user` in the controller method. While Symfony allows for more arbitrary use of _slugs,_ Drupal has stricter requirements. In fact, _**unlike generic Symfony routes, Drupal requires that a slug occupies a complete path part**_ \- the portion between two slashes (or everything after the last slash). If you must pass a parameter containing slashes, apply the same trick as in [PathProcessorFiles](https://api.drupal.org/api/drupal/core%21modules%21system%21src%21PathProcessor%21PathProcessorFiles.php/class/PathProcessorFiles/8.2.x).

In most PHP code the name of the variable does not matter but here it does: **_the name of the method argument must match the slug._** Conversely, if the method argument name matches the name of the slug, the parameter will be passed in, irrespective of the order of arguments.

When your parameter should be an instance of an entity, you have to define your parameter type inside the `options parameters` section (`type: entity:user` in the example above) in order to let Drupal check and validate the provided entity id for you. This will ensure that a "not found" response is provided if the provided entity ID doesn't exist. Take a look on [video explaining this feature here](https://www.youtube.com/watch?v=0vFusaJxA0w)

There is nothing more to provide in the route for the parameter conversion to happen because `user` is the name of an entity type and it will get automatically converted into a user object. In the controller, define an argument on the controller method with the same name to get this user object passed in:

```php
use Drupal\Core\Session\AccountInterface;
use Symfony\Component\HttpFoundation\Request;

class ExampleController {  
  
  // ...
  public function content(AccountInterface $user, Request $request) {
    // Do something with $user.
  }
}

```

This works because

1. `$user` is an instance of `Drupal\user\Entity\User` and that object implements `AccountInterface`. Type hinting with `Drupal\user\UserInterface` or even `Drupal\Core\Entity\EntityInterface` or any other interface the `User` class implements would make the argument passing work as well. (Typehinting with classes works as well up to the `User` class itself but it's best practice to typehint with interfaces.)
2. When typehinting with `Request` the request object is automatically passed in (even the argument name does not matter). See below for other objects that can be set as parameters.

<!-- note-tip -->
> TIP: Note: the order of the method arguments is not important. Only the name for slugs and the typehint for typehinted parameters (see below). However optional arguments should always be placed last.

In this case, if the URL includes the user id of a non-existent user, this will return a 404 Not Found response automatically.

Forms can use upcasted URL parameters too. In this example a form is using the account object and its ID is passed in from the URL.

```php
example.user_form:
  path: '/example/form/{user}'
  defaults:
    _form: '\Drupal\example\Form\ExampleForm'
  requirements:
    _permission: 'access content'

```

```php
namespace Drupal\example\Form;

use Drupal\Core\Form\FormBase;
use Drupal\Core\Session\AccountInterface;

class ExampleForm extends FormBase {

 public function buildForm(array $form, FormStateInterface $form_state, AccountInterface $user = NULL) {
    // Do something with $user in the form
  }
}

```

Note that this method of providing the entity data to a form is not used for entity forms, such as forms to add/edit/delete entity data.

Note: For form arguments, it is essential to provide a default value for each argument!  
In the example above, `$user` is given a default value of `NULL`. **Without this, your code will not compile.**