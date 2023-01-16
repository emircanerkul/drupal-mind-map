### Safe vs. unsafe methods

[REST](https://en.wikipedia.org/wiki/Representational%5Fstate%5Ftransfer) uses HTTP, and uses [the HTTP verbs](https://en.wikipedia.org/wiki/HTTP%5Fverbs). The HTTP verbs (also called request methods) are: `GET`, `HEAD`, `POST`, `PUT`, `DELETE`, `TRACE`, `OPTIONS`, `CONNECT` and `PATCH`.  
Some of these methods are **_safe_: they are read-only**. Hence they can never cause harm to the stored data, because they can't manipulate it. The safe methods are **`HEAD`, `GET`**, `OPTIONS` and `TRACE`.  
All other methods are unsafe, because they perform writes, and can hence manipulate stored data.

_Note: [PUT is not supported](https://groups.drupal.org/node/284948) for good reasons._

### Unsafe methods & CSRF protection: `X-CSRF-Token` request header

Drupal 8 protects its REST resources from [CSRF attacks](https://en.wikipedia.org/wiki/Cross-site%5Frequest%5Fforgery) by **requiring a `X-CSRF-Token` request header to be sent when using a non-safe method.** So, when performing non-read-only requests, that token is required.  
Such a token can be retrieved at `/session/token`.

### Format

When performing REST requests, you must inform Drupal about the serialization format you are using (even if only one is supported for a given REST resource). So:

1. _Always_ specify the `?_format` query argument, e.g. `http://example.com/node/1?_format=json`.
2. When sending a request body containing data in that format, specify the `Content-Type` request header. This is the case for `POST` and `PATCH`.

<!-- note-warning -->
> WARNING: Accept-header based content negotiation was removed from Drupal 8 because browsers and proxies had poor support for it.