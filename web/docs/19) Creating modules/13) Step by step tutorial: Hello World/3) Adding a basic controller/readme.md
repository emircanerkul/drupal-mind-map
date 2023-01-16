---
url: >-
  https://www.drupal.org/docs/creating-custom-modules/step-by-step-tutorial-hello-world/adding-a-basic-controller
description: >-
  This example uses ControllerBase which can greatly reduce boilerplate
  dependency handling code. However, it also makes the class considerably more
  difficult to unit test. Therefore this base class should only be used by
  controller classes that contain only trivial glue code. Controllers that
  contain sufficiently complex logic that's worth testing should not use this
  base class but should instead use ContainerInjectionInterface or should even
  better be refactored to be trivial glue code.
published_time: '2015-04-02T05:12:35+00:00'
modified_time: '2021-03-09T15:15:09+00:00'
---
_This example uses [ControllerBase](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Controller%21ControllerBase.php/class/ControllerBase/8.2.x) which can greatly reduce boilerplate dependency handling code. However, it also makes the class considerably more difficult to unit test. Therefore this base class should only be used by controller classes that contain only trivial glue code. Controllers that contain sufficiently complex logic that's worth testing should not use this base class but should instead use [ContainerInjectionInterface](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21DependencyInjection%21ContainerInjectionInterface.php/interface/ContainerInjectionInterface/8.2.x) or should even better be refactored to be trivial glue code._

The `content()` function in the `HelloController` class will be returning the markup text, when the routing system invokes the page.

Within your module folder, you should have the PSR-4 standard folder structure `/src/Controller` and inside this folder you should have your `HelloController.php` controller file.  
So your controller file will be like this  
`/src/Controller/HelloController.php`

Have the following code in the `HelloController.php` file:

```php
<?php

namespace Drupal\hello_world\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
 * Defines HelloController class.
 */
class HelloController extends ControllerBase {

  /**
   * Display the markup.
   *
   * @return array
   *   Return markup array.
   */
  public function content() {
    return [
      '#type' => 'markup',
      '#markup' => $this->t('Hello, World!'),
    ];
  }

}

```

This code, on its own, will not do anything. It needs to be invoked by adding a routing file to our module. Adding the controller first to our code, however, is part of a general D8 philosophy of, "Build a tool, then wire it up".