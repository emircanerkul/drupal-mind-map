The two layers of Twig and Render API must be configured separately, for debugging purposes:

1. The Twig engine [provides options](http://twig.sensiolabs.org/doc/api.html#environment-options) for configuring debugging, automatic reloading (recompiling) of templates, and caching compiled templates in the filesystem. This can be configured in your site's `services.yml`.
2. Render API's caching can be configured in your site's `settings.php`.

We go through these two stages in more depth below.