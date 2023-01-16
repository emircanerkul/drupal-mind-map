Drupal has an API for defining a _service collector_, which is a special type of service that collects other services by tag (these are called the _collected services_). The way service collectors work is that you define the service collector and one or more collected services (define their classes and the \*.services.yml definition). When the collector service is used, Drupal will instantiate it (as it does for any other service, using dependency injection), and then locate the collected services, instantiate them, and pass their instances to a method on the collector service class for processing.

One example is the `string_translation` service, whose services.yml definition is:

```php
# core.services.yml:
string_translation:
  class: Drupal\Core\StringTranslation\TranslationManager
  arguments: ['@language.default']
  tags:
    - { name: service_collector, tag: string_translator, call: addTranslator }

```

As you can see in this example, the service definition has a tag whose name is `service_collector`, which is how to tell Drupal that a service is a service collector. The `tag` attribute on the tag definition tells what tag name the collected services need to be tagged with in order to be collected; this can be omitted to use the collecting service's ID as the tag name.

The `call` attribute on the tag tells Drupal that the `TranslationManager::addTranslator()` method should be called once for each collected service that is located. Here's the method code:

```php
// \Drupal\Core\StringTranslation\TranslationManager:
public function addTranslator(TranslatorInterface $translator, $priority = 0) {
  $this->translators[$priority][] = $translator;
  // Reset sorted translators property to trigger rebuild.
  $this->sortedTranslators = NULL;
  return $this;
}

```

The collecting method receives the collected service as its first parameter. In addition, if the collecting service's method signature contains parameters named `id` (the collected service's ID) or `priority` (the collected service's configured priority), the Drupal class that actually does the collecting work (TaggedHandlersPass) will be sure that these attributes will be taken from the collected service's service definition and passed into the method.

Here's an example of a service that will be collected by the previously-shown `string_translation` service:

```php
# core.services.yml:
string_translator.custom_strings:
  class: Drupal\Core\StringTranslation\Translator\CustomStrings
  arguments: ['@settings']
  tags:
    - { name: string_translator, priority: 30 }

```

As you can see, this service is tagged `string_translator`, which is what causes it to be collected into the `string_translation` service. Also, since the tag has a `priority` attribute, this value (30) and an instance of the `CustomStrings` class will be passed into `TranslationManager::addTranslator()` when services are collected. A higher priority service will be used before a lower priority one. Many core services use a priority of 0, but some core modules use higher priorities.