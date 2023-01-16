As already mentioned it is very important to enable debug output in the browser test so that you can see the pages visited by the browser. If a test fails then PHPUnit stops the execution of the test where it fails, which means the last of the HTML output links is the page where the error occurred.

You can also use the dump() function (provided by the Symfony VarDumper component), in either your test method, or the site code that is being run. This has the advantage over using print or print\_r() that its output is not detected as a test error.

You can also use Devel module's ddm() method to output to a logfile. Configure the location of the logfile in your test code like this:

```php
    $config = $this->config('devel.settings');
    $config->set('debug_logfile', '/path/to/file/drupal_debug.txt')->save();
    $config->set('debug_pre', FALSE)->save();

```