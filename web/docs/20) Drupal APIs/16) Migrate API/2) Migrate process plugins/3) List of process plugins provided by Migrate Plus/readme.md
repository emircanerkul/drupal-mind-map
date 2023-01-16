---
url: >-
  https://www.drupal.org/docs/8/api/migrate-api/migrate-process-plugins/list-of-process-plugins-provided-by-migrate-plus
description: >-
  The contributed Migrate Plus module provides several useful process plugins
  that can be used in addition to the process plugins provided by Drupal core.
  If you need to write your own custom process plugin, refer to Writing a
  process plugin documentation page. array_pop - The "extract" plugin in core
  can extract array values when indexes are already known. This plugin helps
  extract the last value in an array by performing a "pop" operation.
  array_shift - The "extract" plugin in core can extract array values when
  indexes are already known.
published_time: '2018-06-11T05:20:02+00:00'
modified_time: '2022-08-11T15:07:34+00:00'
---
The contributed [Migrate Plus](https://www.drupal.org/project/migrate%5Fplus) module provides several useful process plugins that can be used in addition to the [process plugins provided by Drupal core](https://www.drupal.org/docs/8/api/migrate-api/migrate-process-plugins/list-of-core-process-plugins). If you need to write your own custom process plugin, refer to [Writing a process plugin](https://www.drupal.org/docs/8/api/migrate-api/migrate-process/writing-a-process-plugin) documentation page. 

**[array\_pop](https://git.drupalcode.org/project/migrate%5Fplus/-/blob/6.0.x/src/Plugin/migrate/process/ArrayPop.php)** \- The "extract" plugin in core can extract array values when indexes are already known. This plugin helps extract the last value in an array by performing a "pop" operation.

[**array\_shift**](https://git.drupalcode.org/project/migrate%5Fplus/-/blob/6.0.x/src/Plugin/migrate/process/ArrayShift.php) \- The "extract" plugin in core can extract array values when indexes are already known. This plugin helps extract the first value in an array by performing a "shift" operation.

**[default\_entity\_value](https://git.drupalcode.org/project/migrate%5Fplus/-/blob/6.0.x/src/Plugin/migrate/process/DefaultEntityValue.php)** \- Returns EntityLookup for a given default value if input is empty.

**[dom](https://git.drupalcode.org/project/migrate%5Fplus/-/blob/6.0.x/src/Plugin/migrate/process/Dom.php)** \- Allows you to convert a string to a DOMDocument object and back; see also: [DomProcessBase](https://git.drupalcode.org/project/migrate%5Fplus/blob/HEAD/src/Plugin/migrate/process/DomProcessBase.php), a base class for manipulating the object before converting back to a string.

**[dom\_apply\_styles](https://git.drupalcode.org/project/migrate%5Fplus/-/blob/6.0.x/src/Plugin/migrate/process/DomApplyStyles.php)** \- Extends DomProcessBase; replace certain markup with specific styles defined for the Styles menu in CKEditor.

**[dom\_migration\_lookup](https://git.drupalcode.org/project/migrate%5Fplus/-/blob/6.0.x/src/Plugin/migrate/process/DomMigrationLookup.php)** \- Extends DomStrReplace; allows replacements on a source dom based on migration\_lookup.

**[dom\_remove](https://git.drupalcode.org/project/migrate%5Fplus/-/blob/6.0.x/src/Plugin/migrate/process/DomRemove.php)** \- Remove nodes from a DOMDocument object.

**[dom\_select](https://git.drupalcode.org/project/migrate%5Fplus/-/blob/6.0.x/src/Plugin/migrate/process/DomSelect.php)** \- Select strings from a DOMDocument object.

**[dom\_str\_replace](https://git.drupalcode.org/project/migrate%5Fplus/-/blob/6.0.x/src/Plugin/migrate/process/DomStrReplace.php)** \- Extends DomProcessBase (use this plugin with dom process plugin). Analogous to str\_replace, but based on a \\DOMDocument instead of a string.

[**entity\_generate**](https://git.drupalcode.org/project/migrate%5Fplus/-/blob/6.0.x/src/Plugin/migrate/process/EntityGenerate.php) \- Extends entity\_lookup to actually generate an entity from the source data where one does not already exist. For details and example usage, see [Contrib process plugin: entity\_generate](/docs/8/api/migrate-api/migrate-process-plugins/process-plugins-from-other-contrib-modules/contrib-process-plugin-entity%5Fgenerate).

[**entity\_lookup**](https://git.drupalcode.org/project/migrate%5Fplus/-/blob/6.0.x/src/Plugin/migrate/process/EntityLookup.php) \- Allows you to match source data to existing Drupal 8 entities and return their IDs (primarily for populating entity reference fields).

**[entity\_value](https://git.drupalcode.org/project/migrate%5Fplus/-/blob/6.0.x/src/Plugin/migrate/process/EntityValue.php)** \- Allows you to get a field value from an entity, when the entity ID is provided as the source data.

[**file\_blob**](https://git.drupalcode.org/project/migrate%5Fplus/-/blob/6.0.x/src/Plugin/migrate/process/FileBlob.php) \- Allows you to create a file (and corresponding file entity) from blob data.

**[gate](https://git.drupalcode.org/project/migrate%5Fplus/-/blob/6.0.x/src/Plugin/migrate/process/Gate.php)** \- Allow a source value to pass through the gate conditionally. Imagine the source value as wanting to get through the gate. We provide a different source/destination field that acts as the key. We compare to a set of valid keys. We declare whether the key locks the gate or unlocks the gate. This is different from skip\_on\_value because in that plugin, the source is compared to a value. In this plugin, the source is not compared to anything. The source just wants to get through a gate that is operated by another source/destination field. Unlike skip\_on\_value, there is no configurable method. The method is essentially restricted to 'process'. The source is not modified if it passes through the gate.

[**merge**](https://git.drupalcode.org/project/migrate%5Fplus/-/blob/6.0.x/src/Plugin/migrate/process/Merge.php) \- Allows you to merge multiple source arrays into one array.

[**multiple\_values**](https://git.drupalcode.org/project/migrate%5Fplus/-/blob/6.0.x/src/Plugin/migrate/process/MultipleValues.php) \- Converts from a single value to multiple so that the next plugin in the process pipeline treats the values individually instead of an array of values.

**[service](https://git.drupalcode.org/project/migrate%5Fplus/-/blob/6.0.x/src/Plugin/migrate/process/Service.php)** \- Allows you to call a method of a service class (similar to core's callback plugin).

[**single\_value**](https://git.drupalcode.org/project/migrate%5Fplus/-/blob/6.0.x/src/Plugin/migrate/process/SingleValue.php) \- Treats an array of values as a single value. 

[**skip\_on\_value**](https://git.drupalcode.org/project/migrate%5Fplus/-/blob/6.0.x/src/Plugin/migrate/process/SkipOnValue.php) \- Like core's skip\_on\_empty, but allows you to skip either the row or process upon matching (or not) a specific value.

[**str\_replace**](https://git.drupalcode.org/project/migrate%5Fplus/-/blob/6.0.x/src/Plugin/migrate/process/StrReplace.php) \- Wrapper around str\_replace, str\_ireplace and preg\_replace.

**[transpose](https://git.drupalcode.org/project/migrate%5Fplus/-/blob/6.0.x/src/Plugin/migrate/process/Transpose.php)** \- Exchange rows and columns. This will create an array of n-elements, numerically indexed arrays. Each array will have one element from each of the source properties.

NOTE - **NEW!** plugins may only be available in the latest dev version.