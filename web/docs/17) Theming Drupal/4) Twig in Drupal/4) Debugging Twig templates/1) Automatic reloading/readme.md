Twig templates are compiled to PHP classes on disk for better performance, but this means by default your templates are not refreshed when you make changes. **Don't enable this in production.**

To manually rebuild the templates run `drush cr`. To save time during development, enable automatic reloading by setting `twig.config.auto_reload: true` in `services.yml` (by default, auto reloading will turned on with `twig.config.debug: true`).

For more information, see <https://drupal.org/node/1903374>.