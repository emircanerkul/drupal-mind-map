The router determines which code should be run to generate the response.

In detail there are a list of components involved so let's describe all of them and how they work together:

### The Route Provider (service: router.route\_provider Drupal\\Core\\Routing\\RouteProvider)

The route provider gives you all controllers which potentially match on the current request.

Therefore it takes the path and finds matching routes in the database. (see section route builder how the route items get into the database)

Important method: getRouteCollectionForRequest

As a controller could be different depending on a POST and GET request, you might get multiple routes for the same URL.

##### ... Nested matcher ... (service: router.matcher, router.matcher.final\_matcher)

As the route provider returns multiple possible controllers, there is a component which returns the first matching controller based upon other criteria than just the URL. (GET, vs. POST as an example).

Important method: matchRequest

#### The Route Builder

### Html Pages/Html Forms

### The Url generator

### Url rewriting

### Access on routes