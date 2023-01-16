---
url: https://www.drupal.org/docs/drupal-apis/entity-api/bundles
description: >-
  In Drupal 8, bundles are a type of container for information that holds the
  field or setting definitions. They are sometimes called "sub-types". Bundles
  are optional and in the hierarchy of container types for information they fit
  below entity types. Entity variants (content and configuration; many entities
  come in pairs, e.g.
published_time: '2013-11-25T10:37:41+00:00'
modified_time: '2022-02-22T17:17:20+00:00'
---
In Drupal 8, **bundles** _are a type of container for information that holds the field or setting definitions_. They are sometimes called "**sub-types**". Bundles are optional and in the hierarchy of container types for information they fit below entity types.

* Entity variants (content and configuration; many entities come in pairs, e.g. blocks)  
   * Entity types  
         * **Bundles**, or sub-types (optional)

Examples of those container types are as follows:

* Entity Variants:  
   1. Content  
         * Content Entity Types:  
                  1. Node  
                              * Node **Bundles**, aka Content Types:  
                                             1. Article  
                                             2. Basic page  
                  2. Taxonomy Terms  
                              * Taxonomy **Bundles**, aka Vocabularies:  
                                             1. <_Vocabulary A_\>  
                                             2. <_Vocabulary B_\>  
                                             3. <_Vocabulary Etc._\>  
                  3. Custom Blocks  
                              * Custom Block **Bundles**, aka Custom Block Types:  
                                             1. <_Block Type L_\>  
                                             2. <_Block Type M_\>  
                                             3. <_Block Type Etc._\>  
                  4. User _(has no child bundles)_  
                  5. _<Custom content entity type X>_  
                  6. _<Custom content entity type Y>_  
                  7. _<Custom content entity type Etc.>_  
   2. Configuration  
         * Configuration Entity Types:  
                  1. Custom Block types_(has no child bundles?)_  
                  2. View_(has no child bundles)_  
                  3. Menu _(has no child bundles)_  
                  4. Role _(has no child bundles)_  
                  5. _<Custom config entity type I>_  
                  6. _<Custom config entity type II>_  
                  7. _<Custom config entity type Etc.>_