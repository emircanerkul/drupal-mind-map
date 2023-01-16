### Blocked IPs

The IP address is migrated. However, the id column from Drupal 7's ban\_ip table is not migrated and because of this every IP address migrated will produce a notice message, `[notice] New object was not saved, no error provided` and it is not possible to roll back the migration.

### Comment types

Drupal 7 allows the comments to have different fields on different content types. Typically the comments have _Author_, _Subject_ and _Comment body_ fields. Because the different Drupal 7 comments can have different fields, the migrations will create separate comment types for each content type:

* Content type _Foo_ will have a comment type _comment\_node\_foo_
* Content type _Bar_ will have a comment type _comment\_node\_bar_

The only exception to this is Forum comments. When the Forum module is enabled, comment type _comment\_forum_ is automatically created. The D7 Forum comments are migrated to this comment type.

#### Important note: Drupal 8+ Standard installation profile and Article content type

If your destination site was installed using the Standard installation profile you will have a content type called _Article_.

* This content type will come with a comment field called "_comment"_.
* The migration system can not assume that the destination site was installed using the Standard installation profile. Therefore a comment type _comment\_node\_article_ will be created and comments of the D7 Article content type will be migrated to this comment type.

As a result, your Article content type will now have two comment fields:

* _comment_ which came from Drupal 8+ Standard installation profile and is not used
* _comment\_node\_article_ which the migration system created

You most probably don't want to have two comment fields on the Article content type so you need to manually delete the _comment_ comment field from Article (admin/structure/types/manage/article/fields). After you've done this, you may also want to delete the _comment_ comment type (admin/structure/comment) if you're not using the _comment_ comment type anywhere else.

It is recommended that the unnecessary comment field is removed from the Article content type **before** running the migrations because Drupal 8+ currently has a bug related to comment field deletion, see [#2906470: Orphan comments and entries in comment\_entity\_statistics after comment field instance has been deleted](https://www.drupal.org/project/drupal/issues/2906470 "Status: Needs work").

### Entity Translation

Some Drupal 7 sites using the Entity Translation module will not have the entity\_translation\_revision table needed to successfully migrate. This can be resolved by running on the source site the updates (`entity_translation_update_*()`) added by [#2402247: \[UNSUPPORTED\] Migrate translation for enable revision](https://www.drupal.org/project/entity%5Ftranslation/issues/2402247 "Status: Needs review"). More information is available in [#2396103: \[DATA LOSS\] Translations deleted](https://www.drupal.org/project/entity%5Ftranslation/issues/2396103 "Status: Closed (fixed)").

### Field Collection

* Deprecated in Drupal 8, use [Paragraphs](https://www.drupal.org/project/paragraphs) module instead.
* To migrate the Field Collection fields and data to Paragraphs when upgrading from Drupal 7 to 9, make sure [Field Collection to Paragraphs](https://www.drupal.org/project/field%5Fcollection%5Fto%5Fparagraphs) module is installed beforehand.

### PHP Code

Filter formats not recognized will be migrated as filter\_null, a filter that simply returns an empty string. This means that any Input format using an unknown filter format won't display fields' content, although the content is in the database. It may be confusing. See [#2618332: Better handle replacement of missing filters with filter\_null](https://www.drupal.org/project/drupal/issues/2618332 "Status: Closed (fixed)") and [#2630578: Formats duplicated in D6 upgrade](https://www.drupal.org/project/drupal/issues/2630578 "Status: Closed (fixed)") regarding ways to improve this.

Filter formats not recognized include the infamous **PHP code filter**, and any other filter provided by a contrib module that is not available in your Drupal 8+ installation.

The PHP filter is **not** supported in Drupal 8 + —it's _very_ bad practice, but you can use the [PHP module](/project/php) for that if you really must.

To repair this situation, you have several alternatives:

* Check if the modules providing the filters have a Drupal 8+ version and install them
* Edit and save the affected input formats. This will remove the reference to format\_null, and the contents will start showing. Note that since the original filter doesn't exist, contents are not being filtered and unreplaced tokens may be shown, or even the site can be exposed to any security issue
* Edit the contents and change to another input format. This suffers the same problems as the previous point

### Duplicate field \_config\_instances

#### The problem

Drupal 7 allows duplicate field\_name\_bundle entries in their "field\_config\_instance" database. The "field\_name\_bundle" is a Drupal 8+ index key which consists of "field\_name", "entity\_type" and "bundle". This index key is unfortunately NOT unique and therefore allows multiple duplicate entries.   
This leads to migrations, which depend on "upgrade\_d7\_field\_instance" to throw the following error while migrating, even if "upgrade\_d7\_field\_instance" successfully migrated before

> \[error\] Migration upgrade\_d7\_field\_instance\_widget\_settings did not meet the requirements. Missing migrations upgrade\_d7\_field\_instance. requirements: upgrade\_d7\_field\_instance.

#### The solution

Look for duplicate "field\_name", "entity\_type", "bundle" combinated entries inside the "field\_config\_instance" d7 source database and delete them.

For more information, see [#3307506: "Missing migrations upgrade\_d7\_field\_instance" because of duplicate field\_name\_bundle entries in D7 field\_config\_instance](https://www.drupal.org/project/drupal/issues/3307506 "Status: Active").

### Files

#### File entity

If your source Drupal 7 site is using [File Entity](/project/file%5Fentity) then the filename in the database may be the title not the filename on disk. After the migration this may result in errors when editing migration content type that use a file field. To prevent this a custom migration is needed. An example is in [#3022910: Prevent migrated files from having an incorrect value at file\_managed.filename](https://www.drupal.org/project/drupal/issues/3022910 "Status: Closed (fixed)").

#### Migrating Files fails

If your source Drupal 7 site is using a non-standard path for the public file system i.e anything other than `sites/default/files`, you may experience issues when attempting to migrate physical files:

`Migrating Files and assets[notice] Processed 7065 items (0 created, 0 updated, 7065 failed, 0 ignored) - done with 'upgrade_d7_file' [error] upgrade_d7_file Migration - 7065 failed.`

This means Drupal 8+ can read that there are 7065 file entities in the Drupal 7 database, but it can't reach the physical files themselves. This error will also lead to the Media entity migration failing, as the files are not present for the entity to link.

This may be because regardless of the file location you specify in your file migration (`migrate_plus.migration.upgrade_d7_file.yml`), and any override for the system file path defined in `settings.php`, the **Migrate module will query the Drupal 7 database directly to get the file path and ignores all other settings**.

The file path the Migrate modules use will be stored in the variable `file_public_path`.

To check what your Drupal 7 system file path is, in your D7 site run `$ drush vget file_public_path`, and `$ drush vget file_temporary_path` for temp files.

**Note:** However, that the `vget` result can be misleading. **If you have specified a different file path in your `settings.php` or `settings.local.php`, the drush command will return _that_ value instead, NOT the value stored in the database!** To ensure you get the value Migrate will use, ensure you haven't overridden the file path in D7's `settings.php` or `settings.local.php`:

`$conf['file_public_path'] = '/my/great/file/path'; $conf['file_temporary_path'] = '/some/temp/path';`

Remove any overrides, then check the variable value. If you want to change it, run: `$ drush vset file_public_path = /place/my/files/live` (normally `sites/default/files`).

### Plain Text Fields

#### Conflicting text processing settings in Drupal 7

In Drupal 7, the text processing settings are defined on Field _instance_ settings. In other words, the same field can be used on two (or more) content types and the text processing settings can be _Plain text_ on one content type and _Filtered text_ on another.

Drupal 8+ has separate field _storage_ types Text (plain) and Text (formatted). There's also Text (plain, long) and Text (formatted, long). The important part here is that this selection is done on the field _storage_ level. In other words, the plain/formatted selection can't be changed per content type.

The migration system makes no assumptions. If the migration system detects conflicting text processing settings, these fields are skipped with a log message. The site builder has two options:

**1\. The text processing settings can be altered on a Drupal 7 site so that all content types that use the text field have the same text processing setting.**

* Pay attention when selecting which way to harmonize the processing settings to avoid possible cross-site scripting (XSS) security issues.
* If your field was set to _Plain text_ in Drupal 7 and untrusted users were able to post content to this field, it is possible that the fields contain malicious input. This was not leading to an XSS on your Drupal 7 site because the field was set to _Plain text_ and thus the malicious input was not executed. If you now change the field now to _Filtered text_, make sure that the Text format is not Full HTML or similar which would allow the malicious input.

**2.** If you need to have two different formatting settings in the destination site, you need to develop a custom migration that splits the Drupal 7 fields into two separate fields. Find more information on customizing the migrations read [Customize migrations](https://www.drupal.org/docs/upgrading-drupal/upgrading-from-drupal-6-or-drupal-7/customize-migrations).

#### Text with summary + plain text formatting setting in Drupal 7

Drupal 7 has a field type with _Long text and summary_. The corresponding field type in Drupal 8+ is Text (formatted, long, with summary). In Drupal 7 it is possible to configure on field instance settings that the text processing is _Plain text_. The _Text (formatted, long, with summary)_ fields are always formatted text in Drupal 8+.

The migration system makes no assumptions. If the migration system detects a _Long text and summary_ field with Plain text formatting settings, the field is skipped with a log message. The site builder has the same two options as above:

**1.** Change the field formatting setting from _Plain text_ to _Filtered text_ in Drupal 7.

* The same remark described above about cross-site scripting applies here.

**2.** Create a custom migration path and build your own logic on how you want to migrate the fields to the destination site. Find more information on customizing the migrations read [Customize migrations](https://www.drupal.org/docs/upgrading-drupal/upgrading-from-drupal-6-or-drupal-7/customize-migrations).

#### Text with summary: Individual value, summary and format migration through one process plugin

Sometimes it is needed to migrate the value, summary and format of a textarea field for a certain content bundle individually, because you are using different filter formats on your d9 site, compared to your d7 site. So instead of using the generated "get" process plugin, example:

```yaml
process:
  body:
    -
      plugin: get
      source: body
```

We can use the "sub\_process" plugin instead, to individually process "value", "summary" and "format" like this:

```yaml
process:
  body:
    plugin: sub_process
    source: body
    process:
      value: value
      summary: summary
      format:
        plugin: static_map
        source: format
        map:
          full_html: full_html
          filtered_html: basic_html
          pure_html: full_html
          plain_text: plain_text
          php_code: full_html
```

This way, it is possible to use different plugins for each textarea attribute, like "static\_map" in the example above, or just plainly map the data (e.g. value: value). If you do not want to override every single generated Migration YAML, you can also perform the override using "hook\_migrations\_plugins\_alter()".

### Rules

* Since the inner workings are different from Drupal 7, make sure to read [D8 Rules Essentials](https://www.drupal.org/docs/contributed-modules/d8-rules-essentials) beforehand.
* Trouble with before content save? [#3026148: Editing a field upon content save](https://www.drupal.org/project/rules/issues/3026148 "Status: Needs work") might help.
* There is an issue in the Rules project for writing a migration. [#2899453: Support for core Migrate - migrated D6, D7 Rules to D8](https://www.drupal.org/project/rules/issues/2899453 "Status: Closed (won't fix)").