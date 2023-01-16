If the source system passwords are hashed with some other algorithm, it is possible to add support for these hashes by extending the Drupal core password service.

When the user tries to log in, the password hash checking is done in [PhpassHashedPassword::check()](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Password%21PhpassHashedPassword.php/function/PhpassHashedPassword%3A%3Acheck). As you can see, there is handling for different hash types which are identified by hash type identifier such as U$, $S$, $P$ and $H$.

You can add handling for your legacy hashes provided that know the algorithm that was used to generate the hashes in your source system. You will need to prefix the old hashes with a special hash type identifier. We use a $OLD$ in this example.

This naive example assumes that the source system used the [ROT13](https://en.wikipedia.org/wiki/ROT13) algorithm. The string 'grfg' is the encrypted value of 'test'.

```yaml
id: custom_user_migration_6
label: Custom user migration 6
source:
  plugin: embedded_data
  data_rows:
    -
      user_id: 1
      name: johnsmith
      mail: johnsmith@example.com
      old_hash: 'grfg'
      status: 1
  constants:
    hash_type_prefix: '$OLD$'
  ids:
    user_id:
      type: integer
process:
  name: name
  mail: mail
  pass:
    plugin: concat
    source:
      - constants/hash_type_prefix
      - old_hash
  status: status
destination:
  plugin: entity:user

```

### Create a custom module which provides a custom password service

Write a custom module. The module has human-readable name "My Module", machine name "my\_module", and class prefix 'MyModule' in this example. Register your own password service in my\_module.services.yml. The argument 16 is the argument for hash stretching iterations used in Drupal 8.

```yaml
services:
  password:
    class: Drupal\my_module\MyModulePasswordService
    arguments: [16]

```

Then, let’s create our custom password service class MyModulePasswordService. This needs to be located in my\_module/src/MyModulePasswordService.php.

```php
<?php
namespace Drupal\my_module;
 
use Drupal\Component\Utility\Crypt;
use Drupal\Core\Password\PhpassHashedPassword;
use Drupal\Core\Password\PasswordInterface;
 
/**
 * Provides custom password hash comparison for migrated passwords.
 */
class MyModulePasswordService extends PhpassHashedPassword implements PasswordInterface {
 
  /**
   * Overrides PhpassHashedPassword::check() for custom hash comparison.
   *
   * This naive example assumes that the source system used ROT13 algorithm for
   * encrypting passwords. These passwords were migrated with a hash type prefix
   * '$OLD$' to the Drupal 8 database. When user tries to log in, we check if
   * the hash has this prefix and use the same hash comparison algorithm that
   * the source system did.
   *
   * If the password does not have the '$OLD$' prefix, we let the original
   * PhpassHashedPassword::check() method do the hash comparison.
   */
  public function check ($password, $hash) {
    // Check if the hash has a '$OLD$' prefix.
    if (substr($hash, 0, 5) == '$OLD$') {
      // Remove the prefix so that we can compare the hash without it.
      $stored_hash = substr($hash, 5);
      // Compute the hash with the same algorithm as the legacy system did.
      $computed_hash = str_rot13($password);
      // Compare using hashEquals() instead of === to mitigate timing attacks.
      return $computed_hash && Crypt::hashEquals($stored_hash, $computed_hash);
    }
 
    // Hash did not have '$OLD' prefix. Let the parent class do the checking.
    return parent::check($password, $hash);
  }
}
```