* Some cache contexts have a high [cardinality](https://en.wikipedia.org/wiki/Cardinality) and are thus very costly because they cause many, many variations. A good example is the `'user'` cache context.
* Some cache tags have a high invalidation rate: they're known to be invalidated very frequently, which makes caching anything that has this cache tag (i.e. depends on the data this cache tag describes) not very worthwhile.
* Caching something with max-age zero is completely useless because it can not be cached at all. But, for some sites, some content is/needs to be updated with a very high frequency, say every second (`max-age=1`) or every few seconds (`max-age=5`). Depending on your site's server infrastructure and needs, it may also not be worth caching things with such a low max-age.

In other words, for [all three cacheability metadata properties](/developing/api/8/cache), some values cause poor cacheability and due to bubbling, they will infect the rest of the page too.

(All ancestors inherit the cacheability metadata so all ancestors will be poorly cacheable, will therefore not be cached, including the containing page.)