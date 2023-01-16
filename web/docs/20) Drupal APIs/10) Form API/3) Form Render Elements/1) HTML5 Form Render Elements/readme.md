The HTML5 elements are:

* `'#type' => 'tel'` (See [Tel](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Render%21Element%21Tel.php/class/Tel/8.8.x))
* `'#type' => 'email'` (See [Email](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Render%21Element%21Email.php/class/Email/8.8.x))
* `'#type' => 'number'` (See [Number](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Render%21Element%21Number.php/class/Number/8.8.x))
* `'#type' => 'date'`
* `'#type' => 'url'`
* `'#type' => 'search'`
* `'#type' => 'range'`

Using these elements as opposed to requesting data in plain textfields is preferable because devices can pull up the proper input methods for them, such as when a telephone number is requested, a keypad screen would display on a device.