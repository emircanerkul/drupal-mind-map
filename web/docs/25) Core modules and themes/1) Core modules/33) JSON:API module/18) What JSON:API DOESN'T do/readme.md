---
url: >-
  https://www.drupal.org/docs/core-modules-and-themes/core-modules/jsonapi-module/what-jsonapi-doesnt-do
description: >-
  JSON:API is entirely entity-based. That is, it can't process business rules or
  do things which can't be thought of as "CRUD". Business logic, like
  registering a new account, logging in a user, or requesting a new password are
  not part of JSON:API. Many of these are already provided by Drupal core. A
  non-exhaustive list of common needs and solutions are presented below.
published_time: '2017-05-31T13:32:19+00:00'
modified_time: '2022-09-14T12:23:20+00:00'
---
JSON:API is entirely entity-based. That is, it can't process business rules or do things which can't be thought of as "CRUD". Business logic, like registering a new account, logging in a user, or requesting a new password are _not_ part of JSON:API. Many of these are already provided by Drupal core.

A non-exhaustive list of common needs and solutions are presented below.

### Path of interest are:

* /session/token
* /user/register
* /user/login
* /user/login\_status
* /user/logout

### Getting a session token

### Get a token

```php
curl \
  --request GET http://drupal.d8/session/token

```

A token is returned as a plain text (not JSON) in the reponse body.

### Use tokens

Apart from a session token when you login you get a csrf\_token and a logout\_token. You will need the logout\_token to log a user out from system (see below). The csrf\_token or the session token is necessary for mutable requests (e.g., POST, PATCH and DELETE).

### User registration

In order to allow users to register an account, the user\_registration REST resource must be enabled (see the REST UI example below).

```php
curl \
--header "Content-Type: application/json" \
--header "X-CSRF-Token: 57sTS-KS7UoYAWAPyzt0iJmo300CFct3jdKyWM-UiiQ" \
--request POST "https://drupal.d9/user/register?_format=json" \
--data '{"name": {"value": "thename123"}, "pass": {"value": "thepass"}, "mail": {"value": "someone@example.com"}}'

```

Use the session token value with the X-CSRF-Token header. A successful response should contain some user field values, including the UUID of the newly created user:

```php
{
   "uuid" : [ { "value" : "3e75b757-831e-4bf7-bbb6-25b8c50c7ac0" } ]
}
```

Also note that the response doesn't have "Set-Cookie" headers, even if visitors are allowed to create an account by themselves. So, if no approval or confirmation required, you can log a user in after successful registration using same name and pass values.

### User login

```php
curl \
  --header "Content-type: application/json" \
  -c cookie.txt \
  --request POST "http://drupal.d8/user/login?_format=json" \
  --data '{"name":"admin", "pass":"admin"}'

```

the `-c cookie.txt` tells curl to save a cookie. Your response should look something like this:

```php
{
   "csrf_token" : "57sTS-KS7UoYAWAPyzt0iJmo300CFct3jdKyWM-UiiQ",
   "logout_token" : "zzRaD8ZgLT1TkG804mYpVVTyM-pgoDm4h9XZ9JHSoCw",
   "current_user" : {
      "roles" : [
         "authenticated",
         "administrator"
      ],
      "name" : "admin",
      "uid" : "1"
   }
}

```

### User status

```php
curl \
  --header "Content-type: application/json" \
  -b cookie.txt \
  --request GET "http://drupal.d8/user/login_status?_format=json"

```

`-b cookie.txt` tells curl to _send_ (not save) the cookie from the last request. If you're logged in, this will return `1` in the response body in plain text format (not JSON), otherwise `0`.

### User logout

```php
curl \
  --header "Content-type: application/json" \
  -b cookie.txt \
  --request POST "http://drupal.d8/user/logout?_format=json&token=zzRaD8ZgLT1TkG804mYpVVTyM-pgoDm4h9XZ9JHSoCw"

```

Will log the user authenticated by `cookie.txt` out. Use the logout\_token value with the token query parameter.

### Authentication Mechanisms

The example above is just one of many available authentication mechanisms. You should explore which mechanism is best for your needs.

A Drupal OAuth module is available as [simple\_oauth](https://www.drupal.org/project/simple%5Foauth).

References

See these change records for more information:

* [https://www.drupal.org/node/2720655 ](https://www.drupal.org/node/2720655)(login, login\_status and logout)
* <https://www.drupal.org/node/2752071> (register)

For authentication, you may also consider [using other authentication protocols](https://www.drupal.org/docs/8/core/modules/rest/using-other-authentication-protocols).

If you decided to go a "cookie" way with your javascript application on front-end and Drupal on back-end, a browser can do all the cookie storage work for you. Just don't forget that if your JS app and Drupal site have different domain names, you have to allow browsers to store users' session cookies by changing the SameSite cookie parameter to "None". For this, edit your `services.yml` file and add the following parameter:

```yaml
parameters:
  session.storage.options:
    cookie_samesite: None
```

### REST UI

The [REST UI](https://www.drupal.org/project/restui) contrib module allows configuring resources of the core's REST module. Let's take a look how we can enable user registration with this module.

1. After installing and enabling the REST UI module go to the configuration page at /admin/config/services/rest and enable the "User registration" resource. Edit the resource and enable the POST method, JSON format and Cookie provider for example. Swithing a granularity to "method" also allows you to separate formats and providers per request method.
2. Then, grant anonymous users a permission to "Access POST on User registration resource" at /admin/people/permissions/module/rest .
3. Finally, ensure that visitors are able to create an account at /admin/config/people/accounts .