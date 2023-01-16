---
url: >-
  https://www.drupal.org/docs/creating-custom-modules/creating-custom-field-types-widgets-and-formatters/overview-creating-a-custom-field
description: >-
  This tutorial was originally published on Web Wash. However, Berdir asked if I
  could put the tutorial here, so here it is. The module in Drupal 7 allows you
  to store code examples/snippets in a field. It ships with a custom field
  called "Snippets field" and it renders three form elements, description,
  source code and syntax highlighting mode (what programming language). But now
  it's time to upgrade the module to Drupal 8. In this tutorial, I'll show you
  how I created a "basic" custom field in Drupal 8. I won't go into detail about
  PSR–4, annotations or plugins or this tutorial will be huge.
published_time: '2013-11-06T11:30:35+00:00'
modified_time: '2022-06-19T13:28:24+00:00'
---
> This tutorial was originally published on [Web Wash](http://webwash.net/node/205). However, [Berdir](https://drupal.org/user/214652) asked if I could put the tutorial here, so here it is.

The module in Drupal 7 allows you to store code examples/snippets in a field. It ships with a custom field called "Snippets field" and it renders three form elements, description, source code and syntax highlighting mode (what programming language).

But now it's time to upgrade the module to Drupal 8.

In this tutorial, I'll show you how I created a "basic" custom field in Drupal 8\. I won't go into detail about [PSR–4](https://drupal.org/node/1971198), [annotations](https://drupal.org/node/1882526) or [plugins](https://drupal.org/node/2087839) or this tutorial will be huge.

Instead, I'll add links to other websites that explain the concept further.

That being said, if you're looking for detailed documentation on the Field API in Drupal 8, check out the following series:

* [Drupal 8 Field API series part 1: field formatters](http://realize.be/drupal-8-field-api-series-part-1-field-formatters)
* [Drupal 8 Field API series part 2: field widgets](http://realize.be/drupal-8-field-api-series-part-2-field-widgets)

In Drupal 8, fields are not implemented using hooks like they are in Drupal 7\. Instead, they are created using Drupal 8's new [Plugin API](https://drupal.org/node/2087839). This means that instead of implementing hooks, we define a class for a widget, formatter and field item. Most Drupal 7 field hooks like `hook_field_schema`, `hook_field_is_empty` and more; are now methods in classes.

### Step 1: Implement Field Item

The first bit of work we need to do is define a field item class called `SnippetsItem` that extends the `FieldItemBase` class.

1\. In Drupal 8 classes are loaded using [PSR-4](https://drupal.org/node/1971198).

So, to define the `SnippetsItem` class, we need to create a `SnippetsItem.php` file and place it in `"module"/src/Plugin/Field/FieldType/SnippetsItem.php`

```php
/**
 * @file
 * Contains \Drupal\snippets\Plugin\Field\FieldType\SnippetsItem.
 */

namespace Drupal\snippets\Plugin\Field\FieldType;

use Drupal\Core\Field\FieldItemBase;
use Drupal\Core\Field\FieldStorageDefinitionInterface;
use Drupal\Core\TypedData\DataDefinition;


```

Then in the file we add a namespace `Drupal\snippets\Plugin\Field\FieldType` and three _use_ statements:

* `Drupal\Core\Field\FieldItemBase`.
* `Drupal\Core\Field\FieldStorageDefinitionInterface` .
* `Drupal\Core\TypedData\DataDefinition`.

2\. Now we need to define the actual field details like the field id, label, default widget and formatter etc.. This is equivalent of implementing `hook_field_info` in Drupal 7.

In Drupal 8 a lot, if not all, of the info hooks have been replaced by [annotations](https://drupal.org/node/1882526).

```php
/**
 * Plugin implementation of the 'snippets' field type.
 *
 * @FieldType(
 *   id = "snippets_code",
 *   label = @Translation("Snippets field"),
 *   description = @Translation("This field stores code snippets in the database."),
 *   default_widget = "snippets_default",
 *   default_formatter = "snippets_default"
 * )
 */
class SnippetsItem extends FieldItemBase { }

```

So instead of implementing `hook_field_info`, we define the field as an annotation inside of a comment above the class.

The annotation attributes are quite self-explanatory. Just make sure that the `default_widget` and `default_formatter` reference the widget and formatter annotation ID and not the class.

> If you want to learn more about annotations, check out the [Annotations-based plugins](https://drupal.org/node/1882526) documentation page on drupal.org.

3\. Now that we have our field item class, we need to define a few methods. The first one we'll look at is `schema()`.

In Drupal 7, when you create a custom field you define its schema using `hook_field_schema`. In Drupal 8, we define the schema by adding a `schema()` method to the `SnippetsItem` class.

> The [Schema API documentation](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Database%21database.api.php/group/schemaapi/latest) provides a description of schema array structure and possible values. 

```php
/**
 * {@inheritdoc}
 */
public static function schema(FieldStorageDefinitionInterface $field) {
  return array(
    'columns' => array(
      'source_description' => array(
        'type' => 'varchar',
        'length' => 256,
        'not null' => FALSE,
      ),
      'source_code' => array(
        'type' => 'text',
        'size' => 'big',
        'not null' => FALSE,
      ),
      'source_lang' => array(
        'type' => 'varchar',
        'length' => 256,
        'not null' => FALSE,
      ),
    ),
  );
}

```

4\. Now we need to add the `isEmpty()` method and define what constitutes an empty field item. This method is the same as implementing `hook_field_is_empty` in Drupal 7.

```php
/**
 * {@inheritdoc}
 */
public function isEmpty() {
  $value = $this->get('source_code')->getValue();
  return $value === NULL || $value === '';
}

```

5\. The final method we'll add to the class is the `propertyDefinitions()` method.

```php
/**
 * {@inheritdoc}
 */
public static function propertyDefinitions(FieldStorageDefinitionInterface $field_definition) {
    $properties['source_description'] = DataDefinition::create('string')
      ->setLabel(t('Snippet description'));

    $properties['source_code'] = DataDefinition::create('string')
      ->setLabel(t('Snippet code'));

    $properties['source_lang'] = DataDefinition::create('string')
      ->setLabel(t('Programming Language'))
      ->setDescription(t('Snippet code language'));

    return $properties;
  }

```

This method is used to define the type of data that exists in the field values. The "Snippets field" has just three values: description, code and language. So I just added those values to the method as strings.

> Go to the [How Entity API implements Typed Data API](https://drupal.org/node/1795854) documentation on drupal.org to learn more about this.

_[Click here](http://cgit.drupalcode.org/snippets/tree/lib/Drupal/snippets/Plugin/Field/FieldType/SnippetsItem.php?h=8.x-1.x) to see the whole file. Note: it needs to be updated to the PSR-4 specification, see <https://www.drupal.org/node/2128865> for more details._

### Step 2: Implement Field Widget

Now that we've defined the field item, let's create the field widget. We need to create a class called `SnippetsDefaultWidget` that extends the `WidgetBase` class.

1\. So create a `SnippetsDefaultWidget.php` file and add it to `"module"/src/Plugin/Field/FieldWidget/SnippetsDefaultWidget.php`.

```php
/**
 * @file
 * Contains \Drupal\snippets\Plugin\Field\FieldWidget\SnippetsDefaultWidget.
 */

namespace Drupal\snippets\Plugin\Field\FieldWidget;

use Drupal\Core\Field\FieldItemListInterface;
use Drupal\Core\Field\WidgetBase;
use Drupal\Core\Form\FormStateInterface;

```

Make sure the file namespace is `Drupal\snippets\Plugin\Field\FieldWidget` and add the following three _use_ statements:

* `Drupal\Core\Field\FieldItemListInterface`.
* `Drupal\Core\Field\WidgetBase`.
* `Drupal\Core\Form\FormStateInterface`.

2\. Next, we need to define the widget using an annotation. This is the equivalent of using `hook_field_widget_info` in Drupal 7.

```php
/**
 * Plugin implementation of the 'snippets_default' widget.
 *
 * @FieldWidget(
 *   id = "snippets_default",
 *   label = @Translation("Snippets default"),
 *   field_types = {
 *     "snippets_code"
 *   }
 * )
 */
class SnippetsDefaultWidget extends WidgetBase { }

```

Just a heads up, make sure that the `field_types` attribute in the annotation references the field types using their ID. For this module, it is `snippets_code` because we added `id = "snippets_code",` to the `@FieldType` annotation.

3\. And finally, we need to define the actual widget form. We do this by adding a `formElement()` method to the `SnippetsDefaultWidget` class. This method is the same as using `hook_field_widget_form` in Drupal 7.

```php
/**
 * {@inheritdoc}
 */
public function formElement(FieldItemListInterface $items, $delta, array $element, array &$form, FormStateInterface $form_state) {

  $element['source_description'] = array(
        '#title' => $this->t('Description'),
        '#type' => 'textfield',
        '#default_value' => isset($items[$delta]->source_description) ? $items[$delta]->source_description : NULL,
      );
  $element['source_code'] = array(
        '#title' => $this->t('Code'),
        '#type' => 'textarea',
        '#default_value' => isset($items[$delta]->source_code) ? $items[$delta]->source_code : NULL,
      );
  $element['source_lang'] = array(
        '#title' => $this->t('Source language'),
        '#type' => 'textfield',
        '#default_value' => isset($items[$delta]->source_lang) ? $items[$delta]->source_lang : NULL,
      );
  return $element;
}

```

_[Click here](http://drupalcode.org/project/snippets.git/blob/refs/heads/8.x-1.x:/lib/Drupal/snippets/Plugin/Field/FieldWidget/SnippetsDefaultWidget.php) to see the whole file. Note: it needs to be updated to the PSR-4 specification, see <https://www.drupal.org/node/2128865> for more details._

### Step 3: Implement Field Formatter

The final piece to the puzzle, is the field formatter, and we create it by defining a class called `SnippetsDefaultFormatter` that extends the `FormatterBase` class.

1\. Create a `SnippetsDefaultFormatter.php` file and add it to `"module"/src/Plugin/Field/FieldFormatter/SnippetsDefaultFormatter.php`.

```php
/**
 * @file
 * Contains \Drupal\snippets\Plugin\field\formatter\SnippetsDefaultFormatter.
 */

namespace Drupal\snippets\Plugin\Field\FieldFormatter;

use Drupal\Core\Field\FormatterBase;
use Drupal\Core\Field\FieldItemListInterface;

```

Make sure the file namespace is `Drupal\snippets\Plugin\Field\FieldFormatter` and add the following _use_ statements:

* `Drupal\Core\Field\FieldItemListInterface`.
* `Drupal\Core\Field\FormatterBase`.

2\. Next, we need to define the formatter as an annotation. The same as we did for the widget and field type, this is the equivalent of using `hook_field_formatter_info`.

```php
/**
 * Plugin implementation of the 'snippets_default' formatter.
 *
 * @FieldFormatter(
 *   id = "snippets_default",
 *   label = @Translation("Snippets default"),
 *   field_types = {
 *     "snippets_code"
 *   }
 * )
 */
class SnippetsDefaultFormatter extends FormatterBase { }

```

3\. Now the only thing left to do is add the `viewElements()` method and define the actual field formatter. Again, this method is the same as using `hook_field_formatter_view` in Drupal 7.

```php
/**
 * {@inheritdoc}
 */
public function viewElements(FieldItemListInterface $items, $langcode) {
  $elements = array();
  foreach ($items as $delta => $item) {
    // Render output using snippets_default theme.
    $source = array(
      '#theme' => 'snippets_default',
      '#source_description' => $item->source_description,
      '#source_code' => $item->source_code,
    );
    
    $elements[$delta] = array('#markup' => \Drupal::service('renderer')->render($source));
  }

  return $elements;
}

```

One thing to take note of is that I'm using a custom template called `snippets_default` to render the snippets before it is displayed by the formatter.

The reason for this is I didn't want to put a lot of logic or HTML code in the `viewElements()` method.

_[Click here](http://drupalcode.org/project/snippets.git/blob/refs/heads/8.x-1.x:/lib/Drupal/snippets/Plugin/Field/FieldFormatter/SnippetsDefaultFormatter.php) to see the whole file. Note: it needs to be updated to the PSR-4 specification, see <https://www.drupal.org/node/2128865> for more details._

### Conclusion

As stated earlier the biggest change in Drupal 8 is that fields are created using the [Plugin API](https://drupal.org/node/2087839) and not hooks. Once you understand that, the concept of creating a field is very similar to Drupal 7\. A lot of the methods in Drupal 8 match the hooks in Drupal 7.

If you want to test out [Code Snippets](https://drupal.org/project/snippets), download the 8.x-dev release and give it a go.