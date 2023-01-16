In Unit and Kernel tests, you can mock the Settings object, and you should ensure that code that relies on values in settings.php makes use of this.

```php
$site_settings = [
  'http_services_api' => [
    'auth_services' => [
      'title' => 'Auth Services',
      'config' => [
        'base_uri' => 'https://demo.api-platform.com/auth'
      ],
    ],
    'resource_services' => [
      'title' => 'Resource Services',
      'config' => [
        'base_uri' => 'https://demo.api-platform.com/books'
      ],
    ],
  ],
];

new Settings($site_settings);
```

In functional tests, use the following:

```php
$settings['settings']['my_settings_property'] = (object) [
  'value' => 'my_value',
  'required' => TRUE,
];

$this->writeSettings($settings);
```