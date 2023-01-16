If a test needs to uninstall or install modules as part of the test itself:

```php
$this->container->get('module_installer')->uninstall(['comment']);
$status = $this->container->get('module_installer')->install(['book']);

```