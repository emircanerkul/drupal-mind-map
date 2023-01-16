Many page updates are expressed visually through color changes and animations. In order to make page updates apparent in a non-visual way, Drupal provides the `Drupal.announce` JavaScript method. This method creates an [aria\-live](https://www.w3.org/TR/wai-aria-1.1/#aria-live "W3C documentation for ARIA Live") element on the page. Text appended to this node is read by a screen-reading user agent.

`Drupal.announce` accepts a string to be read by an audio UA. You can also set a second parameter: the priority. Here are a couple examples:

```php
Drupal.announce('Entering edit mode');
Drupal.announce(
  Drupal.t('You look beautiful today.')
);
Drupal.announce(
  Drupal.t('Please fill in your user name'),
  'assertive'
);

```

Use of [Drupal.t()](https://www.drupal.org/node/323109) is recommended to ensure announcements are translatable.

The two accepted priority values are `polite` and `assertive`. `polite` is the default.

Assertive statements will interrupt any current speech. Polite statements will not interrupt the user agent. There is a chance they will not be read at all if many things on the page change at once. The announce feature will itself concatenate several calls and read several strings at once to ensure that multiple simultaneous updates are expressed to the end user.