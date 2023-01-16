---
url: >-
  https://www.drupal.org/docs/8/creating-custom-modules/creating-custom-blocks/use-config-in-block-display
description: >-
  To make use of the configuration of instances of the block, we can modify the
  build() method of the HelloBlock class: /** * {@inheritdoc} */ public function
  build() { $config = $this->getConfiguration(); if
  (!empty($config['hello_block_name'])) { $name = $config['hello_block_name']; }
  else { $name = $this->t('to no one'); } return [ '#markup' => $this->t('Hello
  @name!', [ '@name' => $name, ]), ]; }
published_time: '2015-04-09T22:43:58+00:00'
modified_time: '2019-07-17T06:55:57+00:00'
---
To make use of the configuration of instances of the block, we can modify the build() method of the HelloBlock class:

```php
  /**
   * {@inheritdoc}
   */  
  public function build() {
    $config = $this->getConfiguration();

    if (!empty($config['hello_block_name'])) {
      $name = $config['hello_block_name'];
    }
    else {
      $name = $this->t('to no one');
    }

    return [
      '#markup' => $this->t('Hello @name!', [
        '@name' => $name,
      ]),
    ];
  }

```