/src/Form/LoremIpsumForm.php

```php
<?php

namespace Drupal\loremipsum\Form;

use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;

class LoremIpsumForm extends ConfigFormBase {

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'loremipsum_form';
  }
```

We begin our settings file extending _ConfigFormBase_. The _LoremIpsumForm_ class is the one referenced in the _routing.yml_ file.