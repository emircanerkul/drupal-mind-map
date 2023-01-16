```php
<?php

use Drupal\Core\Routing\RouteMatchInterface;

/**
 * Implements hook_help().
 */
function loremipsum_help($route_name, RouteMatchInterface $route_match) {
  switch ($route_name) {
    case 'help.page.loremipsum':
      return t('
        <h2>Lorem ipsum generator for Drupal.</h2>
        <h3>Instructions</h3>
        <p>Lorem ipsum dolor sit amet... <strong>Just kidding!</strong></p>
        <p>Unpack in the <em>modules</em> folder (currently in the root of your Drupal 8 installation) and enable in <strong>/admin/modules</strong>.</p>
        <p>Then, visit <strong>/admin/config/development/loremipsum</strong> and enter your own set of phrases to build random-generated text (or go with the default Lorem ipsum).</p>
        <p>Last, visit <strong>www.example.com/loremipsum/generate/P/S</strong> where:</p>
        <ul>
          <li><em>P</em> is the number of <em>paragraphs</em></li>
          <li><em>S</em> is the maximum number of <em>sentences</em></li>
        </ul>
        <p>There is also a generator block in which you can choose how many paragraphs and
phrases and it\'ll do the rest.</p>
        <p>If you need, there\'s also a specific <em>generate lorem ipsum</em> permission.</p>
        <h3>Attention</h3>
        <p>Most bugs have been ironed out, holes covered, features added. But this module is a work in progress. Please report bugs and suggestions, ok?</p>
      ');
  }
}

```

It's good practice to put at least a definition of _hook\_help()_ here. Also, note the _use_ statement pointing to the _RouteMatchInterface_ class. It's there basically because, well, _hook\_menu() is no more_.

... And as we progress, you'll notice the _.module_ file will also be used to store theming information. So keep it.