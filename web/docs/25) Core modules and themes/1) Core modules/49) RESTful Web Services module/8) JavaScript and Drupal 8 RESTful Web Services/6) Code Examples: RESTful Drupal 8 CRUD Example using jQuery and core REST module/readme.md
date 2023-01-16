### CREATE Item

```php
var package = {}
package.title = [{'value':'t1'}]
package.body = [{'value':'b1'}]
package._links = {"type":{"href":"http://local.drupal8.org/rest/type/node/page"}}

$.ajax({
  url: "http://example.com/entity/node",
  method: "POST",
  data: JSON.stringify(package),
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/hal+json"
  },
  success: function(data, status, xhr) {
    debugger
  }
})

```

### GET Item

```php
$.ajax({
  url: "http://example.com/node/3?_format=hal_json",
  method: "GET",
  headers: {
    "Content-Type": "application/hal+json"
  },
  success: function(data, status, xhr) {
    debugger
  }
})

```

### GET an Item and then UPDATE Item

```php
$.ajax({
  url: "http://example.com/node/3?_format=hal_json",
  method: "GET",
  headers: {
    "Content-Type": "application/hal+json"
  },
  success: function(data, status, xhr) {
    var package = {}
    package.title = data.title
    package.body = data.body
    package.title[0].value = 'yar'
    package._links = {"type":{"href":"http://example.com/rest/type/node/page"}}
    debugger

    $.ajax({
      url: "http://example.com/node/3",
      method: "PATCH",
      data: JSON.stringify(package),
      headers: {
        "X-CSRF-Token": "niCxgd5ZZG25YepbYtckCy7Q2_GL2SvMUY5PINxRAHw",
        "Accept": "application/json",
        "Content-Type": "application/hal+json"
      },
      success: function(data, status, xhr) {
        debugger
      }
    })

  }
})

```

@todo: explain where CSRF token comes from

### DELETE Item

```php
$.ajax({
  url: "http://example.com/node/3",
  method: "DELETE",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/hal+json"
  },
  success: function(data, status, xhr) {
    debugger
  }
})

```