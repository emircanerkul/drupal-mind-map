The routing information is stored in `example/example.routing.yml`:

```php
example.my_page:
  path: '/mypage/page'
  defaults:
    _controller: '\Drupal\example\Controller\ExampleController::myPage'
    _title: 'My first page in D8'
  requirements:
    _permission: 'access content'

```

example.my\_page

This is the **machine name** of the route. By convention, route machine names should be `module_name.sub_name`. When other parts of the code need to refer to the route, they will use the machine name.

path

This gives the path to the page on your site. Note the leading slash (`/`).

defaults

This describes the page and title callbacks. @todo: Where can these defaults be overridden?

requirements

This specifies the conditions under which the page will be displayed. You can specify permissions, modules that must be enabled, and other conditions.