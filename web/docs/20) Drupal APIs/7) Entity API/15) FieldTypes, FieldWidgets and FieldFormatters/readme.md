---
url: >-
  https://www.drupal.org/docs/drupal-apis/entity-api/fieldtypes-fieldwidgets-and-fieldformatters
description: >-
  Overview Drupal 8 ships with a big library of base classes which allow you to
  work with your very own content. When it comes to content entities you want to
  use Fields. It is important to understand Fields as that is where your
  entities store their data. FieldTypes Core field types: Machine name Label
  Description boolean Boolean An entity field containing a boolean value.
  changed Last changed An entity field containing a UNIX timestamp of when the
  entity has been last updated. comment Comments This field manages
  configuration and presentation of comments on an entity.
published_time: '2014-07-14T10:44:09+00:00'
modified_time: '2021-11-21T22:03:41+00:00'
---
### Overview

Drupal 8 ships with a big library of base classes which allow you to work with your very own content. When it comes to content entities you want to use Fields. It is important to understand Fields as that is where your entities store their data.

### FieldTypes

#### Core field types:

| Machine name                                                                                                                                           | Label                                | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| [boolean](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Field%21Plugin%21Field%21FieldType%21BooleanItem.php/8.3.x)                   | Boolean                              | An entity field containing a boolean value.                                                                                                      |
| [changed](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Field%21Plugin%21Field%21FieldType%21ChangedItem.php/8.3.x)                   | Last changed                         | An entity field containing a UNIX timestamp of when the entity has been last updated.                                                            |
| [comment](https://api.drupal.org/api/drupal/core%21modules%21comment%21src%21Plugin%21Field%21FieldType%21CommentItem.php/8.3.x)                       | Comments                             | This field manages configuration and presentation of comments on an entity.                                                                      |
| [created](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Field%21Plugin%21Field%21FieldType%21CreatedItem.php/8.3.x)                   | Created                              | An entity field containing a UNIX timestamp of when the entity has been created.                                                                 |
| [datetime](https://api.drupal.org/api/drupal/core%21modules%21datetime%21src%21Plugin%21Field%21FieldType%21DateTimeItem.php/8.3.x)                    | Date                                 | Create and store date values.                                                                                                                    |
| [daterange](https://api.drupal.org/api/drupal/core%21modules%21datetime%5Frange%21src%21Plugin%21Field%21FieldType%21DateRangeItem.php/8.2.x)          | Date range                           | Create and store date ranges.                                                                                                                    |
| [decimal](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Field%21Plugin%21Field%21FieldType%21DecimalItem.php/8.3.x)                   | Number (decimal)                     | This field stores a number in the database in a fixed decimal format.                                                                            |
| [email](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Field%21Plugin%21Field%21FieldType%21EmailItem.php/8.3.x)                       | Email                                | An entity field containing an email value.                                                                                                       |
| [entity\_reference](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Field%21Plugin%21Field%21FieldType%21EntityReferenceItem.php/8.3.x) | Entity reference                     | An entity field containing an entity reference.                                                                                                  |
| [file](https://api.drupal.org/api/drupal/core%21modules%21file%21src%21Plugin%21Field%21FieldType%21FileItem.php/8.3.x)                                | File                                 | This field stores the ID of a file as an integer value.                                                                                          |
| [float](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Field%21Plugin%21Field%21FieldType%21FloatItem.php/8.3.x)                       | Number (float)                       | This field stores a number in the database in a floating point format.                                                                           |
| [image](https://api.drupal.org/api/drupal/core%21modules%21image%21src%21Plugin%21Field%21FieldType%21ImageItem.php/8.3.x)                             | Image                                | This field stores the ID of an image file as an integer value.                                                                                   |
| [integer](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Field%21Plugin%21Field%21FieldType%21IntegerItem.php/8.3.x)                   | Number                               | This field stores a number in the database as an integer.                                                                                        |
| [language](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Field%21Plugin%21Field%21FieldType%21LanguageItem.php/8.3.x)                 | Language                             | An entity field referencing a language.                                                                                                          |
| [link](https://api.drupal.org/api/drupal/core%21modules%21link%21src%21Plugin%21Field%21FieldType%21LinkItem.php/8.3.x)                                | Link                                 | Stores a URL string, optional varchar link text, and optional blob of attributes to assemble a link.                                             |
| [list\_float](https://api.drupal.org/api/drupal/core%21modules%21options%21src%21Plugin%21Field%21FieldType%21ListFloatItem.php/8.3.x)                 | List (float)                         | This field stores float values from a list of allowed 'value => label' pairs, i.e. 'Fraction': 0 => 0, .25 => 1/4, .75 => 3/4, 1 => 1.           |
| [list\_integer](https://api.drupal.org/api/drupal/core%21modules%21options%21src%21Plugin%21Field%21FieldType%21ListIntegerItem.php/8.3.x)             | List (integer)                       | This field stores integer values from a list of allowed 'value => label' pairs, i.e. 'Lifetime in days': 1 => 1 day, 7 => 1 week, 31 => 1 month. |
| [list\_string](https://api.drupal.org/api/drupal/core%21modules%21options%21src%21Plugin%21Field%21FieldType%21ListStringItem.php/8.3.x)               | List (text)                          | This field stores text values from a list of allowed 'value => label' pairs, i.e. 'US States': IL => Illinois, IA => Iowa, IN => Indiana.        |
| [file](https://api.drupal.org/api/drupal/core%21modules%21file%21src%21Plugin%21Field%21FieldType%21FileItem.php/class/FileItem/8.2.x)                 | File                                 | This field stores the ID of a file as an integer value.                                                                                          |
| [map](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Field%21Plugin%21Field%21FieldType%21MapItem.php/8.3.x)                           | Map                                  | An entity field for storing a serialized array of values.                                                                                        |
| [password](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Field%21Plugin%21Field%21FieldType%21PasswordItem.php/8.3.x)                 | Password                             | An entity field containing a password value.                                                                                                     |
| [path](https://api.drupal.org/api/drupal/core%21modules%21path%21src%21Plugin%21Field%21FieldType%21PathItem.php/8.3.x)                                | Path                                 | An entity field containing a path alias and related data.                                                                                        |
| [string](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Field%21Plugin%21Field%21FieldType%21StringItem.php/8.3.x)                     | Text (plain)                         | A field containing a plain string value.                                                                                                         |
| [string\_long](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Field%21Plugin%21Field%21FieldType%21StringLongItem.php/8.3.x)           | Text (plain, long)                   | A field containing a long string value.                                                                                                          |
| [telephone](https://api.drupal.org/api/drupal/core%21modules%21telephone%21src%21Plugin%21Field%21FieldType%21TelephoneItem.php/8.3.x)                 | Telephone number                     | This field stores a telephone number in the database.                                                                                            |
| [text](https://api.drupal.org/api/drupal/core%21modules%21text%21src%21Plugin%21Field%21FieldType%21TextItem.php/8.3.x)                                | Text (formatted)                     | This field stores a text with a text format.                                                                                                     |
| [text\_long](https://api.drupal.org/api/drupal/core%21modules%21text%21src%21Plugin%21Field%21FieldType%21TextLongItem.php/8.3.x)                      | Text (formatted, long)               | This field stores a long text with a text format.                                                                                                |
| [text\_with\_summary](https://api.drupal.org/api/drupal/core%21modules%21text%21src%21Plugin%21Field%21FieldType%21TextWithSummaryItem.php/8.3.x)      | Text (formatted, long, with summary) | This field stores long text with a format and an optional summary.                                                                               |
| [timestamp](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Field%21Plugin%21Field%21FieldType%21TimestampItem.php/8.3.x)               | Timestamp                            | An entity field containing a UNIX timestamp value.                                                                                               |
| [uri](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Field%21Plugin%21Field%21FieldType%21UriItem.php/8.3.x)                           | URI                                  | An entity field containing a URI.                                                                                                                |
| [uuid](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Field%21Plugin%21Field%21FieldType%21UuidItem.php/8.3.x)                         | UUID                                 | An entity field containing a UUID.                                                                                                               |

#### Core field formatter types

* aggregator\_title
* aggregator\_xss
* author
* basic\_string
* boolean
* comment\_default
* comment\_permalink
* comment\_username
* content\_moderation\_state
* daterange\_custom
* daterange\_default
* daterange\_plain
* datetime\_custom
* datetime\_default
* datetime\_plain
* datetime\_time\_ago
* dummy\_image\_formatter
* email\_mailto
* entity\_reference\_custom\_cache\_tag
* entity\_reference\_entity\_id
* entity\_reference\_entity\_view
* entity\_reference\_label
* entity\_reference\_rss\_category
* field\_empty\_setting
* field\_empty\_test
* field\_formatter\_settings\_defaults
* field\_no\_settings
* field\_plugins\_test\_text\_formatter
* field\_test\_applicable
* field\_test\_default
* field\_test\_multiple
* field\_test\_with\_prepare\_view
* file\_audio
* file\_default
* file\_extension
* file\_filemime
* file\_link
* file\_rss\_enclosure
* file\_size
* file\_table
* file\_uri
* file\_url\_plain
* file\_video
* image
* image\_module\_test\_dummy\_ajax\_formatter
* image\_url
* language
* link
* link\_separate
* list\_default
* list\_key
* media\_thumbnail
* number\_decimal
* number\_integer
* number\_unformatted
* number\_unformatted\_with\_attachment
* oembed
* responsive\_image
* responsive\_image\_test
* string
* telephone\_link
* text\_default
* text\_summary\_or\_trimmed
* text\_trimmed
* timestamp
* timestamp\_ago
* uri\_link
* user\_name

#### Core field widget types:

* boolean\_checkbox
* comment\_default
* daterange\_datelist
* daterange\_default
* datetime\_datelist
* datetime\_default
* datetime\_timestamp
* email\_default
* entity\_reference\_autocomplete
* entity\_reference\_autocomplete\_tags
* field\_plugins\_test\_text\_widget
* file\_generic
* image\_image
* image\_module\_test\_dummy\_ajax\_widget
* language\_select
* layout\_builder\_widget
* link\_default
* media\_library\_inception\_widget
* media\_library\_widget
* moderation\_state\_default
* number
* oembed\_textfield
* options\_buttons
* options\_select
* path
* shape\_only\_color\_editable\_widget
* string\_textarea
* string\_textfield
* telephone\_default
* test\_field\_widget
* test\_field\_widget\_multilingual
* test\_field\_widget\_multiple
* test\_field\_widget\_multiple\_single\_value
* text\_textarea
* text\_textarea\_with\_summary
* text\_textfield
* uri

#### Custom field types

Whenever you want to represent data in a way Drupal doesn't provide; you might want to create a new field type for your data.

Let's say you have a content entity which holds sensitive data. The creator of this content can allow specific users to access the entity via a password which differs for every user. If we talk in database tables you want to create something like this:

```php
| entity_id | uid | password      |
-----------------------------------
| 1         | 1   | 'helloworld'  |
| 1         | 2   | 'goodbye'     |
```

As you can see our entity with the id 1 has two different passwords for two different users. So how can we implement it in Drupal without having to create the table all by hand? We create a new field type.

Because Drupal implements the field logic as Plugin, we always have a base class that we can inherit from to make it work in Drupal. For a new field type you want to create the following folder structure in your module:  
`modules/custom/MODULENAME/src/Plugin/Field/FieldType`  
It is quite a long path and a little bit annoying but it makes it easier for Drupal to handle all the different functions that can coexist in your modules.

For our example, we create the file **EntityUserAccessField.php**

```php
namespace Drupal\MODULENAME\Plugin\Field\FieldType;
     
use Drupal\Core\Field\FieldItemBase;
use Drupal\Core\Field\FieldStorageDefinitionInterface;
use Drupal\Core\TypedData\DataDefinition;
     
/**
 * @FieldType(
 *   id = "entity_user_access",
 *   label = @Translation("Entity User Access"),
 *   description = @Translation("This field stores a reference to a user and a password for this user on the entity."),
 * )
*/
     
class EntityUserAccessField extends FieldItemBase {
  /**
   * {@inheritdoc}
   */
  public static function propertyDefinitions(FieldStorageDefinitionInterface $field_definition) {
    //ToDo: Implement this.
  }
     
  /**
   * {@inheritdoc}
   */
  public static function schema(FieldStorageDefinitionInterface $field_definition) {
    //ToDo: Implement this.
  }
}

```

As you can see a field type looks very similar to a content entity. Actually, there is no real difference between those two but this is a topic for another node ;)

First of all, we have an Annotation for our field type

* @FieldType: This calls the Annotation class FieldType from the Drupal library
* id: This is the machine name of our field type so we can reuse it. Be sure not to override any predefined names from php and such.
* label: This can be a user readable translation for the machine name.
* description: If the label is not enough you can also add a description for the field type.

Second, our class extends FieldItemBase which makes us implement two methods so we can use this field type properly:

* propertyDefinitions(): This method is similar to a baseFieldDefinition of a content entity (it is not the same!). We can define data which appears on entity forms where this field type is being used.
* schema(): On entities, this method is deprecated but we still have it on fields. This method should implement the data representation of the field in a database. It can differ from the properties.

Because it is not that obvious what to write down on these methods let us add some code to them for the convenience.

```php
public static function propertyDefinitions(FieldStorageDefinitionInterface $field_definition) {
  $properties['uid'] = DataDefinition::create('integer')
      ->setLabel(t('User ID Reference'))
      ->setDescription(t('The ID of the referenced user.'))
      ->setSetting('unsigned', TRUE);

  $properties['password'] = DataDefinition::create('string')
      ->setLabel(t('Password'))
      ->setDescription(t('A password saved in plain text. That is not safe dude!'));

  $properties['created'] = DataDefinition::create('timestamp')
    ->setLabel(t('Created Time'))
    ->setDescription(t('The time that the entry was created'));

    // ToDo: Add more Properties.
 
    return $properties;
}

```

It is also possible to save the user id via a DataReferenceDefinition this might be covered here in the future.

```php
public static function schema(FieldStorageDefinitionInterface $field_definition) {
  $columns = array(
    'uid' => array(
      'description' => 'The ID of the referenced user.',
      'type' => 'int',
      'unsigned' => TRUE,
    ),
    'password' => array(
      'description' => 'A plain text password.',
      'type' => 'varchar',
      'length' => 255,
    ),
    'created' => array(
      'description' => 'A timestamp of when this entry has been created.',
      'type' => 'int',
    ),

    // ToDo: Add more columns.
  );
 
  $schema = array(
    'columns' => $columns,
    'indexes' => array(),
    'foreign keys' => array(),
  );

  return $schema;
}

```

The schema() is necessary to make Drupal know about how to save our data. The schema columns need to be a subset of the properties defined in propertyDefinitions().

We now have a whole new field type created. It does not have any logic on it how to handle any data input but it can be used on any content entity as a field. If you want you can use it as a baseField on an entity:

```php
public static function baseFieldDefinitions(EntityTypeInterface $entity_type) {
  // Some fields above.
 
  $fields['entity_user_access'] = BaseFieldDefinition::create('entity_user_access')
    ->setLabel(t('Entity User Access'))
    ->setDescription(t('Specify passwords for any user that want to see this entity.'))
    ->setCardinality(-1); // Ensures that you can have more than just one member
 
  // Even more fields below.
 
  return $fields;
}

```

* BaseFieldDefinition::create(): You have to use the machine name of the field type in the create()
* setCardinality(-1): The cardinality represents the amount of field data one entity can have. E.g. if we write a 2 in it only two users could access the entity, 3 would be 3 users and so on. -1 represents infinite users.

### FieldWidget

If you have custom data, then you might want custom representation of this data. Widgets are used to represent how the user can input this custom data on forms. E.g

* if an integer has to be submitted in the form but the user can only check a checkbox
* if you want autocompletion for your data
* if password input has to be done via a special gui

etc.

A field widget in Drupal can be found under  
`modules/custom/MODULENAME/src/Plugin/Field/FieldWidget`  
which is a very long path too. At this point, it should be clear why Drupal uses this style to separate .php files. It is very easy to overlook which files belong where.

We create a field widget in **EntityUserAccessWidget.php**

```php
namespace Drupal\MODULENAME\Plugin\Field\FieldWidget;
 
use Drupal\Core\Field\FieldItemListInterface;
use Drupal\Core\Field\WidgetBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Render\Element;
 
/**
 * Plugin implementation of the 'entity_user_access_w' widget.
 *
 * @FieldWidget(
 *   id = "entity_user_access_w",
 *   label = @Translation("Entity User Access - Widget"),
 *   description = @Translation("Entity User Access - Widget"),
 *   field_types = {
 *     "entity_user_access",
 *   },
 *   multiple_values = TRUE,
 * )
 */
 
class EntityUserAccessWidget extends WidgetBase {
  /**
   * {@inheritdoc}
   */
  public function formElement(FieldItemListInterface $items, $delta, array $element, array &$form, FormStateInterface $form_state) {
    // ToDo: Implement this.
  }
}

```

Did you notice already? Drupal 8 uses this style of code over and over again if you want to implement features. There is an annotation and a base class you have to inherit. Yay, Drupal can use it!

* @FieldWidget: Specifies the annotation class
* id: The machine name of the widget
* field\_types: An array of field type machine names which can use this widget
* multiple\_values: Default is FALSE. If it's true this will allow you to submit more than one value on an entity form

If you now want to use this widget with your field type you have to edit the annotation of the field type like this

```php
// ...

/**
 * @FieldType(
 *   id = "entity_user_access",
 *   label = @Translation("Entity User Access"),
 *   description = @Translation("This field stores a reference to a user and a password for this user on the entity."),
 *   default_widget = "entity_user_access_w",
 * )
 */
     
// ...

```

Yeah all done! No, wait nothing happens yet because we have to implement the formElement() in our widget.

```php
public function formElement(FieldItemListInterface $items, $delta, array $element, array &$form, FormStateInterface $form_state) {
    $element['userlist'] = array(
      '#type' => 'select',
      '#title' => t('User'),
      '#description' => t('Select group members from the list.'),
      '#options' => array(
         0 => t('Anonymous'),
         1 => t('Admin'),
         2 => t('foobar'),
         // This should be implemented in a better way!
       ),
  
    );
  
    $element['passwordlist'] = array(
      '#type' => 'password',
      '#title' => t('Password'),
      '#description' => t('Select a password for the user'),
    );

    //setting default value to all fields from above
    $childs = Element::children($element);
    foreach ($childs as $child) {
        $element[$child]['#default_value'] = isset($items[$delta]->{$child}) ? $items[$delta]->{$child} : NULL;
    }
   
    return $element;
}
```

If you now open a form with this widget then you will see at least two input fields. One is a select for the user and the other is a password field. If you want to implement how the data is being saved then you have to implement validation methods on this widget or on the entity form. See [Drupal 8 Form API](https://api.drupal.org/api/drupal/developer!topics!forms%5Fapi%5Freference.html/8) for more info.

By now you have done a most of the work regarding a custom field. If you don't understand what is going on then just try out the code or have a look at the core modules for deeper knowledge on the topic.

### FieldFormatters

The last thing that is missing is the representation of the data in the so called view mode of an entity - by the way the widget is the form mode. This is most common if you call an entity via yourdrupalpage.com/myentity/1/view

As there is not so much to talk about here we will come directly to the code. Under `modules/custom/MODULENAME/src/Plugin/Field/FieldFormatter` create **EntityUserAccessFormatter.php**

```php
namespace Drupal\MODULENAME\Plugin\Field\FieldFormatter;
     
use Drupal\Core\Field\FieldItemListInterface;
use Drupal\Core\Field\FormatterBase;
     
/**
 * Plugin implementation of the 'entity_user_access_f' formatter.
 *
 * @FieldFormatter(
 *   id = "entity_user_access_f",
 *   label = @Translation("Entity User Access - Formatter"),
 *   description = @Translation("Entity User Access - Formatter"),
 *   field_types = {
 *     "entity_user_access",
 *   }
 * )
 */
     
class EntityUserAccessFormatter extends FormatterBase {
  /**
   * {@inheritdoc}
   */
  public function viewElements(FieldItemListInterface $items, $langcode) {
    $elements = array();
     
    foreach ($items as $delta => $item) {
      $elements[$delta] = array(
        'uid' => array(
          '#markup' => \Drupal\user\Entity\User::load($item->uid)->getUsername(),
          ),
        // Add more content
      );
    }
     
    return $elements;
  }
}


```

This example has a very similar annotation as the widget so we do not need to talk about it that much. The viewElements() just shows the username of the saved user id of our field type. The access implementation has to be done in the entity. So this implementation will show all the user names which have a password on the entity.