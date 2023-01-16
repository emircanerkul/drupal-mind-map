The following example shows how to load all approved apps from a developer, using the developer’s account details:

```php
/** @var \Drupal\user\Entity\User $account The user. */
/** @var \Drupal\apigee_edge\Entity\Storage\DeveloperAppStorageInterface $developer_app_storage */
$developer_app_storage = \Drupal::entityTypeManager()->getStorage('developer_app');
$apps = $developer_app_storage->loadByDeveloper($account->getEmail());

$active_apps = [];

/** @var \Drupal\apigee_edge\Entity\DeveloperApp $app */
foreach ($apps as $app) {
  if ($app->getStatus() == \Drupal\apigee_edge\Entity\AppInterface::STATUS_APPROVED) {
    $active_apps[] = $app;
  }
}
```