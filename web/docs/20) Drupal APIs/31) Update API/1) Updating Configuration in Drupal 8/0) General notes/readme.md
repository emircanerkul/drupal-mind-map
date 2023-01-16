Some notes on hook\_update\_N() functions:

* The [hook\_update\_N() skeleton section on the parent page](https://www.drupal.org/node/2535316#update-hook) tells how/where to create your hook\_update\_N() function.
* Combine all your current data model updates into one hook\_update\_N() function, but don't combine them with other updates that were done previously.
* Make sure to set $has\_trusted\_data to TRUE when you save configuration so that the schema will not be checked. The reason this is important is that a later update might update the config schema, and you don't know when running updates if someone delayed and ran this update later when the schema was different.