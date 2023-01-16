---
url: >-
  https://www.drupal.org/docs/contributed-modules/backup-and-migrate/encrypting-backups
description: >-
  For encrypting backups, first you need to install the Defuse PHP-encryption
  library. For do it via composer, you can use the command: composer require
  defuse/php-encryption After install the Defuse PHP-encryption library, you're
  able to encrypting your backups. To do it, you can follow the steps: Go to
  /admin/config/development/backup_migrate/advanced page Mark the 'Encrypt File'
  option Set the encrypt password (optionally action). PS: when you set a
  password for encrypt you backup file, you need remember this password for
  decrypting it.
published_time: '2020-11-30T07:09:53+00:00'
modified_time: '2021-08-11T21:43:11+00:00'
---
For encrypting backups, first you need to install the Defuse PHP-encryption library. For do it via composer, you can use the command:

composer require defuse/php-encryption

After install the Defuse PHP-encryption library, you're able to encrypting your backups.

To do it, you can follow the steps:

1. Go to /admin/config/development/backup\_migrate/advanced page
2. Mark the 'Encrypt File' option
3. Set the encrypt password (optionally action).  
   * PS: when you set a password for encrypt you backup file, you need remember this password for decrypting it.