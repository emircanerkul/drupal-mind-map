## Multilingual vocabularies and taxonomy terms

The contributed [i18n](https://www.drupal.org/project/i18n) module has a Taxonomy translation sub-module which provides multilingual capabilities to vocabularies and taxonomy terms in Drupal 6\. Similar capabilities are in Drupal 8 or higher core.

### Migration of vocabulary name & description translations

* Migrating the translations of vocabulary name and description are supported

### Background: Drupal 6 vocabulary translation modes

Drupal 6 supports different multilingual concepts for vocabularies as illustrated in the figure below.

![D6 vocabulary multilingual settings](https://www.drupal.org/files/D6-vocabulary-multilingual-settings.PNG)

The 'localized terms' and 'per language terms' concepts are explained below. The 'Language' of the vocabulary is only applicable when the vocabulary has a fixed language ('set language to vocabulary' setting). In the fixed language concept all terms of the vocabulary get this language.

### 'Localized terms' concept

The Drupal 6 'localized terms' concept is illustrated in the figure below.

* We have two node entities, one in English (nid 1) and one in Finnish (nid 2). These nodes are associated as translations of each other.
* We have one taxonomy term entity (tid 1). Both Finnish and English nodes are pointing to this same term.
* The term title and description can be translated using the i18n / String translation module.

Drupal 8 or higher has an equivalent for the 'localized terms' concept.

* As explained above, the node translations are migrated so that we have only one node for both language versions.
* We have one taxonomy term entity just like we had in Drupal 6.
* Both Finnish and English language versions of the node are pointing to the same term.

![Migration of Drupal 6 'localized terms' concept](https://www.drupal.org/files/D6-vocabulary-localized-terms-concept.PNG)

### 'Per language terms' concept

The D6 'Per language terms' concept is illustrated in the figure below.

* We have two nodes, one in English and one in Finnish. These _may_ be associated as translations of each other.
* We have separate taxonomy term entities, one for English and one for Finnish. These have their own term IDs. The terms _may_ be associated as translations of each other.

 The closest Drupal 8+ equivalent to the 'Per language terms' concept is illustrated in the figure below.

* As explained above, the node translations are migrated to so that we have only one node but there are translatable fields.
* Here the field for taxonomy term reference is set as translatable so that the English version of the node can point to the English term (term/1) and the Finnish version of the node can point to the Finnish term term/2).
* Note that in Drupal 8+ the two terms cannot be associated as translations of each other.

![Drupal 6 'Per langauge terms' concept](https://www.drupal.org/files/D6-vocabulary-per-language-concept.png)