---
url: https://www.drupal.org/docs/drupal-apis/entity-api/entity-translation-api
description: >-
  In Drupal 8 field language is no longer exposed in the public API, instead
  fields are attached to language-aware entity objects from which they "inherit"
  their language. The major advantages here are: We do not need to worry about
  field translatability, as this is taken care of by the entity object
  internally. // Determine the $active_langcode somehow.
published_time: '2013-07-12T13:10:49+00:00'
modified_time: '2022-02-27T15:54:56+00:00'
---
In Drupal 8 field language is no longer exposed in the [public API](https://drupal.org/node/1806650), instead fields are attached to language-aware entity objects from which they "inherit" their language.

The major advantages here are:

* We do not need to worry about field _translatability_, as this is taken care of by the entity object internally.  
```php  
// Determine the $active_langcode somehow.  
$translation = $entity->getTranslation($active_langcode);  
$value = $translation->field_foo->value;  
      
```
* We no longer need to pass around the active language, in fact we can just pass around the translation object, which implements `EntityInterface` and is actually a clone of the original object, just with a different internal language. This means in many cases the resulting code can be language-unaware (of course if it is not explicitly dealing with language).  
```php  
// Instantiate the proper translation object just once and pass it around  
// wherever it is needed. This is typically taken care of by core  
// subsystems and in many common cases an explicit retrieval of the  
// translation object is not needed.  
$langcode = Drupal::languageManager()->getLanguage(Language::TYPE_CONTENT);  
$translation = $entity->getTranslation($langcode);  
entity_do_stuff($translation);  
function entity_do_stuff(EntityInterface $entity) {  
  $value = $entity->field_foo->value;  
  // do stuff  
}  
      
```
* We have now a reusable entity language negotiation API, that can be used to determine the entity translation that is most appropriate for a certain context:  
```php  
// Simplified code to generate a renderable array for an entity.  
function viewEntity(EntityInterface $entity, $view_mode = 'full', $langcode = NULL) {  
  // The EntityRepositoryInterface::getTranslationFromContext() method will  
  // apply entity language negotiation logic to the whole entity object  
  // and will return the proper translation object for the given context.  
  // The $langcode parameter is optional and indicates the language of the  
  // current context. If it is not specified the current content language  
  // is used, which is the desired behavior during the rendering phase.  
  // Note that field values are left alone in the process, so empty values  
  // will just not be displayed.  
  $langcode = NULL;  
  $translation = $this->entityRepository->getTranslationFromContext($entity, $langcode);  
  $build = entity_do_stuff($translation, 'full');  
  return $build;  
}  
      
```  
We can also specify an optional `$context` parameter, which can be used to describe the context where the translation object will be used:  
```php  
// Simplified token replacements generation code.  
function node_tokens($type, $tokens, array $data = array(), array $options = array()) {  
  $replacements = array();  
  // If no language is specified for this context we just default to the  
  // default entity language.  
  if (!isset($options['langcode'])) {  
    $langcode = Language::LANGCODE_DEFAULT;  
  }  
  // We pass a $context parameter describing the operation being performed.  
  // The default operation is 'entity_view'.  
  $context = array('operation' => 'node_tokens');  
  $translation = \Drupal::service('entity.repository')->getTranslationFromContext($data['node'], $langcode, $context);  
  $items = $translation->get('body');  
  // do stuff  
  return $replacements;  
}  
      
```  
The logic used to determine the translation object to be returned is alterable by modules. See [LanguageManager::getFallbackCandidates()](https://api.drupal.org/api/drupal/core!lib!Drupal!Core!Language!LanguageManager.php/function/LanguageManager%3A%3AgetFallbackCandidates/8) for more details.

The actual field data is shared among all the translation objects and changing the value of an untranslatable field automatically changes it for all the translation objects.

```php
  $entity->langcode->value = 'en';
  $translation = $entity->getTranslation('it');
  
  $en_value = $entity->field_foo->value; // $en_value is 'bar'
  $it_value = $translation->field_foo->value; // $it_value is 'bella'

  $entity->field_untranslatable->value = 'baz';
  $translation->field_untranslatable->value = 'zio';
  $value = $entity->field_untranslatable->value; // $value is 'zio'

```

In any moment a translation object can be instantiated from the original object or another translation object through the `EntityInterface::getTranslation()` method. If the active language is explicitly needed, it can be retrieved through `EntityInterface::language()`. The original entity can be retrieved through `EntityInterface::getUntranslated()`.

```php
  $entity->langcode->value = 'en';

  $translation = $entity->getTranslation('it');
  $langcode = $translation->language()->getId(); // $langcode is 'it';

  $untranslated_entity = $translation->getUntranslated();
  $langcode = $untranslated_entity->language()->getId(); // $langcode is 'en';

  $identical = $entity === $untranslated_entity; // $identical is TRUE

  $entity_langcode = $translation->getUntranslated()->language()->getId(); // $entity_langcode is 'en'

```

`EntityInterface` has now several methods that make easier to deal with entity translations. If a piece of code needs to act on every available translation, it can exploit `EntityInterface::getTranslationLanguages()`:

```php
  foreach ($entity->getTranslationLanguages() as $langcode => $language) {
    $translation = $entity->getTranslation($langcode);
    entity_do_stuff($translation);
  }

```

There are also methods to add a translation, remove it or check for its existence:

```php
  if (!$entity->hasTranslation('fr')) {
    $translation = $entity->addTranslation('fr', array('field_foo' => 'bag'))->save();
  }

  // Which is equivalent to the following code, although if an invalid language
  // code is specified an exception is thrown.
  $translation = $entity->getTranslation('fr');
  $translation->field_foo->value = 'bag';

  // Accessing a field on a removed translation object causes an exception to
  // be thrown.
  $translation = $entity->getTranslation('it');
  $entity->removeTranslation('it');
  $value = $translation->field_foo->value; // throws InvalidArgumentException

```

When entity translations are added to or removed from the _storage_ the following hooks are fired respectively:

* `hook_entity_translation_insert()`
* `hook_entity_translation_delete()`

Field language can still be retrieved by calling the proper method on the field object itself:

```php
  $langcode = $translation->field_foo->getLangcode();

```