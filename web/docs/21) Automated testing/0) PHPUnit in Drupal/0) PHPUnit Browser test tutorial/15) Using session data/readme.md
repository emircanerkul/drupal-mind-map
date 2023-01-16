You can inspect session data for the most recent request as follows:

```php
    $session_data = $this->container->get('session_handler.write_safe')->read($this->getSession()->getCookie($this->getSessionName()));
    $session_data = unserialize(explode('_sf2_meta|', $session_data)[1]);

```