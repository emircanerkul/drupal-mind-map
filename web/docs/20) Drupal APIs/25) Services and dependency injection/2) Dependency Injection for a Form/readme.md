---
url: >-
  https://www.drupal.org/docs/drupal-apis/services-and-dependency-injection/dependency-injection-for-a-form
description: >-
  Forms that require a Drupal service or a custom service should access the
  service using dependency injection. An example form (similar to the form used
  in Form API in Drupal 8) uses the 'current_user' service to get the uid of the
  current user. File contents of /modules/example/src/Form/ExampleForm.php if
  the module is in /modules/example:
published_time: '2014-02-24T13:38:17+00:00'
modified_time: '2022-12-03T19:18:20+00:00'
---
Forms that require a Drupal service or a custom service should access the service using dependency injection.

An example form (similar to the form used in [Form API in Drupal 8](/node/2117411)) uses the 'current\_user' service to get the uid of the current user. File contents of `/modules/example/src/Form/ExampleForm.php` if the module is in `/modules/example`:

```php
<?php

namespace Drupal\example\Form;

use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Session\AccountInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Implements an example form.
 */
class ExampleForm extends FormBase {

  /**
   * @var \Drupal\Core\Session\AccountInterface
   */
  protected $account;

  /**
   * @param \Drupal\Core\Session\AccountInterface $account
   */
  public function __construct(AccountInterface $account) {
    $this->account = $account;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    // Instantiates this form class.
    return new static(
      // Load the service required to construct this class.
      $container->get('current_user')
    );
  }

  /**
   * {@inheritdoc}.
   */
  public function getFormId() {
    return 'example_form';
  }

  /**
   * {@inheritdoc}.
   */
  public function buildForm(array $form, FormStateInterface $form_state) {

    // Get current user data.
    $uid = $this->account->id();
    
    // ...
  }
  
  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    // ...
  }
}
```

The `create` method is a factory method that returns a new instance of the `ExampleForm` object. The `ExampleForm::create` loads one or more services. This can be any core service, defined in `core.services.yml` or any `*.services.yml` file.

`ExampleForm::__construct` uses the services that are loaded by `ExampleForm::create` and stores them in properties of the class. The order in which the services are loaded in `ExampleForm::create` must be equal to the order of the parameters in the `ExampleForm::__construct` method.

The `create` method is part of the `Drupal\Core\DependencyInjection\ContainerInjectionInterface` which allows controllers to be instantiated with a service. `Drupal\Core\Form\FormBase` already implements this interface. Any form that extends `Drupal\Core\Form\FormBase`, such as ConfigFormBase and ConfirmFormBase, has this ability of Dependency Injection.

```php
<?php

namespace Drupal\example\Form;

use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Config\ConfigFactoryInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\Core\Session\AccountProxyInterface;

/**
 * Implements an example configuration form.
 */
class ExampleConfigForm extends ConfigFormBase {

  /**
   * Drupal\Core\Session\AccountProxyInterface definition.
   *
   * @var AccountProxyInterface $currentUser
   */
  protected $currentUser;

  /**
   * Class constructor.
   */
  public function __construct(ConfigFactoryInterface $config_factory, AccountProxyInterface $current_user) {
    parent::__construct($config_factory);
    $this->currentUser = $current_user;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    return new static(
      $container->get('config.factory'),
      $container->get('current_user')
    );
  }

  /**
   * {@inheritdoc}
   */
  protected function getEditableConfigNames() {
    return [
      'example.config_form',
    ];
  }

  /**
   * {@inheritdoc}.
   */
  public function getFormId() {
    return 'example_config_form';
  }

  /**
   * {@inheritdoc}.
   */
  public function buildForm(array $form, FormStateInterface $form_state) {

    // Get current user data.
    $uid = $this->currentUser->id();
    drupal_set_message($uid);

    // ...

    $config = $this->config('example.config_form');
    return parent::buildForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    $this->config('example.config_form')->save();
    parent::submitForm($form, $form_state);
  }
}

```

Above example using constructor property promotion (PHP 8.0):

`…
class ExampleConfigForm extends ConfigFormBase {

  /**
   * Class constructor.
   */
  public function __construct(
    ConfigFactoryInterface $config_factory, 
    protected AccountProxyInterface $currentUser
  ) {
    parent::__construct($config_factory);
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    return new static(
      $container->get('config.factory'),
      $container->get('current_user')
    );
  }
…
`

@todo Show how FormController can automatically insert $route info into your buildForm() method by simply defining a parameter with the same class interface.

**Example**

```php
buildForm(array $form, FormStateInterface $form_state, Request $request = NULL) 

```

**Dependency Injection Inside Block (Plugin)**

We can inject our custom/core service inside our custom block plugin for that we have to use: 

```php
use Drupal\Core\Plugin\ContainerFactoryPluginInterface;
```

Suppose you have a custom block with the name **'drupalise'** then you inject your custom service **'drupalise'** inside your custom block code as follows:

```php
<?php

namespace Drupal\drupalise\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Plugin\ContainerFactoryPluginInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\drupalise\Services\DrupaliseMe;

/**
 * Provides a 'Drupalise' block.
 *
 * @Block(
 * id = "drupalise",
 * admin_label = @Translation("Drupalise"),
 * )
 */
class Drupalise extends BlockBase implements ContainerFactoryPluginInterface {

  /**
   * @var $drupalise \Drupal\drupalise\Services\DrupaliseMe
   */
  protected $drupalise;

  /**
   * @param \Symfony\Component\DependencyInjection\ContainerInterface $container
   * @param array $configuration
   * @param string $plugin_id
   * @param mixed $plugin_definition
   *
   * @return static
   */
  public static function create(ContainerInterface $container, array $configuration, $plugin_id, $plugin_definition) {
    return new static(
      $configuration,
      $plugin_id,
      $plugin_definition,
      $container->get('drupalise')
    );
  }

  /**
   * @param array $configuration
   * @param string $plugin_id
   * @param mixed $plugin_definition
   * @param \Drupal\drupalise\Services\DrupaliseMe $drupalise_me
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition, DrupaliseMe $drupalise_me) {
    parent::__construct($configuration, $plugin_id, $plugin_definition);
    $this->drupalise = $drupalise_me;
  }

  /**
   * {@inheritdoc}
   */
  public function build() {
    $slogan= $this->drupalise->Drupalise(); // Function from your service file will return 'Drop Drop Drupal !!!'
    $build = [];
    $build['drupalise']['#markup'] = 'Drupalise is best' . $slogan;
    return $build;
  }

}
```