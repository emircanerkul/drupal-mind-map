---
url: https://www.drupal.org/docs/drupal-apis/routing-system/structure-of-routes
description: >-
  The simplest way to define routes is to create a my_module_name.routing.yml
  file (see the introductory example). Each route is defined as a machine name
  in the form of my_module_name.route_name (for example book.render) with the
  following properties: path (required): The URL to the route, with a leading
  forward slash (for example path: '/book'). You can use dynamic properties by
  including them in curly braces. (for example path: '/node/{node}/outline').
  These will be passed along as arguments via parameter converters to the
  controller/form.
published_time: '2013-09-19T02:45:39+00:00'
modified_time: '2022-09-19T16:51:44+00:00'
---
The simplest way to define routes is to create a **_my\_module\_name_.routing.yml** file (see [the introductory example](https://drupal.org/node/2116767)). Each route is defined as a **machine name** in the form of _my\_module\_name.route\_name_ (for example `book.render`) with the following properties:

* **path (required)**: The URL to the route, _with a leading forward slash_ (for example `path: '/book'`). You can use dynamic properties by including them in curly braces. (for example `path: '/node/{node}/outline'`). These will be passed along as arguments via _parameter converters_ to the controller/form. Note that the first item of the path cannot be an argument, and must be a string. You can also define optional parameters at the end of your path (See 'Optional Parameters' on [Using parameters in routes](https://www.drupal.org/docs/8/api/routing-system/using-parameters-in-routes)).
* **defaults (required)**: Defines the default properties of a route. Provide one of the following to specify how the output is generated:  
   * **\_controller**: A [Callable](http://php.net/manual/en/language.types.callable.php). Allows you to map to a callable function in one of the following ways:  
         * **Class::method**:`\Drupal\[my_module_name]\Controller\[ClassName]::[method]`  
         _example:_ `_controller: '\Drupal\acme\Controller\AcmeController::build'`  
         This will execute the `build()` method in the `AcmeController` class, whose namespace is `Drupal\acme\Controller`.  
         Note that this value is _not_ a path on the file system, but rather a [PSR-4 namespace](https://www.drupal.org/docs/develop/coding-standards/psr-4-namespaces-and-autoloading-in-drupal-8). Also note that module names are lower-case with underscores, while class names are camel-case. See also [An introductory example to Drupal 8 routes and controllers](https://drupal.org/node/2116767).  
         * **Service**: `controller.test:[method]`, where "controller.test" is a [Drupal 8 service](https://www.drupal.org/docs/8/api/services-and-dependency-injection/services-and-dependency-injection-in-drupal-8), defined in a \*.services.yml file.  
         _example_: `_controller: 'acme.controller:build'`  
         This will execute the `build()` method in the class defined in the _acme.services.yml_ for the _acme.controller_ service.  
   * **\_form**: A class name implementing `Drupal\Core\Form\FormInterface`. See [form API in Drupal 8](https://drupal.org/node/2117411) for an example.  
   * **\_entity\_view**: The value is `entity_type.view_mode`. It will find an entity in the path and render it in the given view mode. For example, `_entity_view: node.teaser` will return the render array of the {node} in teaser mode. See [entity view pages provided by the entity view controller](https://drupal.org/node/2056839).  
   * **\_entity\_list**: The value is `entity_type`. It provides a list of entities using the `EntityListController` of the respective entity. For example, `_entity_list: entity_type` returns the render array of entities list.  
   * **\_entity\_form**: It is similar to \_form, but it will provide an edit form for an entity. Entity form handlers are defined in the entity metadata (annotation). For example, `_entity_form: node.default` will display the default node form. "node" in `node.default` refers to the entity ID, and "default" refers to the form handler key.
* **defaults (optional)**: Additionally, you may provide optional defaults to specify how the output is generated:  
   * **\_title**: The page title for the route. It may differ from the menu link title.  
   * \_**title\_arguments**: Additional arguments for the title text passed along to `t()`.  
   * **\_title\_context**: Additional context information for the title text passed along to `t()`.  
   * **\_title\_callback**: A PHP callable (typically `classname::method`) returning the page title for the route.
* **methods (optional)**: In addition to the URL, you can also match on the _method_ of the incoming request (i.e. GET, HEAD, POST, PUT, DELETE). Enclosed in brackets, separated by commas, for example `[GET, HEAD]`.
* **requirements (required)**: Determines what conditions must be met to grant access to the route. All conditions must be met to gain access. It is an array of one or more of the following:  
   * **\_permission**: A permission string (for example `_permission: 'access content'`). You can specify multiple permissions by separating them with ',' (comma) (`_permission: 'access content,access user profiles'`) for AND logic or '+' (plus) for OR logic (`_permission: 'access content+access user profiles'` means a visitor needs either the `access content` permission or the `access user profiles` permission to view the page.) Module-specific permission strings can be defined in my\_module\_name.permissions.yml. See [hook\_permission() replaced with permissions defined in a my\_module\_name.permissions.yml file](https://www.drupal.org/node/2311427) for details.  
   * **\_role**: A specific Drupal role, for example 'administrator'. You can specify multiple ones via "," for AND and "+" for OR logic. For example, `_role: organizer,participant,controller` means a Drupal user needs to have all three roles to access the page.  
    Note that, since the roles available may differ between sites, it's recommended to use permission-based access restriction when possible.  
   * **\_access**: Set this to `'TRUE'` (with the single quotes and in uppercase) to have access granted to this route in all circumstances.  
   * **\_entity\_access**: In the case where an entity is part of a route, can check a certain access level before granting access (`_entity_access: 'node.view'`). The format is `[slug].[operation]`. Typically, the slug is an entity type ID, but it can be any slug defined in the route. The route match parameter corresponding to the slug is checked to see if it is entity-like and implements `EntityInterface`. You can also specify how the entity should be validated (`node: \d+`). This is useful if the used routes are _/foo/{node}_ and _/foo/bar,_ where _{node}_ is a node ID. _/foo/bar_ won't match _/foo/{node}_ because _bar_ isn't a numeric value. (See book.routing.yml for an example.)  
   * **\_entity\_bundles**: Deprecated. Use [bundle for route parameters](https://www.drupal.org/node/3155569) instead. ~~In the case where an entity is part of a route, restrict to certain bundles. The format is `[entity_type]:[bundle]` (`node:article`). You can also specify multiple bundles, separating them with `|` (`node:article|page`).~~  
   * **\_entity\_create\_access**: Check access with create operation. See the related [change record](https://www.drupal.org/node/1982078) for example.  
   * **\_custom\_access**: TODO. See [Custom route access checking](/docs/8/api/routing-system/access-checking-on-routes/custom-route-access-checking) for details.  
   * **\_format**: Use this to check the type of the request. For example, you can have `_format: json` and only match requests where the ['\_format' query parameter](https://www.drupal.org/node/2501221) is 'json'.  
   * **\_content\_type\_format**: Use this to check the content type of the request. For example, you can have `_content_type_format: json` and only match requests where the Content-type header is json. See [API doc for ContentTypeHeaderMatcher.php](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Routing%21ContentTypeHeaderMatcher.php/8) to get an idea how it works.  
   * **\_module\_dependencies**: Optionally use this key to specify one or more modules that are required to serve this path. You can combine module names with a + (plus) for an AND relationship or , (comma) for an OR relationship. For example, `_module_dependencies: 'node + search'` means both node and search are needed, `_module_dependencies: 'node, search'` means either node or search are needed. If your module already depends on other modules for its behavior (via .info.yml dependencies), there is no need for specifying the dependency here as well. However, for optional dependencies, where routes are provided only if those optional dependent modules are also enabled, this is a useful option.  
   * **\_csrf\_token**: should be used and set to 'TRUE' for any URLs that perform actions or operations that do not use a form callback. See [Access checking on routes](https://drupal.org/node/3048359) for details.  
   * **\_csrf\_request\_header\_token:** set to `'TRUE' `to require X-CSRF-Token as an HTTP header. See [CSRF token route protection moved out of the REST module to be available to other core systems and contrib](https://www.drupal.org/node/2772399) to get more info.  
   * **\_method**: (OBSOLETE as of Symfony 3, read [change record](https://www.drupal.org/node/2403135). Use '`methods: [POST]`') Optionally use this key to restrict the route to specific HTTP methods. Defaults to GET and POST. Expects a string. To restrict to more than one method concatenate with '|'. Example: `'GET|POST'`.  
   * **\_access\_user\_register**: Set this to `'TRUE'` (with the single quotes) to have access granted to the route if the user is anonymous AND user registration is not set to "Administrators only" on the site.  
   * **\_user\_is\_logged\_in**: Boolean. Use to require authentication, or require unauthenticated access to a route.
* **options (optional)**: Additional options on how the route should interact. Common options are:  
   * **\_access\_mode**: (ANY / ALL (default) For security reasons, this option has been removed. [#2431281: Drop support for \_access\_mode routes and always assume ALL](https://www.drupal.org/project/drupal/issues/2431281 "Status: Closed (fixed)")  
   * **\_admin\_route**: Indicate whether this is an admin route or not, so the admin theme is used. Defaults to TRUE for routes starting with '/admin', otherwise to FALSE, so is only required to override this behavior.  
   * **\_auth**: The default authentication manager (Ex: _`auth: ['basicauth', 'cookie']`_ ) that enables developers to limit the set of allowed authentication mechanisms to the route. Check [Authentication API](https://www.drupal.org/docs/8/api/authentication-api/overview) for more details.  
   * **\_maintenance\_access**: Set this to `'TRUE'` to bypass the offline message and show the page normally while in maintenance mode.  
   * **\_theme**: TODO  
   * **no\_cache**: Set this to `'TRUE'` to mark route response as uncacheable.  
   * **parameters**: See [Using parameters in routes](https://www.drupal.org/docs/8/api/routing-system/using-parameters-in-routes)

Here's a more complex annotated example:

**book.routing.yml**

```php
# Each route is defined by a machine name, in the form of my_module_name.route_name.
#
book.render:
  # The path always starts with a leading forward-slash.
  path: '/book'
  # Defines the default properties of a route.
  defaults:
    # For page callbacks that return a render array use _controller.
    _controller: '\Drupal\book\Controller\BookController::bookRender'
  # Require a permission to access this route.
  requirements:
    _permission: 'access content'

book.export:
  # This path takes dynamic arguments, which are enclosed in { }.
  path: '/book/export/{type}/{node}'
  defaults:
    # This route returns a Response object so also uses _controller
    _controller: '\Drupal\book\Controller\BookController::bookExport'
  requirements:
    _permission: 'access printer-friendly version'
    # Ensure user has access to view the node passed in.
    _entity_access: 'node.view'
  options:
    # Enable the admin theme for this route.
    _admin_route: TRUE

```

### Passing arguments to controllers

All keys under the `defaults` section which do not start with an underscore will be passed in as arguments to the controller. Name your arguments appropriately for the arguments of the controller. For example a my\_module\_name.routing.yml file with the following:

```yaml
example.content:
  path: '/example' 
  defaults: 
    _controller: '\Drupal\example\Controller\ExampleController::content' 
    custom_arg: 12
  requirements: 
    _permission: 'access content' 

```

Will pass on `$custom_arg` to the controller, so your content method can take `$custom_arg`:

```php
  // ...
  public function content($custom_arg) {
    // Now you can use $custom_arg (which will get 12 here).
  }

```

**Routing for Form**:

```php
module_name.route_machine_name:
    path: '/{module_name}/personal-info'
    defaults:
        _form: 'Drupal\{module_name}\Form\InfoForm'
        _title: 'Personal information'
    requirements:    
        _permission : 'custom_module_permission'
```

Where 

**module\_name**: is machine name of your module.

**custom\_module\_permission**: name of the permission implemented in **module\_name.permission.yml** file

Combine this with [dynamic routes](https://drupal.org/node/2122201) to get true flexibility.