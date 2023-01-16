Before you make your entity fields revisionable, make sure that you are inheriting `baseFieldDefinitions` from the parent classes, `ContentEntityBase` or `RevisionableContentEntityBase`.

```php
  /**
   * {@inheritdoc}
   */
  public static function baseFieldDefinitions(EntityTypeInterface $entity_type) {
    $fields = parent::baseFieldDefinitions($entity_type);

...

```

To make the fields of your Entity revisionable, use the method `setRevisionable(TRUE)`.

Example:

```php
File: foo_module/src/Entity/Foo.php

 /**
   * {@inheritdoc}
   */
  public static function baseFieldDefinitions(EntityTypeInterface $entity_type) {
    $fields = parent::baseFieldDefinitions($entity_type);

    $fields['created'] = BaseFieldDefinition::create('created')
      ->setLabel(t('Created'))
      ->setRevisionable(TRUE)
      ->setDescription(t('The time that the entity was created.'));

...

```