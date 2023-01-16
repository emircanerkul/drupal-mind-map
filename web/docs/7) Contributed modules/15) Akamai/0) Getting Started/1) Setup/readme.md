1. Visit _Configuration > Akamai > Akamai Settings_
2. Configure the .edgerc file path
3. Configure the .edgerc section to use from the file (see format instructions above)
4. Set a clearing action default  
 The options are _delete_ (which deletes the item from the Akamai cache) and _invalidate_ (which leaves the item in the cache, but invalidates it so that the origin will be hit on the next request)
5. Set a base path  
 The URL of the base path (fully qualified domain name) of the site. This will be used as a prefix for all cache clears (Akamai indexes on the full URI). e.g. "<http://www.example.com>"
6. Set a domain  
 Options are staging and production
7. Save the configuration

### Testing setup

1. Visit _Configuration > Akamai > Akamai Cache Clear_
2. Enter "<front>" into the _Paths/URLs/CPCodes_ text area
3. Click _Start Refreshing Content_
4. The success message "Requested invalidate of the following objects: /<front>" should be visible