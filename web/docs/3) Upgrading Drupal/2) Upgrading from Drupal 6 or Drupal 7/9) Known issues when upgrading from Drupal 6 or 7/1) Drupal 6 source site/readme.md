### Aggregator Categories

Since Drupal 8, Drupal no longer has the concept of aggregator categories and therefore they're not migrated.

### Allowed protocols

Since Drupal 8 the protocols in the "filter\_protocols" are stored as a container parameter, so in case you had changed the variable "filter\_allowed\_protocols", enter it into your `services.yml` file.

### Allowed vocabularies of taxonomy term reference field

In Drupal 6, the list of applicable content types for a given vocabulary is defined in vocabulary settings. As of Drupal 8, the allowed vocabularies can be defined on taxonomy term reference field settings. This setting is currently not migrated, allowing all vocabularies to be referenced in destination site. See [#3042533: D6 taxonomy term fields are not migrated with allowed vocabularies](https://www.drupal.org/project/drupal/issues/3042533 "Status: Closed (fixed)"). You can manually edit the taxonomy term reference field settings in the destination site after the upgrade and select the allowed vocabulary. 

### Fields missing on the edit form or the view page

One other thing that may be a point of confusion is when you run a migration that seems to be successful but afterward, you don't see your fields on the edit form. Go to the _Content Types_ administration page and check the _Manage Form Display_ tab for each content type. The fields added by the upgrade may be hidden on the edit form. If so, drag them up to be visible. Similarly, if they don't appear in the node view, the fields added by Migrate may have gotten hidden on the _Manage Display_ tab and you may need to make them visible there. In migrating custom fields on an entity, the [Migrate Plus](/project/migrate%5Fplus) module could help.

### Homepage loads and the theme is broken

When running migrations, sometimes the page is white and only loads a few items. Basically, it looks like a broken theme. Visiting /user and returning to the home page normally resolves it.

### Menu UI

The menu\_primary\_links\_source and menu\_secondary\_links\_source variables are not migrated, because they do not have counterparts in Drupal 8+.

### Modules and themes

Before starting the migration, new modules and themes should be enabled, as well as the admin theme (if there is one) set.

### Node content types

The default configuration in Drupal 6 has _Story_ and _Page_ content types. In Drupal 8+ the default content types are called _Article_ and _Basic Page_ (which has a machine name 'page' just like in Drupal 6).

* Migration will map the Drupal 6 _Page_ to _Page_ content type because the machine names of these content types match.
* Migration will create the _Story_ content type in the destination site. You might want to delete the Drupal 8+ _Article_ content type if you don't need it. For further details, please refer to [#2236289: Migrating "story" nodes from D6 creates new content type in D8](https://www.drupal.org/project/drupal/issues/2236289 "Status: Closed (fixed)").

### Profile categories

Fields grouped by the _Profile_ module in Drupal 6 will not be grouped in Drupal 8+.

### Profile field (list selection)

The "allowed values" setting of the resulting field in the destination will be a combination of all selected user values and the currently allowed values in Drupal 6 and not just the allowed values in Drupal 6.

### Text/Input formats

Filter formats not recognized by the destination site will be migrated as filter\_null, a filter that simply returns an empty string. This means that any Input format using an unknown filter format won't display fields' content, although the content is in the database. It may be confusing. See [#2618332: Better handle replacement of missing filters with filter\_null](https://www.drupal.org/project/drupal/issues/2618332 "Status: Closed (fixed)") and [#2630578: Formats duplicated in D6 upgrade](https://www.drupal.org/project/drupal/issues/2630578 "Status: Closed (fixed)") regarding ways to improve this.

Filter formats not recognized include the infamous **PHP code filter**, and any other filter provided by a contrib module that is not available in your destination site..

The PHP filter is not supported in Drupal 8+—it's _very_ bad practice, but you can use the [PHP module](/project/php) for that if you really must.

To repair this situation, you have several alternatives:

* Check if the modules providing the filters have a Drupal 8+ version and install them
* Edit and save the affected input formats. This will remove the reference to format\_null, and the contents will start showing. Note that since the original filter doesn't exist, contents are not being filtered and unreplaced tokens may be shown, or even the site can be exposed to any security issue
* Edit the contents and change to another input format. This suffers the same problems as the previous point

### Time Zones and Dates

Drupal 6 uses a time zone offset to compute local time. Drupal 7+ or higher use a time zone name. Unfortunately, the PHP function `timezone_name_from_abbr()` which converts the offset to time zone names will produce different time zone names depending upon whether or not daylight savings time is turned on or not on your server. For example, the time offset of 3600 converts to Europe/Paris if daylight saving time is off and Europe/London if the daylight saving time is on. The migration is set to ignore daylight saving time.

In time zones that use Daylight Saving Time, a date could be interpreted differently by Drupal 8+ compared with Drupal 6\. For example, if the time is around midnight, the date could be seen as a different day. This causes problems especially if _date_ tokens are used to build paths (e.g. URL aliases, file field paths). Two possible solutions are shown in [#2926421: Handle date inconsistencies between D6 and D8](https://www.drupal.org/project/drupal/issues/2926421 "Status: Closed (outdated)").

### URL Aliases

When migrating URL aliases for a language that is not enabled on the destination site, none of the aliases will work until you enable the language on the destination site.

### Who's online block

The User activity settings are not migrated. This needs to be manually edited in the relevant View under filters/access ([#2169327: Migrate the User Activity block setting](https://www.drupal.org/project/drupal/issues/2169327 "Status: Closed (works as designed)")).