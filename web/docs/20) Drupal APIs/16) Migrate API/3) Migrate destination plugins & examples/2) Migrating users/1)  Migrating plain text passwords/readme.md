If the passwords are plain text in the source, you can preserve the passwords by processing them through md5 during the migration using the Callback process plugin and then using the `md5_passwords: true` configuration option as in the previous example.

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
      pw_plain: super-secret-password
      status: 1
  ids:
    user_id:
      type: integer
process:
  name: name
  mail: mail
  pass:
    plugin: callback
    callable: md5
    source: pw_plain    
  status: status
destination:
  plugin: entity:user
  md5_passwords: true

```