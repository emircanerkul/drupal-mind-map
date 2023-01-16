---
url: >-
  https://www.drupal.org/docs/drupal-apis/plugin-api/create-your-own-custom-annotation-class
description: >-
  New plugin types should always use a custom annotation class. This allows for
  documentation, and a consistent developer experience. Let's look at an example
  in the wild, the plaintext field formatter which is located at
  text/src/Plugin/field/formatter/TextPlainFormatter.php. It uses its own
  annotation class, FieldFormatter, which extends
  \Drupal\Component\Annotation\Plugin:
published_time: '2019-03-28T21:25:16+00:00'
modified_time: '2021-06-13T12:47:22+00:00'
---
New plugin types should always use a custom annotation class. This allows for documentation, and a consistent developer experience.

Let's look at an example in the wild, the `plaintext` field formatter which is located at `text/src/Plugin/field/formatter/TextPlainFormatter.php`.

It uses its own annotation class, `FieldFormatter`, which extends `\Drupal\Component\Annotation\Plugin`:

```php
<?php

namespace Drupal\Core\Field\Annotation;
use Drupal\Component\Annotation\Plugin;

/**
 * Defines a FieldFormatter annotation object.
 *
 * Additional annotation keys for formatters can be defined in
 * hook_field_formatter_info_alter().
 *
 * @see \Drupal\Core\Field\FormatterPluginManager
 * @see \Drupal\Core\Field\FormatterInterface
 *
 * @ingroup field_formatter
 *
 * @Annotation
 */
class FieldFormatter extends Plugin {

  /**
   * The plugin ID.
   *
   * @var string
   */
  public $id;

  /**
   * The human-readable name of the formatter type.
   *
   * @var \Drupal\Core\Annotation\Translation
   * @ingroup plugin_translatable
   */
  public $label;

  /**
   * A short description of the formatter type.
   *
   * @var \Drupal\Core\Annotation\Translation
   * @ingroup plugin_translatable
   */
  public $description;

  /**
   * The name of the field formatter class.
   *
   * This is not provided manually, it will be added by the discovery mechanism.
   *
   * @var string
   */
  public $class;

  /**
   * An array of field types the formatter supports.
   *
   * @var array
   */
  public $field_types = [];

  /**
   * An integer to determine the weight of this formatter.
   *
   * Optional. This is relative to other formatters in the Field UI
   * when selecting a formatter for a given field instance.
   *
   * @var int
   */
  public $weight = NULL;

}
```

You can see that the `field_types` and `weight` keys have a default value assigned. In the plugins' annotation, using these keys is optional. See the following example of an annotation using our FieldFormatter class, which does provide the `field_types` key, but not the `weight` key.

```php
/**
 * Plugin implementation of the 'text_plain' formatter.
 *
 * @FieldFormatter(
 *   id = "text_plain",
 *   label = @Translation("Plain text"),
 *   field_types = {
 *     "text",
 *     "text_long",
 *     "text_with_summary", 
 *   },
 *   edit = {
 *     "editor" = "direct",
 *   },
 * )
 */
class TextPlainFormatter {

```

Assigning a default value to optional keys allows skipping irrelevant keys, it is particularly important for backwards-compatibility with contributed or custom plugins.