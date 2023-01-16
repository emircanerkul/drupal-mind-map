Ordered by most to least frequently used APIs:

Authentication provider services

Implement `\Drupal\Core\Authentication\AuthenticationProviderInterface` and use the `'authentication_provider'` service tag.

`_auth` option on routes

The default authentication manager (see below) enables developers to limit the set of allowed authentication mechanisms to the specified subset by specifying `_auth` in [a route's options](/developing/api/8/routing).  
_Example: `auth: ['basicauth', 'cookie']`_

Note that this does not limit the authentication methods that will initially be applied to the request. Rather, it will deny requests for which successful authentication was performed using a method not listed.

Authentication manager

The authentication manager (`\Drupal\Core\Authentication\AuthenticationManager`) calls the different authentication provider services based on each service's priority.

The manager can be overridden for very advanced use cases; 99.9% of the time the default implementation should be sufficient.

Useful Interfaces

Drupal provides 2 additional Interfaces for advanced authentication use cases.

* `\Drupal\Core\Authentication\AuthenticationProviderFilterInterface` \- This is useful if you only want your Authentication provider to be used for certain routes and allows you to RouteMatch the request and check the route object for options.
* `\Drupal\Core\Authentication\AuthenticationProviderChallengeInterface` \- This allows you to generate a challenge when access is denied for unauthenticated users. This is used by the [Basic Auth](https://www.drupal.org/project/basic%5Fauth) module.