Other core modules provide more specialized process plugins to support migration from Drupal 6 and Drupal 7\. These plugins are less reusable but may serve as examples for other specialized process plugins.

* [block\_plugin\_id](https://api.drupal.org/api/drupal/core%21modules%21block%21src%21Plugin%21migrate%21process%21BlockPluginId.php/class/BlockPluginId)  
**Deprecated**. Use the `migrate.lookup` service instead.
* [block\_region](https://api.drupal.org/api/drupal/core%21modules%21block%21src%21Plugin%21migrate%21process%21BlockRegion.php/class/BlockRegion)  
 Map regions in the source site's theme to regions in the destination site's theme.
* [block\_settings](https://api.drupal.org/api/drupal/core%21modules%21block%21src%21Plugin%21migrate%21process%21BlockSettings.php/class/BlockSettings)  
 Map block settings.
* [block\_theme](https://api.drupal.org/api/drupal/core%21modules%21block%21src%21Plugin%21migrate%21process%21BlockTheme.php/class/BlockTheme)  
 Map a block's theme.
* [block\_visibility](https://api.drupal.org/api/drupal/core%21modules%21block%21src%21Plugin%21migrate%21process%21BlockVisibility.php/class/BlockVisibility)  
**Deprecated**. Use the `migrate.lookup` service instead.
* [field\_type](https://api.drupal.org/api/drupal/core%21modules%21field%21src%21Plugin%21migrate%21process%21FieldType.php/class/FieldType)  
 Map field types.
* [field\_type\_defaults](https://api.drupal.org/api/drupal/core%21modules%21field%21src%21Plugin%21migrate%21process%21FieldTypeDefaults.php/class/FieldTypeDefaults)  
**Deprecated in 8.6.x, removed in 9.0.x**. Use `d6_field_type_defaults` or `d7_field_type_defaults` instead.
* [process\_field](https://api.drupal.org/api/drupal/core%21modules%21field%21src%21Plugin%21migrate%21process%21ProcessField.php/class/ProcessField)  
 Get the value from a method call on a field plugin instance.
* [field\_formatter\_settings\_defaults](https://api.drupal.org/api/drupal/core%21modules%21field%21src%21Plugin%21migrate%21process%21d6%21FieldFormatterSettingsDefaults.php/class/FieldFormatterSettingsDefaults)  
 Set field formatter settings when the map didn't map: for date formatters, the fallback format, for everything else, empty array.
* [d6\_field\_instance\_defaults](https://api.drupal.org/api/drupal/core%21modules%21field%21src%21Plugin%21migrate%21process%21d6%21FieldInstanceDefaults.php/class/FieldInstanceDefaults)  
 Map field instance defaults for Drupal 6.
* [d6\_field\_instance\_option\_translation](https://api.drupal.org/api/drupal/core%21modules%21field%21src%21Plugin%21migrate%21process%21d6%21FieldInstanceOptionTranslation.php/class/FieldInstanceOptionTranslation)  
 Determines the settings property and translation for boolean fields.
* [d6\_field\_field\_settings](https://api.drupal.org/api/drupal/core%21modules%21field%21src%21Plugin%21migrate%21process%21d6%21FieldInstanceSettings.php/class/FieldInstanceSettings)  
 Map field instance settings for Drupal 6.
* [field\_instance\_widget\_settings](https://api.drupal.org/api/drupal/core%21modules%21field%21src%21Plugin%21migrate%21process%21d6%21FieldInstanceWidgetSettings.php/class/FieldInstanceWidgetSettings)  
 Get the field instance widget settings.
* [d6\_field\_option\_translation](https://api.drupal.org/api/drupal/core%21modules%21field%21src%21Plugin%21migrate%21process%21d6%21FieldOptionTranslation.php/class/FieldOptionTranslation)  
 Determines the allowed values translation for select lists.
* [field\_settings](https://api.drupal.org/api/drupal/core%21modules%21field%21src%21Plugin%21migrate%21process%21d6%21FieldSettings.php/class/FieldSettings)  
 Get the field default/mapped settings.
* [d6\_field\_type\_defaults](https://api.drupal.org/api/drupal/core%21modules%21field%21src%21Plugin%21migrate%21process%21d6%21FieldTypeDefaults.php/class/FieldTypeDefaults)  
 Gives us a chance to set per field defaults.
* [d7\_field\_instance\_defaults](https://api.drupal.org/api/drupal/core%21modules%21field%21src%21Plugin%21migrate%21process%21d7%21FieldInstanceDefaults.php/class/FieldInstanceDefaults)  
 Map field instance defaults for Drupal 7.
* [d7\_field\_instance\_option\_translation](https://api.drupal.org/api/drupal/core%21modules%21field%21src%21Plugin%21migrate%21process%21d7%21FieldInstanceOptionTranslation.php/class/FieldInstanceOptionTranslation)  
 Determines the settings property and translation for boolean fields.
* [d7\_field\_instance\_settings](https://api.drupal.org/api/drupal/core%21modules%21field%21src%21Plugin%21migrate%21process%21d7%21FieldInstanceSettings.php/class/FieldInstanceSettings)  
 Map field instance settings for Drupal 7.
* [d7\_field\_option\_translation](https://api.drupal.org/api/drupal/core%21modules%21field%21src%21Plugin%21migrate%21process%21d7%21FieldOptionTranslation.php/class/FieldOptionTranslation)  
 Determines the allowed values translation for select lists.
* [d7\_field\_settings](https://api.drupal.org/api/drupal/core%21modules%21field%21src%21Plugin%21migrate%21process%21d7%21FieldSettings.php/class/FieldSettings)  
 Get the field default/mapped settings.
* [d7\_field\_type\_defaults](https://api.drupal.org/api/drupal/core%21modules%21field%21src%21Plugin%21migrate%21process%21d7%21FieldTypeDefaults.php/class/FieldTypeDefaults)  
 Gives us a chance to set per field defaults.
* [d6\_cck\_file](https://api.drupal.org/api/drupal/core%21modules%21file%21src%21Plugin%21migrate%21process%21d6%21CckFile.php/class/CckFile)  
**Deprecated in 8.3.x, removed in 9.0.x**. Use the `migrate.lookup` service instead.
* [d6\_field\_file](https://api.drupal.org/api/drupal/core%21modules%21file%21src%21Plugin%21migrate%21process%21d6%21FieldFile.php/class/FieldFile)  
**Deprecated**. Use the `migrate.lookup` service instead.
* [file\_uri](https://api.drupal.org/api/drupal/core%21modules%21file%21src%21Plugin%21migrate%21process%21d6%21FileUri.php/class/FileUri)  
 Process the file url into a D8 compatible URL.
* [filter\_id](https://api.drupal.org/api/drupal/core%21modules%21filter%21src%21Plugin%21migrate%21process%21FilterID.php/class/FilterID)  
 Maps text filter IDs.
* [filter\_settings](https://api.drupal.org/api/drupal/core%21modules%21filter%21src%21Plugin%21migrate%21process%21FilterSettings.php/class/FilterSettings)  
 Adds the default allowed attributes to `filter_html`'s `allowed_html` setting.
* [filter\_format\_permission](https://api.drupal.org/api/drupal/core%21modules%21filter%21src%21Plugin%21migrate%21process%21d6%21FilterFormatPermission.php/class/FilterFormatPermission)  
 Migrate filter format serial to string id in permission name.
* [d6\_imagecache\_actions](https://api.drupal.org/api/drupal/core%21modules%21image%21src%21Plugin%21migrate%21process%21d6%21ImageCacheActions.php/class/ImageCacheActions)  
 Maps imagecache actions.
* [content\_translation\_enabled\_setting](https://api.drupal.org/api/drupal/core%21modules%21language%21src%21Plugin%21migrate%21process%21ContentTranslationEnabledSetting.php/class/ContentTranslationEnabledSetting)  
 Determines the content translation setting.
* [language\_domains](https://api.drupal.org/api/drupal/core%21modules%21language%21src%21Plugin%21migrate%21process%21LanguageDomains.php/class/LanguageDomains)  
 This plugin makes sure that no domain is empty if domain negotiation is used.
* [language\_negotiation](https://api.drupal.org/api/drupal/core%21modules%21language%21src%21Plugin%21migrate%21process%21LanguageNegotiation.php/class/LanguageNegotiation)  
 Processes the arrays for the language types' negotiation methods and weights.
* [language\_types](https://api.drupal.org/api/drupal/core%21modules%21language%21src%21Plugin%21migrate%21process%21LanguageTypes.php/class/LanguageTypes)  
 Processes the array for the language types.
* [field\_link](https://api.drupal.org/api/drupal/core%21modules%21link%21src%21Plugin%21migrate%21process%21FieldLink.php/class/FieldLink)  
 Transform a pre-Drupal 8 formatted link for use in Drupal 8.
* [d6\_cck\_link](https://api.drupal.org/api/drupal/core%21modules%21link%21src%21Plugin%21migrate%21process%21d6%21CckLink.php/class/CckLink)  
**Deprecated in 8.3.x, removed in 9.0.x**. Use `field_link` instead.
* [d6\_field\_link](https://api.drupal.org/api/drupal/core%21modules%21link%21src%21Plugin%21migrate%21process%21d6%21FieldLink.php/class/FieldLink)  
**Deprecated in 8.4.x, removed in 9.0.x**. Use `field_link` instead.
* [link\_uri](https://api.drupal.org/api/drupal/core%21modules%21menu%5Flink%5Fcontent%21src%21Plugin%21migrate%21process%21LinkUri.php/class/LinkUri)  
 Generates an internal URI from the source value.
* [LinkUri](https://api.drupal.org/api/drupal/core%21modules%21menu%5Flink%5Fcontent%21src%21Plugin%21migrate%21process%21d6%21LinkUri.php/class/LinkUri)  
**Deprecated in 8.2.x, removed in 9.0.x**. Use `link_uri` instead.
* [InternalUri](https://api.drupal.org/api/drupal/core%21modules%21menu%5Flink%5Fcontent%21src%21Plugin%21migrate%21process%21d7%21InternalUri.php/class/InternalUri)  
**Deprecated in 8.2.x, removed in 9.0.x**. Use `link_uri` instead.
* [node\_complete\_node\_lookup](https://api.drupal.org/api/drupal/core%21modules%21migrate%5Fdrupal%21src%21Plugin%21migrate%21process%21NodeCompleteNodeLookup.php/class/NodeCompleteNodeLookup)  
 Returns only the `nid` from `migration_lookup` on `node_complete` migration.
* [node\_complete\_node\_revision\_lookup](https://api.drupal.org/api/drupal/core%21modules%21migrate%5Fdrupal%21src%21Plugin%21migrate%21process%21NodeCompleteNodeRevisionLookup.php/class/NodeCompleteNodeRevisionLookup)  
 Returns only the `vid` from `migration_lookup` on `node_complete` migration.
* [node\_complete\_node\_translation\_lookup](https://api.drupal.org/api/drupal/core%21modules%21migrate%5Fdrupal%21src%21Plugin%21migrate%21process%21NodeCompleteNodeTranslationLookup.php/class/NodeCompleteNodeTranslationLookup)  
 Returns `nid` and `langcode` from `migration_lookup` on `node_complete` migration.
* [node\_update\_7008](https://api.drupal.org/api/drupal/core%21modules%21node%21src%21Plugin%21migrate%21process%21d6%21NodeUpdate7008.php/class/NodeUpdate7008)  
 Split the 'administer nodes' permission from 'access content overview'.
* [path\_set\_translated](https://api.drupal.org/api/drupal/core%21modules%21path%21src%21Plugin%21migrate%21process%21PathSetTranslated.php/class/PathSetTranslated)  
 A process plugin to update the path of a translated node.
* [d6\_url\_alias\_language](https://api.drupal.org/api/drupal/core%21modules%21path%21src%21Plugin%21migrate%21process%21d6%21UrlAliasLanguage.php/class/UrlAliasLanguage)  
 Url alias language code process.
* [search\_configuration\_rankings](https://api.drupal.org/api/drupal/core%21modules%21search%21src%21Plugin%21migrate%21process%21SearchConfigurationRankings.php/class/SearchConfigurationRankings)  
 Generate configuration rankings.
* [d6\_search\_configuration\_rankings](https://api.drupal.org/api/drupal/core%21modules%21search%21src%21Plugin%21migrate%21process%21d6%21SearchConfigurationRankings.php/class/SearchConfigurationRankings)  
**Deprecated in 8.7.x, removed in 9.0.x**. Use `search_configuration_rankings` instead.
* [system\_update\_7000](https://api.drupal.org/api/drupal/core%21modules%21system%21src%21Plugin%21migrate%21process%21d6%21SystemUpdate7000.php/class/SystemUpdate7000)  
 Rename blog and forum permissions to be consistent with other content types.
* [timezone](https://api.drupal.org/api/drupal/core%21modules%21system%21src%21Plugin%21migrate%21process%21d6%21TimeZone.php/class/TimeZone)  
 Process the D6 Timezone offset into a D8 compatible timezone name.
* [forum\_vocabulary](https://api.drupal.org/api/drupal/core%21modules%21taxonomy%21src%21Plugin%21migrate%21process%21ForumVocabulary.php/class/ForumVocabulary)  
 Checks if the vocabulary being migrated is the one used for forums.
* [convert\_tokens](https://api.drupal.org/api/drupal/core%21modules%21user%21src%21Plugin%21migrate%21process%21ConvertTokens.php/class/ConvertTokens)  
 Plugin to replace `!tokens` with `[tokens]`.
* [profile\_field\_settings](https://api.drupal.org/api/drupal/core%21modules%21user%21src%21Plugin%21migrate%21process%21ProfileFieldSettings.php/class/ProfileFieldSettings)  
 Maps profile field settings.
* [user\_langcode](https://api.drupal.org/api/drupal/core%21modules%21user%21src%21Plugin%21migrate%21process%21UserLangcode.php/class/UserLangcode)  
 Provides a process plugin for the user langcode.
* [user\_update\_8002](https://api.drupal.org/api/drupal/core%21modules%21user%21src%21Plugin%21migrate%21process%21UserUpdate8002.php/class/UserUpdate8002)  
 Keep the predefined roles for `rid` 1 and 2.
* [d6\_profile\_field\_option\_translation](https://api.drupal.org/api/drupal/core%21modules%21user%21src%21Plugin%21migrate%21process%21d6%21ProfileFieldOptionTranslation.php/class/ProfileFieldOptionTranslation)  
 Determines the settings property and translation.
* [user\_update\_7002](https://api.drupal.org/api/drupal/core%21modules%21user%21src%21Plugin%21migrate%21process%21d6%21UserUpdate7002.php/class/UserUpdate7002)  
 Converts user time zones from time zone offsets to time zone names.