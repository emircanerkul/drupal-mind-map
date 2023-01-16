### Configuration files

Drupal 8 installation profiles can contain configuration files. You can start by taking the configuration directory (_config_ folder) of an installed, configured site and copying it into the _config/install_ folder in your profile.

If you are using the standard\_install() method mentioned above, you should copy user.role.administrator.yml from the standard profile to your custom profile.

Once that's in place, there are some other required tasks:

1. Copy all of the modules and themes listed within _core.extension.yml_ into [your profile's info file](#info) (using the new info file's format).
2. Delete _core.extension.yml_ (and possibly [some other config files](https://drupal.stackexchange.com/questions/182477/are-there-any-pitfalls-pointing-config-sync-to-profiles-config-install)).
3. Remove all of the UUIDs and default\_config\_hash from your config files so that they don't conflict with those of new sites. This can be done quite easily on the command line like so all on one line:  
```php  
find /path/to/PROFILE_NAME/config/install/ -type f -exec sed -i -e '/^uuid: /d' {} \;  
find /path/to/PROFILE_NAME/config/install/ -type f -exec sed -i -e '/_core:/,+1d' {} \;  
```

In case you are on Mac OSX, the '-e' flag won't work. It duplicates the files and appends '-e' to the file (i.e. file-name.yml-e). The ",+1d" also will not work on Mac OSX. Here's the command for Mac OSX.

```php
find /path/to/PROFILE_NAME/config/install/ -type f -exec sed -i '' '/^uuid: /d' {} \;
find /path/to/PROFILE_NAME/config/install/ -type f -exec sed -i '' '/_core:/{N;d;}' {} \;

```

If you just want to grab an existing site's configuration, and don't need to end up with a formal installation profile (for sharing on Drupal.org, for example), you can use the [Configuration Installer](https://www.drupal.org/project/config%5Finstaller) installation profile to install a new site from the configuration of another site.

### Default content

You can also include default content by making [default\_content](https://www.drupal.org/project/default%5Fcontent) a dependency of your installation profile and using it to import JSON-formatted content.

The configuration that needs content to work is possible by putting content (and configuration as needed) in modules you make (which your profile can depend on) that themselves depend on default\_content.