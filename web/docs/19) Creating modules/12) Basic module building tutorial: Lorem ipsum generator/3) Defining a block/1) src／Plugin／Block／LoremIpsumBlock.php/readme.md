```php
<?php

namespace Drupal\loremipsum\Plugin\Block;

use Drupal\Core\Access\AccessResult;
use Drupal\Core\Block\BlockBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Session\AccountInterface;

/**
 * Provides a Lorem ipsum block with which you can generate dummy text anywhere.
 *
 * @Block(
 *   id = "loremipsum_block",
 *   admin_label = @Translation("Lorem ipsum block"),
 * )
 */
class LoremIpsumBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    // Return the form @ Form/LoremIpsumBlockForm.php.
    return \Drupal::formBuilder()->getForm('Drupal\loremipsum\Form\LoremIpsumBlockForm');
  }
```

The _LoremIpsumBlock_ class extends _BlockBase_ and, as such, has four methods that must be implemented: _build()_, _blockAccess()_, _blockForm()_, and _blockSubmit()_. The first one merely renders the form defined in our previous step.

Next we deal with access control:

```php
  /**
   * {@inheritdoc}
   */
  protected function blockAccess(AccountInterface $account) {
    return AccessResult::allowedIfHasPermission($account, 'generate lorem ipsum');
  }
```

Define our block form for the Block administration screen:

```php
  /**
   * {@inheritdoc}
   */
  public function blockForm($form, FormStateInterface $form_state) {
    $form = parent::blockForm($form, $form_state);
    $config = $this->getConfiguration();
    return $form;
  }
```

A submit handler:

```php
  /**
   * {@inheritdoc}
   */
  public function blockSubmit($form, FormStateInterface $form_state) {
    $this->setConfigurationValue('loremipsum_block_settings', $form_state
    ->getValue('loremipsum_block_settings'));
  }

}
```

And we're done.