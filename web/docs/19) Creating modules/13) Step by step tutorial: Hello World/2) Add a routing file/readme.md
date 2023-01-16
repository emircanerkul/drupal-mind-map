---
url: >-
  https://www.drupal.org/docs/creating-custom-modules/step-by-step-tutorial-hello-world/add-a-routing-file
description: >-
  Back in your module's root folder, where the .info.yml file is located, add a
  new file called hello_world.routing.yml and add the following to it:
  hello_world.content: path: '/hello' defaults: _controller:
  '\Drupal\hello_world\Controller\HelloController::content' _title: 'Hello
  World' requirements: _permission: 'access content' Note that the space you
  reserve in the routing table for your module, the "hello_world" in
  hello_world.content on the first line, is not required to be the machine name
  you chose for your module.
published_time: '2015-04-02T05:22:32+00:00'
modified_time: '2021-03-09T15:15:45+00:00'
---
Back in your module's root folder, where the `.info.yml` file is located, add a new file called `hello_world.routing.yml` and add the following to it:

```php
hello_world.content:
  path: '/hello'
  defaults:
    _controller: '\Drupal\hello_world\Controller\HelloController::content'
    _title: 'Hello World'
  requirements:
    _permission: 'access content'

```

Note that the space you reserve in the routing table for your module, the "hello\_world" in `hello_world.content` on the first line, is not required to be the machine name you chose for your module. However, in order to be consistent across your routing and menu files, it is a best practice. The full entry name, `hello_world.content`, will be used in the next section, when adding a menu link, to wire that link into this routing table entry.

If you already have your module activated you will need to clear your site's cache from the user interface at `admin/config/development/performance` or using drush (`drush cache-rebuild` or `drush cr`). If not, go ahead and activate it.

Now navigate to the front page of your site, and then add `/hello` to your site's url in the address bar. You should see a page with the "Hello, World!" message on it.

**Please note that you have to put proper indentation for the module.routing.yml file else you might encounter issue with drupal cache clearing.**

Learn more about [Routing](https://www.drupal.org/docs/8/api/routing-system/routing-system-overview) in Drupal 8.