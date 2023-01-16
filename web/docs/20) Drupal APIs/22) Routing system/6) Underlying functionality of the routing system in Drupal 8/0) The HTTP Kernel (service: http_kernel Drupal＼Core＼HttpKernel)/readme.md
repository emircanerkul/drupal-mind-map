The HTTP Kernel is the root which handles how to convert an incoming request to an outgoing response. Therefore it asks the routing component to find out which code should be run on a certain request.

This code corresponds to the hook\_menu() page callback in Drupal 7\. In Drupal 8 this is called the **controller**.