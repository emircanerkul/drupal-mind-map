To have a new revision created every time the entity is saved, you can use the method `$entity->setNewRevision();` on `save` method of the Entity's form.

Example:

```php
File: foo_module/src/Form/FooForm.php

 /**
   * {@inheritdoc}
   */
  public function save(array $form, FormStateInterface $form_state) {
    $entity = $this->entity;

    // Set new Revision.
    $entity->setNewRevision();

...

```