To enable content translation in Drupal, enable the core "Content Translation" module.

To configure: Configuration > Content language and translation ( admin/config/regional/content-language )

This module allows you to decide whether each type of content entity (node pages, comments, custom blocks, taxonomy terms, user accounts, etc.) should be translatable or not. Then, within each entity type, you can decide whether the sub-types (content types for node page content, terms in particular vocabularies for taxonomy, etc.) should be translated. And within each translatable entity sub-type, you can decide which fields should be translatable.

![](https://www.drupal.org/files/2792597-enable-translation.png)

### To Translate content:

Once you have designated certain fields of certain entity sub-types to be translatable, and you've [installed](https://www.drupal.org/documentation/install/language#8) at least two languages on your site, you can translate content items.

Users with translate permissions will see links to "Translate" alongside where you'd normally see "Edit" links, and you'll be able to add translations for each configured language.

![](https://www.drupal.org/files/2792597-content-translation-annotated.png)

Behind the scenes, you'll see that all the translations share the same ID (such as the node ID), and if you look at the Drupal database, you'll see that there is a table that stores information about each translation (such as the language and the node ID), and then each field stores its translated values in a separate table.