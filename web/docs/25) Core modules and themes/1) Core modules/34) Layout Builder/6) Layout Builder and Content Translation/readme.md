---
url: >-
  https://www.drupal.org/docs/8/core/modules/layout-builder/layout-builder-and-content-translation
description: >-
  The layout field that the Layout Builder module uses to store layout overrides
  is now a non-translatable field. This means any layout overrides that are
  created for an entity will apply for all translations of the entity.
  Translation-specific layouts are not supported. Sites that installed Layout
  Builder while it was Experimental (before 8.7.0-beta1) In earlier releases of
  Layout Builder, translation of layout overrides was broken. After a layout was
  translated for the first time, any changes made applied only to the entity's
  default language and not to any of its translations.
published_time: '2019-03-28T05:44:49+00:00'
modified_time: '2019-03-28T05:49:00+00:00'
---
The layout field that the Layout Builder module uses to store layout overrides is now a non-translatable field. This means any layout overrides that are created for an entity will apply for all translations of the entity. Translation-specific layouts are **not** supported.

### Sites that installed Layout Builder while it was Experimental (before 8.7.0-beta1)

In earlier releases of Layout Builder, translation of layout overrides was broken. After a layout was translated for the first time, any changes made applied **only** to the entity's default language and not to any of its translations. As a result, there was no way to edit the layout override of a translation, and unintended changes were made to the original layout instead.

Starting with Drupal 8.7.0-beta1, for new sites or entity types that do not yet enable per-entity layout overrides, translated content will correctly have the same layout as the original content. However, sites upgrading from a previous minor release may need to manually change their configuration to ensure this works properly. Some existing translations created before 8.7.0 may have a separate layout override _if_ the translation was created after the default translation already had a layout override. **These translated overrides are not editable** and not supported.

### Changing the Layout field from translatable to non-translatable

For entity types on which there are no existing bundles with the _"Allow each content item to have its layout customized"_ setting enabled, no action is needed. Layout Builder will work with the new behavior when the setting is enabled.

For monolingual sites, no action is needed. During the update to 8.7.0, Layout Builder automatically updates existing layout override fields to non-translatable for bundles that have no content translations.

#### For sites with Content Translation enabled

Sites that had Layout Builder enabled before 8.7.0 and also have Content Translation enabled can change the override behavior to the current module functionality by **setting the layout field to non-translatable** for each of the bundles that have overrides enabled. To do this see the documentation for the [Content Translation](https://www.drupal.org/docs/user%5Fguide/en/language-content-config.html "Content Translation documentation") module.

It is important to know that changing the layout field from translatable to non-translatable will have the following implications:

1. Any translated overrides that were created before 8.7.0 will be removed when saving any layout change. (These layouts were never actually editable.)
2. All translations will use the default translation's layout whether that is an override or the bundle defaults. This includes prior revisions of those translations: after this change, they will be displayed with the layout of the same revision's default translation.

If possible for the site, **setting the layout field to non-translatable is strongly recommended** to ensure all translations receive the correct layout, and to ensure they are compatible with the full translation support when it becomes available in a future release