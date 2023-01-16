Installation profiles in Drupal have all the functionality of modules, including access to hooks and plugins and, critically, the ability to provide configuration for your site in the form of .yml files.

### Picking a machine name

First, you need a machine name for your profile. This is a name consisting of lowercase letters and underscores only. From here on, all references to _profilename_ imply the profile machine name.

E.g if your profile is for _Acme starter kit_ valid profile machine names would be

* acme\_starter\_kit
* acme\_starter
* acme\_starter\_profile
* acme\_kit

the following would be invalid

* acme-starter-kit
* acme-kit

This is because profiles are just like modules, and hence can implement hooks, - but `acme-kit_form_alter` would not constitute a valid PHP function name.

### Creating the file structure

Your installation profile will reside in its own _profilename_ directory in the /profiles directory of a Drupal 8 site.

All installation profiles must have a [_profilename_.info.yml](#info) file. They may also have:

1. [_profilename_.install file](#install)
2. [_profilename_.profile](#profile)
3. [config folder](#config)
4. [translations folder](#translations)

When packaged, your installation profile will also have modules, src, and themes directories as needed.