Once you have generated a theme using Starterkit command, you may wish to track upstream changes in the Starterkit theme in order to incorporate upstream improvements and bug fixes into your theme. This is useful when you are maintaining a base theme that is based on a Starterkit theme.

### Comparing versions of the core Starterkit theme

First, you will need to check which version of Starterkit was used to generate your theme. The starterkit theme command line tool stores information about the source that was used for generating the theme. This can be found from the `my_new_theme.info.yml` under `generator` key. For example, the following metadata indicates that a 9.3.0 version of the core `starterkit_theme` was used for generating the theme:

```php
generator: starterkit_theme:9.3.0
```

With this information, it is possible to do a comparison between two versions using [Git](https://www.drupal.org/docs/develop/git/introduction-to-drupal-git) with the [Drupal core repository](https://git.drupalcode.org/project/drupal). For example, to compare 9.3.0 and 9.4.0, use the following command on a clone of Drupal core:

```php
git diff 9.3.0 9.4.0 core/themes/starterkit_theme/
```

### Reviewing the list of theme changes by issue

If there are many changes between versions of a theme, or it's not clear which are important to add to your theme, you can review the list of individual changes and the issues that introduced them. To get a list of issues that have introduced changes, use the following command:

```php
git log 9.4.0 9.3.0 core/themes/starterkit_theme/
```

Each of the changes include an issue number which represents a node in Drupal.org. With the node ID, it is possible to get full context of the issue by visiting `https://drupal.org/node/[node_id]`. For example, if the commit message begins with "Issue #1234567 by ....", the page to visit is `https://drupal.org/node/1234567`.

### Comparing versions of a contributed project Starterkit theme

These commands also work for contributed projects using the Starterkit theme command. In this case you'll have to clone the contributed project with git, and run the same command without the path, e.g.:

```php
git diff 1.0.0 1.5.0
```

```php
git log 1.0.0 1.5.0
```