The constraint definition will go in the namespace `Drupal\[MODULENAME]\Plugin\Validation\Constraint`, and will extend `Symfony\Component\Validator\Constraint`. In this class, the types of constraint violations are defined, along with the error messages that will be displayed for the given violations.

```php
<?php

namespace Drupal\[MODULENAME]\Plugin\Validation\Constraint;

use Symfony\Component\Validator\Constraint;

/**
 * Checks that the submitted value is a unique integer.
 *
 * @Constraint(
 *   id = "UniqueInteger",
 *   label = @Translation("Unique Integer", context = "Validation"),
 *   type = "string"
 * )
 */
class UniqueIntegerConstraint extends Constraint {

  // The message that will be shown if the value is not an integer.
  public $notInteger = '%value is not an integer';

  // The message that will be shown if the value is not unique.
  public $notUnique = '%value is not unique';

}

```