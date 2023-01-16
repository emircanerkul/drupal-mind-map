Some notes on hook\_update\_N() functions:

* The [hook\_update\_N() skeleton section on the parent page](https://www.drupal.org/node/2535316#update-hook) tells how/where to create your hook\_update\_N() function.
* Combine all your current data model updates into one hook\_update\_N() function, but don't combine them with other updates that were done previously.