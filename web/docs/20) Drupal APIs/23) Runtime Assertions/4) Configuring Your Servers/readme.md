There are several configuration directives that affect assertions:

* `zend.assertions`: set to -1 on production servers and 1 on development servers. If you use automated test runners it is best to run tests once with each setting before sending to production. PHP ships with zend.assertions set to 1, and most service providers change this to -1.
* `assert.exception`: should always be set to 1 (has no effect if `zend.assertions` is disabled)
* `assert.active`: should always be set to 1 (has no effect if `zend.assertions` is disabled). PHP defaults to 1, but overridden by the Drupal default `.htaccess` file so you may need to re-enable it in settings.local.php.