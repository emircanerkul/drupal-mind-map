The structure is very similar, but there are a few differences. Here is an overview.

```php
Drupal 7: mymodule.info
------------------------------
name = My D7 Module
description = This module needs to be ported to D8.
core = 7.x
version = VERSION
package = Custom Modules

configure = admin/config/user-interface/your-module

dependencies[] = ctools
dependencies[] = panels
dependencies[] = views

files[] = lib/FozzieClass.php
files[] = lib/GonzoClass.php
files[] = lib/KermitClass.php

------------------------------
Drupal 8: yourmodule.info.yml
------------------------------
name: 'My D7 Module'
type: module
description: 'This module needs to be ported to D8.'
core: 8.x
version: VERSION
package: 'Custom Modules'

configure: my_module.admin

dependencies:
  - drupal:ctools
  - drupal:panels
  - drupal:views

# Files are no longer listed in an .info file.

```

The [change record](https://drupal.org/node/1935708) to convert your .info file contains the full spec.

### Check the Extensions Page

If you visit your Drupal 8 module administration page at `admin/modules`, your module should now be listed.