In browser tests, working with the session is a little harder, as the test code isn't in the same session as the code that runs during page requests. The session data can be loaded from the database, but needs to be unserialized from PHP's internal format:

```php
    // Test code:
    $sid = $this->getSession()->getCookie($this->getSessionName());

    $session_data = $this->container->get('session_handler.storage')->read($sid);
    $session_data = $this->unserialize_php($session_data);

  /**
   * Converts session data from the database into an array of data.
   *
   * This is necessary because PHP's methods write to the $_SESSION superglobal,
   * and we want to work with session data that isn't ours.
   *
   * See https://stackoverflow.com/questions/530761/how-can-i-unserialize-session-data-to-an-arbitrary-variable-in-php
   *
   * @param string $session_data
   *   The serialised session data. (Note this is not the same serialisation
   *   format as used by serialize().)
   *
   * @return array
   *   An array of data.
   */
  protected function unserialize_php($session_data) {
    $return_data = array();
    $offset = 0;
    while ($offset < strlen($session_data)) {
        if (!strstr(substr($session_data, $offset), "|")) {
            throw new \Exception("invalid data, remaining: " . substr($session_data, $offset));
        }
        $pos = strpos($session_data, "|", $offset);
        $num = $pos - $offset;
        $varname = substr($session_data, $offset, $num);
        $offset += $num + 1;
        $data = unserialize(substr($session_data, $offset));
        $return_data[$varname] = $data;
        $offset += strlen(serialize($data));
    }
    return $return_data;
  }
    
```

To write session data, we need to implement our own handling of the database, as the session handler service assumes that the current user session is being written:

```php
    // Test code:
    $session_data['_sf2_attributes']['my_session_attribute'] = 'mydata';
    $this->writeSession($this->account->id(), $sid, $this->serialize_php($session_data));

  /**
   * Converts an array of data into a session data string.
   *
   * This is necessary because PHP's methods write to the $_SESSION superglobal,
   * and we want to work with session data that isn't ours.
   *
   * See https://stackoverflow.com/questions/530761/how-can-i-unserialize-session-data-to-an-arbitrary-variable-in-php
   *
   * @param array $session_data
   *   The session data.
   *
   * @return string
   *   The serialised data. (Note this is not the same serialisation format as
   *   used by serialize().
   */
  protected function serialize_php($data) {
    $return_data = '';
    foreach ($data as $key => $key_data) {
      $return_data .= "{$key}|" . serialize($key_data);
    }

    return $return_data;
  }

  /**
   * Write data to the given session.
   *
   * This exists because we can't use
   * \Drupal\Core\Session\SessionHandler::write() as that assumes the current
   * session is being written, and will fail within tests as no session exists.
   *
   * @param int $uid
   *   The user ID.
   * @param int $sid
   *   The session ID.
   * @param string $value
   *   The session data. Use serialize_php() to format this.
   */
  protected function writeSession($uid, $sid, $value) {
    $fields = [
      'uid' => $uid,
      'hostname' => 'testing',
      'session' => $value,
      'timestamp' => REQUEST_TIME,
    ];
    $this->container->get('database')->merge('sessions')
      ->keys(['sid' => Crypt::hashBase64($sid)])
      ->fields($fields)
      ->execute();
  }
```