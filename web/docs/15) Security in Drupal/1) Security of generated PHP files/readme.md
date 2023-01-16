---
url: https://www.drupal.org/docs/security-in-drupal/security-of-generated-php-files
description: >-
  Drupal 8 heavily relies on generated PHP files. This obviously raises security
  concerns: if an attacker can alter or add to them, arbitrary PHP code might be
  run. Not just by reaching the generated PHP file via a web browser but also by
  Drupal including it. Drupal 8 offers several solutions to this problem: it is
  possible to generate PHP files in a staging environment and on production use
  a read only storage class. Also, the default storage class uses a special file
  name for the dumped code. This file name is a hash from a secret and the
  containing directory modification time.
published_time: '2013-09-25T07:56:23+00:00'
modified_time: '2019-03-27T11:24:13+00:00'
---
Drupal 8 heavily relies on generated PHP files. This obviously raises security concerns: if an attacker can alter or add to them, arbitrary PHP code might be run. Not just by reaching the generated PHP file via a web browser but also by Drupal including it.

Drupal 8 offers several solutions to this problem: it is possible to generate PHP files in a staging environment and on production use a read only storage class. Also, the default storage class uses a special file name for the dumped code. This file name is a hash from a secret and the containing directory modification time. On read, it also checks that the file modification time is not larger than the directory modification time. These combined mean that although the default storage permissions lets anyone write the compiled files when they are opened and written, the hash immediately becomes invalid. Similarly with deleting the file and writing a new file under the same name. The secret is stored together with the database credentials in settings.php so if the attacker can learn that secret the site is already compromised.