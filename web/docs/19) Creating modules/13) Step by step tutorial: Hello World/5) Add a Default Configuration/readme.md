---
url: >-
  https://www.drupal.org/docs/creating-custom-modules/step-by-step-tutorial-hello-world/add-a-default-configuration
description: >-
  By adding a single settings yaml file to our module, Drupal will automatically
  load the contents of that yaml file, and we can access it to provide a default
  configuration. From the root folder of our module, create a new folder and
  name it 'config'. Inside the new folder, create another folder and name it
  'install'. Finally, inside config/install create a new file and call it
  hello_world.settings.yml. hello: name: 'Hank Williams' Remember that yaml is
  whitespace sensitive.
published_time: '2015-04-09T23:48:59+00:00'
modified_time: '2021-12-19T10:14:37+00:00'
---
By adding a single settings yaml file to our module, Drupal will automatically load the contents of that yaml file, and we can access it to provide a [default configuration](https://www.drupal.org/node/2116839). From the root folder of our module, create a new folder and name it 'config'. Inside the new folder, create another folder and name it 'install'. Finally, inside `config/install` create a new file and call it `hello_world.settings.yml`.

```php
hello:
  name: 'Hank Williams'

```

Remember that yaml is whitespace sensitive. To make use of the value loaded into the Drupal object, however, we will need to add this method to our HelloBlock class (see the [Creating Custom Blocks](/docs/8/creating-custom-modules/creating-custom-blocks) tutorial):

```php
  /**
   * {@inheritdoc}
   */
  public function defaultConfiguration() {
    $default_config = \Drupal::config('hello_world.settings');
    return [
      'hello_block_name' => $default_config->get('hello.name'),
    ];
  }

```

This value will be used when the module is installed. So to verify, uninstall and install your module. And when you add your block again to a region, you should see the default value.

[Find more information on simple configuration (\\Drupal::config).](https://www.drupal.org/docs/8/api/configuration-api/simple-configuration-api)