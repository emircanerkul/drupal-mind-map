The follow headers are **required** on all PATCH request to get a proper JSON:API request and response.

* Accept: application/vnd.api+json
* Content-Type:application/vnd.api+json

The following header is needed for the examples to work:

* Authorization:Basic VALUE

You can obtain the VALUE above in your applications by using command line:

```php
echo -n "USERNAME:PASSWORD" | base64 -w0
```

Use the returned value above after BASIC. In this example, the credentials of api:api returns YXBpOmFwaQ==, so the header will look like:

```php
Authorization:Basic YXBpOmFwaQ==
```