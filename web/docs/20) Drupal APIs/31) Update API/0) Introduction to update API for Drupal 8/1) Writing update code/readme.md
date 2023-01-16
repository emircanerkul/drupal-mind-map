Once you have identified that your module is making a data model change you will need to use hook\_update\_N() to provide code that updates data so that it fits with your new data model. How to do this depends on the type of data model change (see previous section for list) and the specifics are covered in other pages (except the common piece in the [skeleton of hook\_update\_N() section below):](#update-hook)

Content entities and fields

This is covered on the [child page about entity and field updates](https://www.drupal.org/node/2535476).

Configuration

This is covered on the [child page about configuration updates](https://www.drupal.org/node/2535454).

 Configuration Entity

This is covered here about [configuration entity updates](https://www.drupal.org/docs/drupal-apis/configuration-api/how-to-update-configuration-entity-in-drupal-9).

Database schema

This is covered on the [child page about database updates](https://www.drupal.org/node/2535384).

### Skeleton of hook\_update\_N()

All update code will need to go into a "hook\_update\_N()" function. Assuming your module's short/machine name is "mymodule", this goes into your mymodule.install file, and looks something like this:

```php
/**
 * Write a line or two here about what the updates are for.
 * This is shown to users on the update.php page.
 */
function mymodule_update_8001(&$sandbox) {
}

```

Each time you update your data model, you need to define a new function separate from previous ones. Each individual update function needs to be given a unique function name, so there is a numeric suffix (8001 in this example). Compose your numeric suffix as follows:

* 1 digit for Drupal core compatibility (8).
* 1 digit for your module's major release version. For instance, if you're developing for Drupal Core and its version 8.0.x, use 0, and if its version 8.1.x, use 1, etc. If you're in a contributed or custom module, and its version 8.x-1.x, use 1, etc.
* 2 digits for sequential counting, starting with 01\. (**Note:** starting at 01 is required. Starting at 00 can cause system schema corruption.)

So in the example here, this is the first update for a Drupal 8 core module in the 8.0.x series.