The core Migrate module provides several general use process plugins that can be used in migrations. 

* [array\_build](https://api.drupal.org/api/drupal/core%21modules%21migrate%21src%21Plugin%21migrate%21process%21ArrayBuild.php/class/ArrayBuild)  
 Builds an array based on the key and value configuration.
* [callback](https://api.drupal.org/api/drupal/core%21modules%21migrate%21src%21Plugin%21migrate%21process%21Callback.php/class/Callback)  
 Passes the source value to a callback.
* [concat](https://api.drupal.org/api/drupal/core%21modules%21migrate%21src%21Plugin%21migrate%21process%21Concat.php/class/Concat)  
 Concatenates a set of strings.
* [DedupeBase](https://api.drupal.org/api/drupal/core%21modules%21migrate%21src%21Plugin%21migrate%21process%21DedupeBase.php/class/DedupeBase)  
**Deprecated in 8.4.x, removed in 9.0.x**. Use MakeUniqueBase instead.
* [dedupe\_entity](https://api.drupal.org/api/drupal/core%21modules%21migrate%21src%21Plugin%21migrate%21process%21DedupeEntity.php/class/DedupeEntity)  
**Deprecated in 8.4.x, removed in 9.0.x.** Use make\_unique\_entity\_field instead.
* [default\_value](https://api.drupal.org/api/drupal/core%21modules%21migrate%21src%21Plugin%21migrate%21process%21DefaultValue.php/class/DefaultValue)  
 Returns a given default value if the input is empty.
* [download](https://api.drupal.org/api/drupal/core%21modules%21migrate%21src%21Plugin%21migrate%21process%21Download.php/class/Download)  
 Downloads a file from a HTTP(S) remote location into the local file system.
* [entity\_exists](https://api.drupal.org/api/drupal/core%21modules%21migrate%21src%21Plugin%21migrate%21process%21EntityExists.php/class/EntityExists)  
 Checks if a given entity exists.
* [explode](https://api.drupal.org/api/drupal/core%21modules%21migrate%21src%21Plugin%21migrate%21process%21Explode.php/class/Explode)  
 Splits the source string into an array of strings, using a delimiter.
* [extract](https://api.drupal.org/api/drupal/core%21modules%21migrate%21src%21Plugin%21migrate%21process%21Extract.php/class/Extract)  
 Extracts a value from an array.
* [file\_copy](https://api.drupal.org/api/drupal/core%21modules%21migrate%21src%21Plugin%21migrate%21process%21FileCopy.php/class/FileCopy)  
 Copies or moves a local file from one place into another.
* [flatten](https://api.drupal.org/api/drupal/core%21modules%21migrate%21src%21Plugin%21migrate%21process%21Flatten.php/class/Flatten)  
 Flattens the source value.
* [format\_date](https://api.drupal.org/api/drupal/core%21modules%21migrate%21src%21Plugin%21migrate%21process%21FormatDate.php/class/FormatDate)  
 Converts date/datetime from one format to another.
* [get](https://api.drupal.org/api/drupal/core%21modules%21migrate%21src%21Plugin%21migrate%21process%21Get.php/class/Get)  
 Gets the source value.
* [iterator](https://api.drupal.org/api/drupal/core%21modules%21migrate%21src%21Plugin%21migrate%21process%21Iterator.php/class/Iterator)  
**Deprecated in 8.4.x, removed in 9.0.x**. Use sub\_process instead.
* [log](https://api.drupal.org/api/drupal/core%21modules%21migrate%21src%21Plugin%21migrate%21process%21Log.php/class/Log)  
 Logs values without changing them.
* [machine\_name](https://api.drupal.org/api/drupal/core%21modules%21migrate%21src%21Plugin%21migrate%21process%21MachineName.php/class/MachineName)  
 Creates a machine name.
* [menu\_link\_parent](https://api.drupal.org/api/drupal/core%21modules%21migrate%21src%21Plugin%21migrate%21process%21MenuLinkParent.php/class/MenuLinkParent)  
 Figures out menu link parent plugin IDs. [Additional documentation](https://www.drupal.org/docs/8/api/migrate-api/migrate-process/process-plugin-menu%5Flink%5Fparent).
* [migration](https://api.drupal.org/api/drupal/core%21modules%21migrate%21src%21Plugin%21migrate%21process%21Migration.php/class/Migration)  
**Deprecated in 8.3.x, removed in 9.0.x.** Use migration\_lookup instead.
* [migration\_lookup](https://api.drupal.org/api/drupal/core%21modules%21migrate%21src%21Plugin%21migrate%21process%21MigrationLookup.php/class/MigrationLookup)  
 Looks up the value of a property based on a previous migration.
* [MakeUniqueBase](https://api.drupal.org/api/drupal/core%21modules%21migrate%21src%21Plugin%21migrate%21process%21MakeUniqueBase.php/class/MakeUniqueBase)  
 Ensures the source value is unique. Abstract base class. See make\_unique\_entity\_field.
* [make\_unique\_entity\_field](https://api.drupal.org/api/drupal/core%21modules%21migrate%21src%21Plugin%21migrate%21process%21MakeUniqueEntityField.php/class/MakeUniqueEntityField)  
 Ensures the source value is made unique against an entity field.
* [null\_coalesce](https://api.drupal.org/api/drupal/core%21modules%21migrate%21src%21Plugin%21migrate%21process%21NullCoalesce.php/class/NullCoalesce)  
 Returns the first non-null value in the input array.
* [route](https://api.drupal.org/api/drupal/core%21modules%21migrate%21src%21Plugin%21migrate%21process%21Route.php/class/Route)  
 Sets the destination route information based on the source link\_path.
* [skip\_on\_empty](https://api.drupal.org/api/drupal/core%21modules%21migrate%21src%21Plugin%21migrate%21process%21SkipOnEmpty.php/class/SkipOnEmpty)  
 Skips processing the current row when the input value is empty.
* [skip\_row\_if\_not\_set](https://api.drupal.org/api/drupal/core%21modules%21migrate%21src%21Plugin%21migrate%21process%21SkipRowIfNotSet.php/class/SkipRowIfNotSet)  
 Skips processing the current row when a source value is not set.
* [static\_map](https://api.drupal.org/api/drupal/core%21modules%21migrate%21src%21Plugin%21migrate%21process%21StaticMap.php/class/StaticMap)  
 Changes the source value based on a static lookup map.
* [substr](https://api.drupal.org/api/drupal/core%21modules%21migrate%21src%21Plugin%21migrate%21process%21Substr.php/class/Substr)  
 Returns a substring of the input value.
* [sub\_process](https://api.drupal.org/api/drupal/core%21modules%21migrate%21src%21Plugin%21migrate%21process%21SubProcess.php/class/SubProcess)  
 Runs an array of arrays through its own process pipeline.
* [urlencode](https://api.drupal.org/api/drupal/core%21modules%21migrate%21src%21Plugin%21migrate%21process%21UrlEncode.php/class/UrlEncode)  
 URL-encodes the input value.