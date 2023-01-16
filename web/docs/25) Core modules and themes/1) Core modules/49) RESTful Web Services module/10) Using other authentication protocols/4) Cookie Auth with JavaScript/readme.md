Try **POST**ing to **user/login** and setting the **Accept** header to **application/json**, and setting the **Content-type** header to **application/x-www-form-urlencoded**. Set your credentials and form\_id as data. Sample request using jQuery AJAX should look like this:

```php
$(function () {
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "http://my-d8-site.com/user/login", // Change to your Drupal URL
      "method": "POST",
      "headers": {"Content-Type": "application/x-www-form-urlencoded"},
      "data": {
        "name": "admin", // Change to your real login
        "pass": "password", // Change to your real password
        "form_id": "user_login_form"
      }
    }

    $.ajax(settings).done(function (response) {
      // Do whatever you want
    });
});
```