The next step is to create the class that will validate the constraint. The constraint validation will go in the namespace `Drupal\[MODULENAME]\Plugin\Validation\Constraint`, and will extend `Symfony\Component\Validator\ConstraintValidator`. In this class, the submitted values will be returned, and any violations will be registered.

Please note, that the name of your validator class is expected to be `${ConstraintClassName}Validator` by default. If you want to use a different name, you may overwrite the [validatedBy()](https://api.drupal.org/api/drupal/vendor%21symfony%21validator%21Constraint.php/function/Constraint%3A%3AvalidatedBy/8.3.x) method of the Constraint class you created in step 1.

```php
<?php

namespace Drupal\[MODULENAME]\Plugin\Validation\Constraint;

use Symfony\Component\Validator\Constraint;
use Symfony\Component\Validator\ConstraintValidator;

/**
 * Validates the UniqueInteger constraint.
 */
class UniqueIntegerConstraintValidator extends ConstraintValidator {

  /**
   * {@inheritdoc}
   */
  public function validate($value, Constraint $constraint) {
    foreach ($value as $item) {
      // First check if the value is an integer.
      if (!is_int($item->value)) {
        // The value is not an integer, so a violation, aka error, is applied.
        // The type of violation applied comes from the constraint description
        // in step 1.
        $this->context->addViolation($constraint->notInteger, ['%value' => $item->value]);
      }

      // Next check if the value is unique.
      if (!$this->isUnique($item->value)) {
        $this->context->addViolation($constraint->notUnique, ['%value' => $item->value]);
      }
    }
  }

  /**
   * Is unique?
   *
   * @param string $value
   */
  private function isUnique($value) {
    // Here is where the check for a unique value would happen.
  }

}
```