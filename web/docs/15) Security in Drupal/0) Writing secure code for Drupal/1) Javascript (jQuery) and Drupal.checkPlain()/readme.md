It is best practice to use the server to sanitize text, but there may be situations where you need to lean on the client (browser) to provide additional or temporary sanitization, such as an HTML element that updates on the client side as the user enters text.

These examples are for use cases of outputting text to the DOM. If you're sending text to the server, such as when making an API call, you should review Back End practices.

You can use `Drupal.checkPlain()` to escape basic characters and prevent malicious elements being introduced into the DOM, avoiding some basic Clickjacking techniques.

#### Bad Practice:

```php
var rawInputText = $('#form-input').text();
```

#### Good Practice:

```php
var rawInputText     = $('#form-input').text();
var escapedInputText = Drupal.checkPlain(rawInputText);
```