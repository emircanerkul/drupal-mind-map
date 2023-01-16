---
url: >-
  https://www.drupal.org/docs/contributed-themes/barrio-bootstrap-45-drupal-89-theme/drupal-bootstrap-5/migrate-from-bootstrap-4-to-bootstrap-5
description: >-
  Out of the box, no big changes are required for the upgrade from Bootstrap 4
  to Bootstrap 5. Most of the changes are assumed by the base theme, but if the
  subtheme has customizations some of those adjustments will need to be done
  directly on the subtheme.
published_time: '2021-02-04T21:25:46+00:00'
modified_time: '2022-09-12T10:08:52+00:00'
---
Out of the box, no big changes are required for the upgrade from Bootstrap 4 to Bootstrap 5.

Most of the changes are assumed by the base theme, but if the subtheme has customizations some of those adjustments will need to be done directly on the subtheme.

So far known changes are required:

* Change on templates class `sr-only` for `visually-hidden`
* Add CSS markup for **.media** elements as media component was removed from Bootstrap 5
* Custom checkboxes and radios, remove custom classes:  
```php  
<div class="form-check">  
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">  
  <label class="form-check-label" for="flexCheckDefault">  
    Default checkbox  
  </label>  
</div>  
```
* Class `.form-group` removed
* Close button renamed `.close` to `.btn-close`

Official docs [Migrating to V5 - Bootstrap v5.0](https://getbootstrap.com/docs/5.0/migration/)