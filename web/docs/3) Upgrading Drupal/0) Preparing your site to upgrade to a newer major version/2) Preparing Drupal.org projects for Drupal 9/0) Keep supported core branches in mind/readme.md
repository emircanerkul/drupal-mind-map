Drupal core has [a year of support for core branches](https://dri.es/extended-security-coverage-for-drupal-8-minor-releases). For example, when Drupal 8.8.0 was released, Drupal 8.6.0 became unsupported and support for 8.7.0 continued. Support for Drupal 8.7.0 will only end once 8.9.0 is released on June 3, 2020\. This means that even though the tools may be reporting that something is deprecated, it may not be actionable because it would mean dropping support for an otherwise supported core branch. This could get painful for users of your project - if you need to release an important fix it could force the user to update core even though their version is still supported. Keep this in mind when working on removing deprecated code. Testing system support for this is being discussed in [Support deprecation testing for multiple branches on contributed modules on Drupal.org](https://www.drupal.org/project/drupal/issues/3002148).

If you are using code that was only deprecated in 8.8.x and above, wish to continue supporting 8.7.x while being ready for Drupal 9 at the same time, you can sometimes achieve this with a little extra work. For example, if your code calls `entity_get_form_display()`, you can do something like this:

```php
  protected function getFormDisplay($entity_type_id, $bundle_id, $form_mode) {
    if (floatval(\Drupal::VERSION) >= 8.8) {
      return \Drupal::service('entity_display.repository')
        ->getFormDisplay($entity_type_id, $bundle_id, $form_mode);
    }
    // This is fallback code for 8.7.x and below. It's not called on later
    // versions, so we don't nee to "fix" it for upgrade_status.
    /** @noRector \DrupalRector\Rector\Deprecation\EntityGetFormDisplayRector */
    // @phpstan-ignore-next-line
    return entity_get_form_display($entity_type_id, $bundle_id, $form_mode);
  }

```

The `@noRector` and `@phpstan-ignore-next-line` comments tell the automated tools that search for deprecated code to ignore the line. Since it's only fallback code for 8.7.x, it's not preventing anything from working on Drupal 9 and above, and shouldn't be flagged as a warning or error by [tools like Upgrade Status, drupal-check, Upgrade Rector and drupal-rector](https://www.drupal.org/docs/9/how-to-prepare-your-drupal-7-or-8-site-for-drupal-9/deprecation-checking-and-correction-tools). These markers are also useful to find and remove fallback code in the future once you don't need it, so it's not accidentally left around. Note that the `@noRector` comment must be enclosed in `/** */` comments for it to work. It must also include the fully qualified class name of the rector deprecation you want it to ignore. Also note that the `@phpstan-ignore-next-line` comment should be immediately before the line to ignore, so it should come after the `@noRector` comment.