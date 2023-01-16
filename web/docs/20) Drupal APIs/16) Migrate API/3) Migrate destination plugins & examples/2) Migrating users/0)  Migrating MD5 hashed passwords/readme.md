Drupal 6 and many other older systems use MD5 algorithm for password hashing. These password hashes must be migrated to Drupal 8 using the `md5_passwords: true` configuration option so that the users can use their old passwords. If your migration is based on `d6_user.yml`, then `md5_passwords:true` is already enabled. The passwords are salted and re-hashed before they are saved into the Drupal 8 database. 

```yaml
destination:
  plugin: entity:user
  md5_passwords: true
```

The example below uses the EmbeddedDataSource source plugin for the sake of simplicity. The MD5 hash in the example is a hash of 'password'.;

```yaml
id: custom_user_migration
label: Custom user migration
source:
  plugin: embedded_data
  data_rows:
    -
      user_id: 1
      name: johnsmith
      mail: johnsmith@example.com
      pw_hash: 5f4dcc3b5aa765d61d8327deb882cf99
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
  md5_passwords: true

```