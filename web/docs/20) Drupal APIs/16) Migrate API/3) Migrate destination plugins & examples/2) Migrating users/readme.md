---
url: >-
  https://www.drupal.org/docs/drupal-apis/migrate-api/migrate-destination-plugins-examples/migrating-users
description: >-
  The migrate destination plugin entity:user lets you migrate users into Drupal
  8. The tricky part of user migration is preserving the passwords. Besides
  passwords, everything else is just standard field mapping in a process
  pipeline. Migrating MD5 hashed passwords Drupal 6 and many other older systems
  use MD5 algorithm for password hashing. These password hashes must be migrated
  to Drupal 8 using the md5_passwords: true configuration option so that the
  users can use their old passwords. If your migration is based on d6_user.yml,
  then md5_passwords:true is already enabled.
published_time: '2014-01-28T09:49:33+00:00'
modified_time: '2022-09-18T14:08:13+00:00'
---
The migrate destination plugin `entity:user` lets you migrate users into Drupal 8\. The tricky part of user migration is preserving the passwords. Besides passwords, everything else is just standard field mapping in a process pipeline.