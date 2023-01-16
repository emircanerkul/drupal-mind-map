The first step in creating a theme is to choose a human-readable name for it, and a corresponding machine name. The machine name will be used as the name for files, folders, and functions in your theme, and is used by core Drupal programmatically to refer to your theme. The machine name is usually the human-readable name, converted to lower-case and with underscores instead of spaces. For example, if your theme is named "Fluffiness", then the machine name is "fluffiness". If your theme name is longer, like "Very Fluffy", your machine name would be "very\_fluffy".

There are some important rules to follow when selecting a machine name:

* It must start with a letter.
* It must contain only lower-case letters, numbers and underscores.
* It must not contain any spaces.
* It must not be longer than 50 characters.
* It must be unique. Your theme should not have the same short name as any other module, theme, theme engine, or installation profile you will be using on the site.
* It should not be any of the reserved terms (folders in the Drupal distribution): `src`, `lib`, `vendor`, `assets`, `css`, `files`, `images`, `js`, `misc`, `templates`, `includes`, `fixtures`, `drupal`.