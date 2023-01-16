### Login

1. `POST http://example.com/user/login?_format=json`
2. `Content-type: application/json`
3. `withCredentials: true` (only for cross domain authentication)

```php
{
  "name": "admin",
  "pass": "password"
}
```

200 OK

### Logout

1. `POST http://example.com/user/logout?_format=json&token=logout_token`
2. `Content-type: application/json`
3. `withCredentials: true` (only for cross domain authentication)
4. 204 - OK

### Retrieve

1. `GET http://example.com/user/1?_format=json`
2. None
3. 200 - OK

### Register

POST: <https://example.com/user/register?%5Fformat=json>  
Content-type: application/json

```php
{
  "name": { "value": "fooBar" },
  "mail": { "value": "foo@bar.com" },
  "pass": { "value": "secretSauce" }
}
```

200 OK