---
url: >-
  https://www.drupal.org/docs/drupal-apis/configuration-api/configuration-schemametadata
description: >-
  Drupal 8 includes support for a Kwalify inspired schema/metadata language for
  configuration YAML files. Kwalify itself is written in Ruby and we needed
  slight adjustments in the format, so not all of the details of Kwalify are
  directly applicable, but it is pretty close. Table of contents Cheatsheet An
  introductory example What are schema files used for?
published_time: '2013-02-01T06:25:28+00:00'
modified_time: '2022-01-31T18:27:52+00:00'
---
Drupal 8 includes support for a Kwalify inspired schema/metadata language for configuration YAML files. Kwalify itself is written in Ruby and we needed slight adjustments in the format, so not all of the details of Kwalify are directly applicable, but it is pretty close.

### Table of contents

* [Cheatsheet](#cheatsheet)
* [An introductory example](#intro)
* [What are schema files used for?](#use)
* [Properties](#properties)
* [Types supported in metadata files](#types)
* [Sequence definitions](#sequence-definitions)
* [Dynamic type references](#dynamic-types)
* [Naming your schema files](#naming)
* [Code style to use for schema files](#codestyle)
* [PHP API](#phpapi)
* [Debugging your schema](#debug)
* [Even more background information](#background)

### Cheatsheet

For a quick understanding and some handy examples, see this cheat sheet, then read on if you still have questions:

[![](/files/ConfigSchemaCheatSheet1.5Thumb.jpg)](https://www.drupal.org/files/ConfigSchemaCheatSheet2.0.pdf)

### An introductory example [#](#intro)

System module has two configuration settings related to maintenance mode (whether the site is taken offline for normal visitors):

```php
<?php
$config = \Drupal::config('system.maintenance');
$message = $config->get('message');
$langcode = $config->get('langcode');
?>

```

(Whether maintenance is actually enabled is stored in the [state system](https://www.drupal.org/docs/8/api/state-api/overview) and not in configuration.)

The default values for this configuration object are stored in the core/modules/system/config/install/system.maintenance.yml file as:

```php
message: '@site is currently under maintenance. We should be back shortly. Thank you for your patience.'
langcode: en

```

Each module can have as many configuration objects as needed. All of these are explained in one or more schema files that are shipped with the module. In the system module's case, the files are at **[core/modules/system/config/schema](https://cgit.drupalcode.org/drupal/tree/core/modules/system/config/schema)**. The corresponding schema section from the [system.schema.yml file](https://cgit.drupalcode.org/drupal/tree/core/modules/system/config/schema/system.schema.yml) is as follows:

```php
system.maintenance:
  type: config_object
  label: 'Maintenance mode'
  mapping:
    message:
      type: text
      label: 'Message to display when in maintenance mode'

```

The top-level key ("system.maintenance") in the file refers to the base filename of the .yml file ("system.maintenance.yml") and to the name of the configuration object (`config('system.maintenance')`). The nested levels describe what is in the file. Configuration schema predefines two types of configuration files: `config_object` for global configuration files and `config_entity` for entities. The `config_object` type is defined in **[core.data\_types.schema.yml](https://cgit.drupalcode.org/drupal/tree/core/config/schema/core.data%5Ftypes.schema.yml?id=8.0.x)** as follows:

```php
# Root of a configuration object.

_core_config_info:
  type: mapping
  mapping:
    default_config_hash:
      type: string
      label: 'Default configuration hash'

config_object:
  type: mapping
  mapping:
    langcode:
      type: string
      label: 'Language code'
    _core:
      type: _core_config_info

```

The type `mapping` is a basic type for key-value pairs. By using the `config_object` type, the maintenance mode definition reuses the `langcode` and `_core` keys and adds one more key for the message itself. Back to the `system.maintenance` definition, the schema `label:'Maintenance mode'` describes the content of the schema. Then the actual elements are listed under the `mapping` key, where the `message` key is defined, inheriting `langcode` and `_core` key from the base type. Each element has a `type` and a `label` key which respectively describes the data type and gives a description of the data. The `label` usually is the same or similar to the configuration form label where the value can be edited by the system administrator.

In all cases supported by core, the top level item in the .yml file will be a mapping with elements described in a mapping list underneath. You should use either of the two specific mapping subtypes `config_object` or `config_entity`. The individual elements in the mapping can be of any type based on how you defined the data. The `_core` key itself and all keys under `_core` are reserved for Drupal core.

### What are schema files used for? [#](#use)

1. The primary use case schema files were introduced for is multilingual support. We need to have a tool to identify all translatable strings in your shipped configuration so when you ship with your own settings as well as default Views, additional user roles, menu items, etc. we can offer those up for translation as part of your module/theme release on <https://localize.drupal.org>. The nesting levels and types would be enough for this use case.
2. We also use schemas to provide actual translation forms for configuration based on your data. This use case is where types gain more importance and labels become crucial. The core _Configuration translation_ module uses schemas to generate translation forms and save translations. **The two most important built-in translatable types are 'label' for one-line text input and 'text' for multiline text input.**
3. Using the knowledge embedded in the configuration schemas about what is stored on a configuration entity, the default persistence implementation for configuration entities **requires** a configuration schema for the configuration entity, so the right properties are exported with the types defined. Although it is better to provide configuration schemas, if you really don't want, implement the toArray() method in your configuration entity implementation to not require a schema for saving configuration entities of your type.
4. A configuration schema is also used to automatically typecast values to their expected types. This ensures that although PHP and web forms in general favor strings over all other types, the right types are used when saving the configuration. That is important so when deploying configuration, only actual changes will show up in the difference, no random type changes.
5. In PHPUnit, [all TestBase derived tests enforce strict configuration schema adherence by default](https://www.drupal.org/node/2391795 "Change record"). It will result in schema errors if the schema file is not present or valid. Although not recommended, it can be skipped by setting in your test:  
```php  
protected $strictConfigSchema = FALSE;  
```

See <https://drupal.org/project/config%5Finspector> for a module to help with debugging your schemas. The module helps find missing schemas and schema elements with various views on your data and schema.

There are other ideas for schemas that contributed modules might provide, eg. generating web service interfaces based on some of them. There are most likely other use cases people will find that we did not even think about.

### Properties [#](#properties)

* **type**: The type of the value; can either be a base type or a derived type (see examples below).
* **label**: User interface label for the value. The label does not have to match a corresponding configuration form label, but matching labels will improve clarity.
* **translatable**: Whether the defined type is translatable; **Note**: you can use  
```yaml  
type: label  
```  
as a shorthand for:  
```yaml  
type: string  
translatable: true  
```
* **nullable**: Whether the value can be empty; if not set it defaults to being required.
* **class**: Only to be used on base types to assign the class implementing parsing (see below for examples on TypedData and configuration system-defined types).
* Type-specific properties:  
   * **mapping**: Property on the value of the mapping type, used to list the underlying elements in the mapping. The keys and types of the values in the mapping need to be described in the schema. Only string keys are allowed in mappings.  
   * **sequence**: Property on the value of the sequence type, used to define an arbitrary list of defined values. In a sequence, keys are optional and may be integers or strings and are not explicitly mapped. Only the types of values must be defined in the schema.
* **deprecated**: If this config schema entry is deprecated, this property will have the deprecation message as value. For more details, see [Drupal core deprecation policy for config schema](https://www.drupal.org/core/deprecation#config-schema).

### Types supported in metadata files [#](#types)

As mentioned above, the most basic types, as well as some interesting complex types, are defined in **[core.data\_types.schema.yml](https://cgit.drupalcode.org/drupal/tree/core/config/schema/core.data%5Ftypes.schema.yml?id=8.0.x)**.

```php
# Undefined type used by the system to assign to elements at any level where
# configuration schema is not defined. Using explicitly has the same effect as
# not defining schema, so there is no point in doing that.
undefined:
  label: 'Undefined'
  class: '\Drupal\Core\Config\Schema\Undefined'

# Explicit type to use when no data typing is possible. Instead of using this
# type, we strongly suggest you use configuration structures that can be
# described with other structural elements of schema, and describe your schema
# with those elements.
ignore:
  label: 'Ignore'
  class: '\Drupal\Core\Config\Schema\Ignore'

# Basic scalar data types from typed data.
boolean:
  label: 'Boolean'
  class: '\Drupal\Core\TypedData\Plugin\DataType\BooleanData'
email:
  label: 'Email'
  class: '\Drupal\Core\TypedData\Plugin\DataType\Email'
integer:
  label: 'Integer'
  class: '\Drupal\Core\TypedData\Plugin\DataType\IntegerData'
float:
  label: 'Float'
  class: '\Drupal\Core\TypedData\Plugin\DataType\FloatData'
string:
  label: 'String'
  class: '\Drupal\Core\TypedData\Plugin\DataType\StringData'
uri:
  label: 'Uri'
  class: '\Drupal\Core\TypedData\Plugin\DataType\Uri'

```

As can be seen, the most basic data types are mapped to their [TypedData API](https://drupal.org/node/1794140) counterparts. This example also shows how easy it is to define your own types. Just define the class that would map to the type. The two remaining (more complex) data types defined based on class implementations:

```php
# Container data types for lists with known and unknown keys.
mapping:
  label: Mapping
  class: '\Drupal\Core\Config\Schema\Mapping'
  definition_class: '\Drupal\Core\TypedData\MapDataDefinition'
sequence:
  label: Sequence
  class: '\Drupal\Core\Config\Schema\Sequence'
  definition_class: '\Drupal\Core\TypedData\ListDataDefinition'

```

Mapping as shown above is a key-value pair list type ("associative array" or "hash") where each element may have a different type, while Sequence is a simple indexed list ("indexed array") where elements are either of the same type or are based off the same dynamic type name (see below) and the keys are irrelevant. In other words, the key difference between sequences and mappings is with sequences you don't know the names of the keys and the number of the keys, while with mappings all the keys are defined explicitly. Sequences may use string keys.

All the rest of the types defined in configuration schemas (including `system.maintenance` itself) simply derive from other types, for example, "label", "path", "text", "date\_format" and "color\_hex" are all defined as strings. The distinction of these types could help tools parsing the schema to identify textual types for different purposes.

```php
# Human readable string that must be plain text and editable with a text field.
label:
  type: string
  label: 'Label'
  translatable: true

# Internal Drupal path
path:
  type: string
  label: 'Path'

# Human readable string that can contain multiple lines of text or HTML.
text:
  type: string
  label: 'Text'
  translatable: true

# PHP Date format string that is translatable.
date_format:
  type: string
  label: 'Date format'
  translatable: true
  translation context: 'PHP date format'

# HTML color value.
color_hex:
  type: string
  label: 'Color'

```

Note that the label, text and date\_format types are also marked as translatable. This means the core interface translation module will identify items with these types and translate based on community or admin provided translations from the database, [creating translation override files](https://drupal.org/node/1928898). Note that translatable strings may get context with the `translation context` key such as shown here for date formats. This way strings like 'Y' will get an additional 'PHP date format' context, so translators know it is not an abbreviation of 'Yes' but a PHP date format for years.

The same way, you can define reusable complex types on top of base types by using the format explained above for maintenance mode:

```php
# Mail text with subject and body parts.
mail:
  type: mapping
  label: 'Mail'
  mapping:
    subject:
      type: label
      label: 'Subject'
    body:
      type: text
      label: 'Body'

```

This gives you a reusable "mail" type for email text settings where a subject and body are in a mapping list. This is exactly the same as defining schema for a config key, but you picked a name for it that is not an existing config key, so it will not conflict with other schema definitions. Based on this definition "mail" can be used as a type elsewhere (as is used in the user module's email settings schema in **[user.schema.yml](https://cgit.drupalcode.org/drupal/tree/core/modules/user/config/schema/user.schema.yml)**):

```php
user.mail:
 type: config_object
 label: 'Email settings'
 mapping:
  cancel_confirm:
    type: mail
    label: 'Account cancellation confirmation'
  password_reset:
    type: mail
    label: 'Password recovery'
  [....]

```

Finally, once again the two important complex types for defining configuration files are also defined here in `core.data_types.schema.yml`:

```php
config_object:
  type: mapping
  mapping:
    langcode:
      type: string
      label: 'Language code'
    _core:
      type: _core_config_info

config_entity:
  type: mapping
  mapping:
    uuid:
      type: string
      label: 'UUID'
    langcode:
      type: string
      label: 'Language code'
    status:
      type: boolean
      label: 'Status'
    dependencies:
      type: config_dependencies
      label: 'Dependencies'
    third_party_settings:
      type: sequence
      label: 'Third party settings'
      sequence:
        type: '[%parent.%parent.%type].third_party.[%key]'
    _core:
      type: _core_config_info

```

### Sequence definitions 

In a normal mapping instance, your schema defines the type of data stored by each key. In the case of sequences, the keys are unknown to the schema. There are two common types of sequences used by Drupal modules.

#### Extending a defined type

In this case, a defined schema already exists and your module is adding its own schema definition. This pattern is commonly used with core modules such as views.

Below is an example that defines a Views access plugin schema for a module:

```yaml
views.access.domain:
  type: mapping
  label: 'Domains'
  mapping:
    domain:
      type: sequence
      label: 'List of domains'
      sequence:
        type: string
        label: 'Domain'
```

The above example supports a configuration such as:

```yaml
domain:
  - domain_org
  - domain_com
```

#### Defining a new schema

In a case where your module adds configuration that uses a sequence, you can define that schema as shown below:

```yaml
domain.language_negotiation:
  type: config_object
  label: 'Domain language negotiation'
  mapping:
    domain_language:
      type: sequence
      label: 'Domains'
      sequence:
        type: string
        label: 'Langcode mapping'
```

The above example supports a configuration such as:

```yaml
domain_language:
  example_local: en
  one_example_local: af
  two_example_local: af
  three_example_local: en
  four_example_local: en

```

### Dynamic type references [#](#dynamic-types)

As shown above, even simple types are essentially references, and complex types like "mail" are routinely used to reference complex types. Sometimes the type of a value is not static and can depend on the data, such as for image styles that can have different effects applied or views, which consists of various plugins. You can reference keys in the data as part of the type name to refer to dynamic types.

Variable values in types should be enclosed in \[\] (square brackets), and variable values can be combined with known components. There are three types of references possible:

1. Element-key reference: such as _type: book.\[%key\]_ where _%key_ is replaced by the element's key.
2. Sub-key reference: such as _type: 'views.field.\[table\]-\[field\]'_ where the type is computed based on the value of _table_ and _field_ keys in the nested structure
3. Parent-key reference: such as _type: 'views.display.\[%parent.display\_plugin\]'_ where the _display\_plugin_ key from the parent is used to figure out the type for the element

There are rich examples of this in image styles and views which use plugins extensively. An example from image styles considering _core/modules/image/config/install/image.style.medium.yml_ that has this YAML data structure:

```php
name: medium
label: 'Medium (220x220)'
effects:
  bddf0d06-42f9-4c75-a700-a33cafa25ea0:
    id: image_scale
    data:
      width: 220
      height: 220
      upscale: true
    weight: 0
    uuid: bddf0d06-42f9-4c75-a700-a33cafa25ea0
langcode: en

```

Here the structure of the data key depends on the type of the effect, which is specified in the _id_ property of the effect. So the type to be used depends on the data and cannot be specified statically. Differently set up image styles would use different effects. So we need to build in a reference to the type specification. The corresponding schema section from [image.schema.yml](https://cgit.drupalcode.org/drupal/tree/core/modules/image/config/schema/image.schema.yml) is as follows:

```php
image.style.*:
  type: config_entity
  label: 'Image style'
  mapping:
    name:
      type: string
    label:
      type: label
      label: 'Label'
    effects:
      type: sequence
      sequence:
        type: mapping
        mapping:
          id:
            type: string
          data:
            type: image.effect.[%parent.id]
          weight:
            type: integer
          uuid:
            type: string

```

This defines metadata for all image styles (image.style.\*) as a mapping of _name_, _label_, _effects_ keys. Then _effects_ itself is a sequence (there can be any number of effects), with each item in the list a mapping with details about the effect. The key of the sequence is the uuid of the effect, but that does not matter, sequences don't care about their keys, so we only define the type of elements. Common values for effects are id, data and weight, however, the content of the data depends on the parent's id value (in the above example "image\_scale" is the name of the effect used). So when this schema is applied to the data, _image.effect.image\_scale_ is the actual type referenced.

_Note that you may also encounter a slightly different sequence definition where the type of the sequence items is defined as a strictly one item list. This format is deprecated and will be removed in Drupal 9:_

```php
deprecated.sequence.definition.format:
  type: sequence
  sequence:
    - type: string
      label: 'DO NOT COPY, THIS IS DEPRECATED' 

```

### Naming your schema files [#](#naming)

Your schema files should have a globally unique name. If your schema file's name is the same as that of another extension, either your file or the other file will not be found, which can result in obscure bugs. Therefore, it is recommended to prefix your schema files with your module's name.

### Code style to use for schema files [#](#codestyle)

Just follow the .yml code style as applicable elsewhere in Drupal core. See the above examples for the approach to follow. Key points:

* Include a top-level comment explaining what is in the file. If you only have one schema file for your whole module, a comment like this suffices: `# Schema for the configuration files of the Contact module.`
* Avoid comments that provide no extra clarity. Such as "Comment settings" above a section defining schema for comment.settings is superfluous. The schema items should have labels anyway, which should describe them well. Only add comments if necessary.
* Do not use double quotes for strings, use single quotes.
* Use single quotes for label values even if they are one word for consistency.
* Never use quotes for key definitions and types (in Drupal, key names and types are strings by definition and should not have spaces).
* In Drupal, integer values contained YAML config data files are cast to string and therefore are wrapped in single quotes.
* Add labels to at least the values which will need to be translatable (as well as the containers that wrap them). See [the configuration inspector tool detailed below in the debugging section](#debug) to test whether a form can be generated from your schema in a useful way.
* Watch your indentation levels. This is not a code style requirement per se since it is important to use proper indentation in YAML so you get the desired schema structure.

Note: The regular configuration data .yml file style dictates you only use single quotes when more than one word is used because the .yml serialization will do that as a standard practice, so this standard makes diff-ing simpler for changing configuration. See [Configuration file coding standards.](https://www.drupal.org/coding-standards/config) However, the schema recommendations above differ from that, because schema files are always hand-written and using quotes around label values all the time is better for consistency.

### PHP API [#](#phpapi)

You can retrieve configuration dressed up with the metadata using the \\Drupal::service('config.typed') function (such as for the system maintenance mode):

```php
$definition = \Drupal::service('config.typed')->getDefinition('system.maintenance');

```

The structure of the array will be as follows:

```php
array(5) {
  ["label"]=>
  string(16) "Maintenance mode"
  ["class"]=>
  string(34) "\Drupal\Core\Config\Schema\Mapping"
  ["definition_class"]=>
  string(40) "\Drupal\Core\TypedData\MapDataDefinition"
  ["mapping"]=>
  array(2) {
    ["langcode"]=>
    array(2) {
      ["type"]=>
      string(6) "string"
      ["label"]=>
      string(13) "Language code"
    }
    ["message"]=>
    array(2) {
      ["type"]=>
      string(4) "text"
      ["label"]=>
      string(43) "Message to display when in maintenance mode"
    }
  }
  ["type"]=>
  string(18) "system.maintenance"
}

```

A more complex example to retrieve the typed data associated with the medium image effect's first effect data as cited above in the parent references section:

```php
// Get typed configuration from under the the image.style.medium config 
// key's effects children. Take the uuid key shown above in the example config
// file (corresponding to the first effect in the style) and the data children's elements.
$effects = \Drupal::service('config.typed')->get('image.style.medium')->get('effects.bddf0d06-42f9-4c75-a700-a33cafa25ea0.data')->getDataDefinition();

```

This will result in an _image.effect.image\_scale_ type as explained above, and will return a map definition like:

```php
object(Drupal\Core\TypedData\MapDataDefinition)#1061 (3) {
  ["mainPropertyName":protected]=>
  NULL
  ["propertyDefinitions":protected]=>
  NULL
  ["definition":protected]=>
  array(5) {
    ["type"]=>
    string(24) "image.effect.image_scale"
    ["label"]=>
    string(11) "Image scale"
    ["class"]=>
    string(34) "\Drupal\Core\Config\Schema\Mapping"
    ["definition_class"]=>
    string(40) "\Drupal\Core\TypedData\MapDataDefinition"
    ["mapping"]=>
    array(3) {
      ["width"]=>
      array(2) {
        ["type"]=>
        string(7) "integer"
        ["label"]=>
        string(5) "Width"
      }
      ["height"]=>
      array(2) {
        ["type"]=>
        string(7) "integer"
        ["label"]=>
        string(6) "Height"
      }
      ["upscale"]=>
      array(2) {
        ["type"]=>
        string(7) "boolean"
        ["label"]=>
        string(7) "Upscale"
      }
    }
  }
}
```

The TypedData API can be fully leveraged on the elements. Such as:

```php
// Get the effects sequence object from the medium image style.
$effects = \Drupal::service('config.typed')->get('image.style.medium')->get('effects');
// $effects represents the sequence keyed by uuids as shown above in the parent reference
// example. Use the getValue() TypedData method to retrieve the value.
$first_uuid = key($effects->getValue());
// Take the data keys for this first effect.
$data = $effects->get($first_uuid)->get('data');
// Examine values and types for width.
$data->get('width')->getPluginId(); // will return 'integer'
$data->get('width')->getValue(); // will return 220 

```

See more code examples around navigating configuration based on the schema as well as form generation based on the schema at <https://drupal.org/project/config%5Finspector>

### Debugging your schema [#](#debug)

[The configuration inspector module](https://drupal.org/project/config%5Finspector) provides a user interface to compare schemas with data and see how form generation and translation (when available) would work with the schema when applied to the data. That can be used to find issues in the schema, see <https://drupal.org/node/1910624#comment-7088154> for tips on how to use that to debug schemas.

The core Configuration translation module builds an actual user interface on top of the schemas and lets people translate configuration. You can use this module to debug if your configuration is properly translatable and if the translations appear at the right places (on the front end) and not appear at some places (like the back end where people can edit your original configuration).

### Even more background information [#](#background)

Check out [#1866610: Introduce Kwalify-inspired schema format for configuration](https://www.drupal.org/project/drupal/issues/1866610 "Status: Closed (fixed)") and [#1648930: Introduce configuration schema and use for translation](https://www.drupal.org/project/drupal/issues/1648930 "Status: Closed (duplicate)") for hundreds on top of hundreds of comments where different approaches and solution possibilities were discussed (and even more side issues spawned) before we came to this format. (As well as [#1914366: Move all configuration schema files into a schema subdirectory](https://www.drupal.org/project/drupal/issues/1914366 "Status: Closed (fixed)") for why they are located where they are). See also [#1905152: Integrate config schema with locale, so shipped configuration is translated](https://www.drupal.org/project/drupal/issues/1905152 "Status: Closed (fixed), Assigned to: alexpott") for information on how the schema system integrates with the locale module. [#1952394: Add configuration translation user interface module in core](https://www.drupal.org/project/drupal/issues/1952394 "Status: Closed (fixed)") is where the translation module was added.

[#1602106: Document default configuration files](https://www.drupal.org/project/drupal/issues/1602106 "Status: Closed (won't fix)") is a start at documenting the regular configuration yml conventions.