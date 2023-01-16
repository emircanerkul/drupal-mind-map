Symfony's `Response` objects are fully supported, but are insufficient to fully support the rich Drupal ecosystem: we need more structured metadata than the very simple Symfony `Response` objects can provide.

_Unfortunately, Symfony `Response` objects do not have an interface: every specialized `Response` "type" needs to extend from Symfony's `Response` base class._

### Drupal’s additional response _interfaces_

Drupal core defines two response interfaces that any response can implement to indicate it supports these particular Drupal capabilities.

`CacheableResponseInterface`

An interface for responses that can expose [cacheability metadata](/developing/api/8/cache). (Cache [contexts](/developing/api/8/cache/contexts), [tags](/developing/api/8/cache/tags) and [max-age](/developing/api/8/cache/max-age).)

Note: can easily be implemented by using the corresponding `CacheableResponseTrait`.

See [CacheableResponseInterface](/developing/api/8/response/cacheable-response-interface) for more about this!

`AttachmentsInterface`

An interface for responses that can expose [#attached metadata](@todo). (Asset libraries, `<head>` elements, placeholders …)

Note: can easily be implemented by using the corresponding `AttachmentsTrait`.

### Drupal’s additional response _classes_

Finally, to make discovery easier, here are the most important specialized `Response` subclasses that are available to developers.

`CacheableResponse`

A response that contains and can expose cacheability metadata. Supports Drupal's caching concepts: cache tags for invalidation and cache contexts for variations.

This is simply `class CacheableResponse extends Response implements CacheableResponseInterface {}`.

`HtmlResponse`

This is what a controller returning a render array will result in after going through the [Render API](/developing/api/8/render) and its [render pipeline.](/developing/api/8/render/pipeline)

This is simply `class HtmlResponse extends Response implements CacheableResponseInterface, AttachmentsInterface {}`.

`CacheableJsonResponse`

A `JsonResponse` that contains and can expose cacheability metadata.

This is simply `class CacheableJsonResponse extends JsonResponse implements CacheableResponseInterface {}` — i.e. it extends Symfony's `JsonResponse`.

`CacheableRedirectResponse`

A `RedirectResponse` that contains and can expose cacheability metadata.

This is simply `class CacheableRedirectResponse extends RedirectResponse implements CacheableResponseInterface {}` — i.e. it extends Symfony's `RedirectResponse`.

`LocalRedirectResponse`

A redirect response which cannot redirect to an external URL. (Extends `CacheableRedirectResponse.`)

`TrustedRedirectResponse`

A redirect response which should only redirect to a trusted (potentially external) URL. (Also extends `CacheableRedirectResponse.`)