Rather than caching responses in Drupal and invalidating them with cache tags, you could also cache responses in reverse proxies (Varnish, CDN …) and then invalidate responses they have cached using cache tags associated with those responses. To allow those reverse proxies to know which cache tags are associated with each response, you can send the cache tags along with a header.

Just like Drupal can send an `X-Drupal-Cache-Tags` header for debugging, it can also send a [Surrogate\-Keys header with space-separated values](https://www.fastly.com/blog/surrogate-keys-part-1) as expected by some CDNs or a [Cache\-Tag header with comma-separated values](https://support.cloudflare.com/hc/en-us/articles/206596608-How-to-Purge-Cache-Using-Cache-Tags) as expected by other CDNs. And it could also be a reverse proxy you run yourself, rather than a commercial CDN service.

As a rule of thumb, it's recommended that both your web server and your reverse proxy support response headers with values of up to 16 KB.

1. HTTP is text-based. Cache tags are therefore also text-based. Reverse proxies are free to represent cache tags in a different data structure internally. The 16 KB response header value limit was selected based on 2 factors: A) to ensure it works for the 99% case, B) what is practically achievable. Typical web servers (Apache) and typical CDNs (Fastly) support 16 KB response header values. This means roughly 1000 cache tags, which is enough for the 99% case.
2. The number of cache tags varies widely by site and the specific response. If it's a response that depends on many other things, there will be many cache tags. More than 1000 cache tags on a response will be rare.
3. But, of course, this guideline (\~1000 tags/response is sufficient) may and will evolve over time, as we A) see more real-world applications use it, B) see systems specifically leverage/build on top of this capability.

Finally, anything beyond 1000 cache tags probably indicates a deeper problem: that the response is overly complex, that it should be split up. Nothing prevents you going beyond that number in Drupal, but it may require manual finetuning. Which is acceptable for such extremely complex use cases. Arguably, that's the case even for far less than 1000 cache tags.

Read documentation for [using Varnish with cache tags](/developing/api/8/cache/tags/varnish).

CDNs known to support tag-based invalidation/purging:

* [CloudFlare](https://support.cloudflare.com/hc/en-us/articles/206596608-How-to-Purge-Cache-Using-Cache-Tags)
* [Fastly](https://docs.fastly.com/api/purge#purge%5F077dfb4aa07f49792b13c87647415537)
* [KeyCDN](https://www.keycdn.com/api#purge-zone-tag)
* [Akamai](https://developer.akamai.com/api/core%5Ffeatures/fast%5Fpurge/v3.html#concepts)

### Internal Page Cache

Comprehensive use of cache tags across Drupal allows Drupal to ship with its [Internal Page Cache](https://www.drupal.org/documentation/modules/internal%5Fpage%5Fcache) enabled by default. This is nothing more than a built-in reverse proxy.