---
url: >-
  https://www.drupal.org/docs/contributed-modules/bothive-chatbot/custom-javascript-triggers
description: >-
  It is possible to manipulate the behaviour of the widget through JavaScript.
  Completely hide the widget: Bothive.widget.hide(); Make the widget visible
  again after a .hide() call or when the visibility is set to false in the
  configuration.
published_time: '2021-02-06T20:39:38+00:00'
modified_time: '2021-02-06T20:47:44+00:00'
---
It is possible to manipulate the behaviour of the widget through JavaScript.

Completely hide the widget:

```php
Bothive.widget.hide();
```

Make the widget visible again after a _.hide()_ call or when the visibility is set to _false_ in the configuration.

```php
Bothive.widget.show();
```

Opening the chatbot widget (same as clicking on the widget)

```php
Bothive.widget.open();
```

Closing the chatbot widget (same as clicking on the "x" in the widget)

```php
Bothive.widget.close();
```

It's recommended to check the latest documentation in your Bothive dashboard as we don't have any control on the logic, removal or additions being made to the widget itself.