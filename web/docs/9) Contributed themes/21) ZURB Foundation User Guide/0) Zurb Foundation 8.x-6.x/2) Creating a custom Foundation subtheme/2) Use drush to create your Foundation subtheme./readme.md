[You know what drush is, right?](https://github.com/drush-ops/drush) It's basically command-line access to common Drupal administrative tasks and configuration.

You can create your D8F6 subtheme with a simple drush command. And you can call your subtheme anything you like.

### What about Drush 9

At the time of writing this, the Foundation subtheme command isn't available in Drush 9\. You can view and follow this issue for more details: <https://www.drupal.org/project/zurb%5Ffoundation/issues/2920472>

### Using Drush 8

Change directory into your Drupal project (into the same folder level as your core, modules and themes folders - usually the web/ or public\_html/ folder if you've used [Composer](https://getcomposer.org/download/)).

```php
cd web
```

You'll need to ensure that the [ZURB Foundation theme you installed previously](https://www.drupal.org/docs/8/themes/zurb-foundation-user-guide/zurb-foundation-8x-6x/installing-the-drupal-foundation) is enabled. You can do that using the following drush 8 command:

```php
drush en zurb_foundation -y
```

For the sake of this example, let's call your subtheme "My Custom Theme" (of course, replace "My Custom Theme" with whatever you like). Change the name to use only lowercase letters, numbers and no spaces.

```php
drush fst mycustomtheme
```

It will ask you if you'd like to enable your theme. Simply type **y** to do this:

```php
The following extensions will be enabled: mycustomtheme
Do you really want to continue? (y/n):
```

### Add a description on the fly.

It's not necessary (you can do this step later) but if you like, you can use a slightly longer command to create a description for your subtheme. 

Instead of the above command, use:

```php
drush fst mycustomtheme --description="My super sweet awesome theme"
```