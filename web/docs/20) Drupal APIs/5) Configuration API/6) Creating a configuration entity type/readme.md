---
url: >-
  https://www.drupal.org/docs/drupal-apis/configuration-api/creating-a-configuration-entity-type
description: >-
  This page provides an example of how to create a configuration entity type,
  with administration management pages, for Drupal 8. For an introduction to the
  concepts of simple configuration vs.
published_time: '2012-10-11T04:24:25+00:00'
modified_time: '2022-11-07T16:04:38+00:00'
---
This page provides an example of how to create a configuration entity type, with administration management pages, for Drupal 8\. For an introduction to the concepts of simple configuration vs. configuration entities, see [https://www.drupal.org/node/2120523#s-simple-configuration-vs-configurat...](https://www.drupal.org/node/2120523#s-simple-configuration-vs-configuration-entities)

After enabling the example module containing the code below, the example configuration form should be available under 'admin/config/system/example', as shown in the screenshot:

![Screenshot of example configuration form](https://www.drupal.org/files/2016-12-18-002716.png)

### Set up module and admin menu entry

#### example/example.info.yml

```php
name: Example
description: 'Manages example configuration.'
package: Example

type: module
core: 8.x

```

### Routing

(see [Some helper classes added for dealing with entity routes](https://www.drupal.org/node/2593577) for how to simplify this.)

#### example/example.routing.yml

The routing.yml file defines the routes for the management pages: list, add, edit, delete.

```php
entity.example.collection:
  path: '/admin/config/system/example'
  defaults:
    _entity_list: 'example'
    _title: 'Example configuration'
  requirements:
    _permission: 'administer site configuration'

entity.example.add_form:
  path: '/admin/config/system/example/add'
  defaults:
    _entity_form: 'example.add'
    _title: 'Add example'
  requirements:
    _permission: 'administer site configuration'

entity.example.edit_form:
  path: '/admin/config/system/example/{example}'
  defaults:
    _entity_form: 'example.edit'
    _title: 'Edit example'
  requirements:
    _permission: 'administer site configuration'

entity.example.delete_form:
  path: '/admin/config/system/example/{example}/delete'
  defaults:
    _entity_form: 'example.delete'
    _title: 'Delete example'
  requirements:
    _permission: 'administer site configuration'

```

#### example/example.links.menu.yml

This adds a link to the Configuration -> System page

```php
entity.example.collection:
  title: 'Example'
  parent: system.admin_config_system
  description: 'Configure example'
  route_name: entity.example.collection

```

#### example/example.links.action.yml

This makes the "Add" link appear on the List page.

```php
entity.example.add_form:
  route_name: 'entity.example.add_form'
  title: 'Add example'
  appears_on:
    - entity.example.collection

```

### Entity type classes

#### example/src/ExampleInterface.php

Assuming that your configuration entity has properties, you will need to define some set/get methods on an interface.

```php
namespace Drupal\example;

use Drupal\Core\Config\Entity\ConfigEntityInterface;

/**
 * Provides an interface defining an Example entity.
 */
interface ExampleInterface extends ConfigEntityInterface {
  // Add get/set methods for your configuration properties here.
}


```

#### example/src/Entity/Example.php

This file defines the configuration entity class.

```php
namespace Drupal\example\Entity;

use Drupal\Core\Config\Entity\ConfigEntityBase;
use Drupal\example\ExampleInterface;

/**
 * Defines the Example entity.
 *
 * @ConfigEntityType(
 *   id = "example",
 *   label = @Translation("Example"),
 *   handlers = {
 *     "list_builder" = "Drupal\example\Controller\ExampleListBuilder",
 *     "form" = {
 *       "add" = "Drupal\example\Form\ExampleForm",
 *       "edit" = "Drupal\example\Form\ExampleForm",
 *       "delete" = "Drupal\example\Form\ExampleDeleteForm",
 *     }
 *   },
 *   config_prefix = "example",
 *   admin_permission = "administer site configuration",
 *   entity_keys = {
 *     "id" = "id",
 *     "label" = "label",
 *   },
 *   config_export = {
 *     "id",
 *     "label"
 *   },
 *   links = {
 *     "edit-form" = "/admin/config/system/example/{example}",
 *     "delete-form" = "/admin/config/system/example/{example}/delete",
 *   }
 * )
 */
class Example extends ConfigEntityBase implements ExampleInterface {

  /**
   * The Example ID.
   *
   * @var string
   */
  protected $id;

  /**
   * The Example label.
   *
   * @var string
   */
  protected $label;

  // Your specific configuration property get/set methods go here,
  // implementing the interface.
}


```

The admin\_permission key automatically allows all access for users with that permission. In case more logic is required, a custom access controller can be specified.

**From Drupal 8.6.x, it is recommended that all configuration entity types have a `config_export` property in their annotation** (see: <https://www.drupal.org/node/2949023>).

### Configuration schema file

#### example/config/schema/example.schema.yml

```php
example.example.*:
  type: config_entity
  label: 'Example config'
  mapping:
    id:
      type: string
      label: 'ID'
    label:
      type: label
      label: 'Label'

```

in example.schema.yml add the properties/attributes defined in `\Drupal\example\Entity\Example`

`example.example.* ` is a configuration variable to refer to our class properties/attributes and you can specify different variable name for your entity by adding "config\_prefix" e.g :

```php
@ConfigEntityType(
..
... config_prefix = "variable_name" ... 

```

then you can refer to it like the following :

```php
example.variable_name.*: ....

```

for more information on Configuration schema see [Configuration schema/metadata](https://drupal.org/node/1905070)

### Entity controller classes

#### example/src/Form/ExampleForm.php

```php
namespace Drupal\example\Form;

use Drupal\Core\Entity\EntityForm;
use Drupal\Core\Entity\EntityTypeManagerInterface;
use Drupal\Core\Form\FormStateInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Form handler for the Example add and edit forms.
 */
class ExampleForm extends EntityForm {

  /**
   * Constructs an ExampleForm object.
   *
   * @param \Drupal\Core\Entity\EntityTypeManagerInterface $entityTypeManager
   *   The entityTypeManager.
   */
  public function __construct(EntityTypeManagerInterface $entityTypeManager) {
    $this->entityTypeManager = $entityTypeManager;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    return new static(
      $container->get('entity_type.manager')
    );
  }

  /**
   * {@inheritdoc}
   */
  public function form(array $form, FormStateInterface $form_state) {
    $form = parent::form($form, $form_state);

    $example = $this->entity;

    $form['label'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Label'),
      '#maxlength' => 255,
      '#default_value' => $example->label(),
      '#description' => $this->t("Label for the Example."),
      '#required' => TRUE,
    ];
    $form['id'] = [
      '#type' => 'machine_name',
      '#default_value' => $example->id(),
      '#machine_name' => [
        'exists' => [$this, 'exist'],
      ],
      '#disabled' => !$example->isNew(),
    ];

    // You will need additional form elements for your custom properties.
    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function save(array $form, FormStateInterface $form_state) {
    $example = $this->entity;
    $status = $example->save();

    if ($status === SAVED_NEW) {
      $this->messenger()->addMessage($this->t('The %label Example created.', [
        '%label' => $example->label(),
      ]));
    }
    else {
      $this->messenger()->addMessage($this->t('The %label Example updated.', [
        '%label' => $example->label(),
      ]));
    }

    $form_state->setRedirect('entity.example.collection');
  }

  /**
   * Helper function to check whether an Example configuration entity exists.
   */
  public function exist($id) {
    $entity = $this->entityTypeManager->getStorage('example')->getQuery()
      ->condition('id', $id)
      ->execute();
    return (bool) $entity;
  }

}

```

#### example/src/Controller/ExampleListBuilder.php

```php
namespace Drupal\example\Controller;

use Drupal\Core\Config\Entity\ConfigEntityListBuilder;
use Drupal\Core\Entity\EntityInterface;

/**
 * Provides a listing of Example.
 */
class ExampleListBuilder extends ConfigEntityListBuilder {

  /**
   * {@inheritdoc}
   */
  public function buildHeader() {
    $header['label'] = $this->t('Example');
    $header['id'] = $this->t('Machine name');
    return $header + parent::buildHeader();
  }

  /**
   * {@inheritdoc}
   */
  public function buildRow(EntityInterface $entity) {
    $row['label'] = $entity->label();
    $row['id'] = $entity->id();

    // You probably want a few more properties here...

    return $row + parent::buildRow($entity);
  }

}

```

#### example/src/Form/ExampleDeleteForm.php

```php
namespace Drupal\example\Form;

use Drupal\Core\Entity\EntityConfirmFormBase;
use Drupal\Core\Url;
use Drupal\Core\Form\FormStateInterface;

/**
 * Builds the form to delete an Example.
 */

class ExampleDeleteForm extends EntityConfirmFormBase {

  /**
   * {@inheritdoc}
   */
  public function getQuestion() {
    return $this->t('Are you sure you want to delete %name?', ['%name' => $this->entity->label()]);
  }

  /**
   * {@inheritdoc}
   */
  public function getCancelUrl() {
    return new Url('entity.example.collection');
  }

  /**
   * {@inheritdoc}
   */
  public function getConfirmText() {
    return $this->t('Delete');
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    $this->entity->delete();
    $this->messenger()->addMessage($this->t('Entity %label has been deleted.', ['%label' => $this->entity->label()]));

    $form_state->setRedirectUrl($this->getCancelUrl());
  }

}

```