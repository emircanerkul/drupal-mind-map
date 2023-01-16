In addition to the 'name', 'mail', 'pass', and 'status' properties used in the examples, the following properties are available on the user entity.

* uid, leave this out if you want Drupal to generate the unique user IDs for the migrated users
* langcode
* preferred\_langcode
* preferred\_admin\_langcode
* timezone, see <http://php.net/manual/en/timezones.php>
* created, timestamp on when the user account was created
* changed, timestamp on when the user account was changed
* access, timestamp on when the user last accessed the site
* login, timestamp on when the user last logged in
* init, the initial email address used when the user account was created