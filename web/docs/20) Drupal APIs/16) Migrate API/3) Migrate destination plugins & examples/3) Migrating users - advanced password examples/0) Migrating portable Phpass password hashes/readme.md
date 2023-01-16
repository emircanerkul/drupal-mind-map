Phpass is a portable public domain password hashing framework for use in PHP applications. [Phpass has been integrated into the following systems](http://www.openwall.com/phpass/):

* WordPress 2.5+
* bbPress
* Vanilla
* PivotX 2.1.0+
* Textpattern 4.4.0+
* concrete5 5.6.3+
* phpBB3
* Joomla starting with versions 2.5.18 and 3.2.1

The password hashes generated with Phpass look like this:   
$P$B4J4RkvSe3QowfF/v6oHionn8CyW.a.

The $P$ is the so called hash type identifier which indicates that the hash is a portable Phpass hash. The string after that consists of salt and a hash. The portable Phpass hashes can be migrated to Drupal 8 as-is. When the user logs in to your Drupal 8 site for the first time, Drupal will re-hash the password. The salted hash used in this example is for a password 'test'.

```php
id: custom_user_migration
label: Custom user migration
source:
  plugin: embedded_data
  data_rows:
    -
      user_id: 1
      name: johnsmith
      mail: johnsmith@example.com
      pw_hash: '$P$B4J4RkvSe3QowfF/v6oHionn8CyW.a.'
      status: 1
  ids:
    user_id:
      type: integer
process:
  name: name
  mail: mail
  pass: pw_hash
  status: status
destination:
  plugin: entity:user

```