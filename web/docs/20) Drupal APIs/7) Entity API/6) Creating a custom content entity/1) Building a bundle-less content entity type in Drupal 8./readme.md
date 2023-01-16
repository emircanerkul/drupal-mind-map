In this case we create a Drupal 8 content entity that does not have any bundles.

The entity does not implement the Field API so it remains in code throughout. Nevertheless it can be a useful skeleton for building out Content Entities as we import more complex data later.

Finally, where there are some OOP concepts, I will refer to the relevant docs.

### Background.

Our module is called advertiser.  
Our content entity type is called advertiser.

Our new Drupal 8 advertiser content entity will have basetable fields:  
\- UUID  
\- ID

### Defining a Content Entity in Drupal 8.

Inside our custom entity the file structure that we will end up with looks like this:

```php
modules/custom/advertiser$
├── advertiser.info.yml
└── src
    └── Entity
         └── Advertiser.php

```

For reference, you can review the [finished Advertiser entity](https://github.com/gl2748/advertiser%5Fentity) along with added extras like tests and constraint plugins, but let's keep things simple for the time being.

#### Info file

We start by defining our custom module in `module_name.info.yml`. This is self explanatory:

```yaml
name: Advertiser
type: module
description: 'Barebones advertiser entity'
package: custom
core: 8.x
core_version_requirement: ^8 || ^9

```

#### Entity skeleton

Meanwhile the basic Advertiser entity class and associated schema is defined in `src/Entity/Advertiser.php`.

The first thing we do is define a [namespace](http://php.net/namespace) for our Advertiser Entity Class. This will come in handy whenever we want to use our classes.  
`namespace Drupal\advertiser\Entity`;

Now it is time to define our entity, which we do in an annotation.

<!-- note-warning -->
> WARNING: This is the actual definition of the entity type it is read and cached so be sure to clear the cache after any changes.

```php
<?php
/**
 * Defines the Advertiser entity.
 *
 * @ingroup advertiser
 *
 * @ContentEntityType(
 *   id = "advertiser",
 *   label = @Translation("Advertiser"),
 *   base_table = "advertiser",
 *   entity_keys = {
 *     "id" = "id",
 *     "uuid" = "uuid",
 *   },
 * )
 */

```

Because this is a barebones entity we only use a few properties and no handlers like the [Access](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Entity%21EntityAccessControlHandler.php/class/EntityAccessControlHandler/8.2.x) module.

We have a functional module that defines our custom content entity but we will see that the 'advertiser' table has not been created in the database.

```php
$ drush sql-cli
mysql> SHOW TABLES;

```

This is because our class doesn't have any methods that explicitly interact with the database. Furthermore we need a description of the bare minimum of methods needed for an entity to interface satisfactorily with the Database.

#### ContentEntityBase

Generally we can add classes by adding something like `use Drupal\Core\Entity\ContentEntityBase;` after our namespace definition at the top of our script. This makes these methods available to our own class, which can _**extend**_ them or in the case of Interfaces, _**implement**_ them.

We do two things, we **extend** an existing [**ContentEntityBase**](https://api.drupal.org/api/drupal/core!lib!Drupal!Core!Entity!ContentEntityBase.php/class/ContentEntityBase/8) class that already has the necessary methods to interact with the DB, and **implement** an [**ContentEntityInterface**](https://api.drupal.org/api/drupal/core!lib!Drupal!Core!Entity!ContentEntityInterface.php/interface/ContentEntityInterface/8) to describe...

> the methods that we need to access our database. It does NOT describe in any way HOW we achieve that. That's what the IMPLEMENTing class does. We can IMPLEMENT this interface as many times as we need in as many different ways as we need. We can then switch between implementations of the interface without impact to our code because the interface defines how we will use it regardless of how it actually works. - <https://secure.php.net/manual/en/language.oop5.interfaces.php>

All this means is that we end up with the following: **Tip** Remember to add any new classes through a `use` statement at the top of our script:

`class Advertiser extends ContentEntityBase implements ContentEntityInterface {`

But we still need to use these new useful methods to put something in the database, we start with the basic fields for our entity.

#### baseFieldDefinitions

The method [baseFieldDefinitions](https://api.drupal.org/api/drupal/core!lib!Drupal!Core!Entity!FieldableEntityInterface.php/function/FieldableEntityInterface%3A%3AbaseFieldDefinitions/8) comes from [ContentEntityBase](https://api.drupal.org/api/drupal/core!lib!Drupal!Core!Entity!ContentEntityBase.php/class/ContentEntityBase/8) class that we are extending.  
It takes one parameter:

> The entity type definition. Useful when a single class is used for multiple, possibly dynamic entity types.

And it returns

> An array of base field definitions for the entity type, keyed by field name.

So we implement it like this:

```php
<?php
public static function baseFieldDefinitions(EntityTypeInterface $entity_type) {
      
    // Standard field, used as unique if primary index.
    $fields['id'] = BaseFieldDefinition::create('integer')
      ->setLabel(t('ID'))
      ->setDescription(t('The ID of the Advertiser entity.'))
      ->setReadOnly(TRUE);

    // Standard field, unique outside of the scope of the current project.
    $fields['uuid'] = BaseFieldDefinition::create('uuid')
      ->setLabel(t('UUID'))
      ->setDescription(t('The UUID of the Advertiser entity.'))
      ->setReadOnly(TRUE);
      
    return $fields;
  }


```

It's worth noting that:

[**BaseFieldDefinitions**](https://api.drupal.org/api/drupal/core!lib!Drupal!Core!Entity!FieldableEntityInterface.php/function/FieldableEntityInterface%3A%3AbaseFieldDefinitions/8)

> "Provides base field definitions for an entity type."

\- It is a public static method from the [FieldableEntityInterface](https://api.drupal.org/api/drupal/core!lib!Drupal!Core!Entity!FieldableEntityInterface.php/function/FieldableEntityInterface%3A%3AbaseFieldDefinitions/8).

**[BaseFieldDefinition](https://api.drupal.org/api/drupal/core!lib!Drupal!Core!Field!BaseFieldDefinition.php/class/BaseFieldDefinition/8)**

> "A class for defining entity fields."

\- All the methods we need to [create](https://api.drupal.org/api/drupal/core!lib!Drupal!Core!Field!BaseFieldDefinition.php/function/BaseFieldDefinition%3A%3Acreate/8) fields, add [constraints](https://api.drupal.org/api/drupal/core!lib!Drupal!Core!Field!BaseFieldDefinition.php/function/BaseFieldDefinition%3A%3AaddPropertyConstraints/8), etc...

#### Complete entity

So altogether we have this:

```php
<?php

namespace Drupal\advertiser\Entity;

use Drupal\Core\Entity\ContentEntityBase;
use Drupal\Core\Field\BaseFieldDefinition;
use Drupal\Core\Entity\EntityTypeInterface;
use Drupal\Core\Entity\ContentEntityInterface;

/**
 * Defines the advertiser entity.
 *
 * @ingroup advertiser
 *
 * @ContentEntityType(
 *   id = "advertiser",
 *   label = @Translation("advertiser"),
 *   base_table = "advertiser",
 *   entity_keys = {
 *     "id" = "id",
 *     "uuid" = "uuid",
 *   },
 * )
 */

class Advertiser extends ContentEntityBase implements ContentEntityInterface {

  public static function baseFieldDefinitions(EntityTypeInterface $entity_type) {

    // Standard field, used as unique if primary index.
    $fields['id'] = BaseFieldDefinition::create('integer')
      ->setLabel(t('ID'))
      ->setDescription(t('The ID of the Advertiser entity.'))
      ->setReadOnly(TRUE);

    // Standard field, unique outside of the scope of the current project.
    $fields['uuid'] = BaseFieldDefinition::create('uuid')
      ->setLabel(t('UUID'))
      ->setDescription(t('The UUID of the Advertiser entity.'))
      ->setReadOnly(TRUE);

    return $fields;
  }
}


```

After installing your module you should see that the 'advertiser' table has been added to the database!

```php
$ drush sql-cli
mysql> SHOW TABLES;

```

or

```php
drush sqlq "show tables like 'advertiser'"
drush sqlq "describe advertiser"
```

If your module was already installed you will need to run entity updates. 

In [#2976035: Entity type CRUD operations must use the last installed entity type and field storage definitions ](https://www.drupal.org/project/drupal/issues/2976035 " Closed (fixed)")the ability to run `drush entup` was removed, see [the related change record](https://www.drupal.org/node/3034742) for more details.

Please see the module [Devel Entity Updates](https://www.drupal.org/project/devel%5Fentity%5Fupdates).