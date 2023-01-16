---
url: >-
  https://www.drupal.org/docs/drupal-apis/entity-api/entity-validation-api/defining-constraints-validations-on-entities-andor-fields
description: >-
  Creating a custom constraint requires three steps: Define the constraint
  Create the validation for the constraint Set the constraint to the entity type
  or field it needs to validate Step 1: Define the Constraint The constraint
  definition will go in the namespace
  Drupal\[MODULENAME]\Plugin\Validation\Constraint, and will extend
  Symfony\Component\Validator\Constraint. In this class, the types of constraint
  violations are defined, along with the error messages that will be displayed
  for the given violations.
published_time: '2013-06-09T19:24:24+00:00'
modified_time: '2022-11-14T16:57:49+00:00'
---
Creating a custom constraint requires three steps:

1. Define the constraint
2. Create the validation for the constraint
3. Set the constraint to the entity type or field it needs to validate