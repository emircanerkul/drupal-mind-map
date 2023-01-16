Typically some form of authentication is used for POST requests. The examples below all use Basic Authentication using the username and password of an existing user in the website which has permission to create the given content.

Enable the HTTP Basic Authentication module, set the permission for the API user (and role) and set the encoded username and password to the 'Authorization' request header.

The example header on this page requires a Drupal user with username 'api' and password 'api'.