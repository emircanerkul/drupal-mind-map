Currently it's only possible to **add** or **remove** ALL the content on a per content type basis. We use drush to add and remove the demo content. First step is then to enable the social\_demo module:

```php
drush pm-enable social_demo -y

```

After this you might want to clear the cache of your drush app:

```php
drush cc drush

```

### Adding content

To add content use the following command:

```php
drush demo-content-add file user group topic event event_enrollment comment post like

```

The order (e.g. file -> user -> group) is important because the content is dependent on each other.

### Removing content

To remove content use:

```php
drush demo-content-remove file user group topic event event_enrollment comment post like

```