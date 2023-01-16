If you need to show different error messages for singular and plural of a value, first adjust the error message of your constraint so that it uses a pipe between the singular and the plural form (syntax: `<singular>|<plural>`): `'%field_name must have at least %count value.|%field_name must have at least %count values.'`. Then, in your constraint validator, use the following code to add your violation:

```php
if (count($value) < $constraint->count) {
  $this->context->buildViolation($constraint->errorMessage)
    ->setParameter('%field_name', $value->getFieldDefinition()->label())
    ->setParameter('%count', $constraint->count)
    // We will set the value, that is used to determine, if the error message should be shown
    // in singular or plural form using ConstraintViolationBuilderInterface::setPlural().
    ->setPlural((int) $constraint->count)
    ->addViolation();
}
```