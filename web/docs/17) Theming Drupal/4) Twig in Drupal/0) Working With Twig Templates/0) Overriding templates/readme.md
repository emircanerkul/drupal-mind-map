You can override Drupal core templates by adding templates to your theme folder that [follow a specific naming convention](/node/2354645).

To override templates you need to:

1. Locate the template you wish to override.
2. Copy the template file from its base location into your theme folder.
3. (optionally) Rename the template according to the naming conventions in order to target a more specific subset of areas where the template is used.
4. Modify the template to your liking.

Once you copy a template file into your theme and clear the cache, Drupal will start using your instance of the template file instead of the base version.

You can find out what templates are in use for any part of the page by using the **[Twig debugging tools](/node/2358785)**.