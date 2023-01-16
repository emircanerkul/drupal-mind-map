[Drupal.announce()](https://drupal.org/node/1973218) is now part of Drupal Core with core/misc/announce.js so that users can confidently provide timely messages to aural users. In JavaScript we can now provide instructions to screen reader users to be read out either as assertive or polite:

`Drupal.announce('Hello world.');`

You can also pass [translated strings](http://drupal.org/node/323109) & change the priority of messages using code like:  
`Drupal.announce(Drupal.t('This is important!'), 'assertive');`