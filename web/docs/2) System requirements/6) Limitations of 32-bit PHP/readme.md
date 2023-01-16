---
url: https://www.drupal.org/docs/system-requirements/limitations-of-32-bit-php
description: >-
  If you run Drupal on a system where PHP is compiled or limited to using 32-bit
  integers, you will only be able to enter dates between 1901 and 2038
  (specifically from 20:45:52 UTC on 13 December 1901 to 03:14:07 UTC on 19
  January 2038). This is commonly known as the 2038 bug. The usual symptom is
  seeing a date displayed or recorded as 1970-01-01 instead of an intended value
  outside the above range. This will affect all PHP applications. In Drupal
  specifically, date-based field types are impacted, i.e. Date only and Date and
  Time, including the "Select list" widget.
published_time: '2017-03-13T18:24:10+00:00'
modified_time: '2020-09-19T22:15:46+00:00'
---
If you run Drupal on a system where PHP is compiled or limited to using 32-bit integers, you will only be able to enter dates between 1901 and 2038 (specifically from 20:45:52 UTC on 13 December 1901 to 03:14:07 UTC on 19 January 2038). This is commonly known as the [2038 bug](https://en.wikipedia.org/wiki/Year%5F2038%5Fproblem).

The usual symptom is seeing a date displayed or recorded as 1970-01-01 instead of an intended value outside the above range. This will affect _all_ PHP applications. In Drupal specifically, date-based field types are impacted, i.e. Date only and Date and Time, including the "Select list" widget. You can choose years outside the 1900 to 2038 range, but because PHP itself can't handle them, they will be stored/displayed as 1970-01-01 without warning.

### Affected products

* Official Windows builds of PHP 5.x/7.x for x86 and [PHP 5.x for x64 ](http://windows.php.net/download/#x64).
* Any web stack package (XAMPP, Wamp, etc.) with PHP compiled for 32-bit and/or running on a 32-bit system.
* [Acquia Dev Desktop 2](https://docs.acquia.com/dev-desktop) _prior_ to the 14 June 2018 release (it now uses 64-bit PHP and MySQL).

Note: It's how PHP itself is compiled that counts: if you have a 32-bit version of PHP running in a 64-bit operating system you'll still experience the problem.

### Testing

To test if your PHP is affected, you can run this command (as one line):

```php
php -r "echo (date('y',strtotime('2039-01-01')) == 39 ? 'OK' : 'Y2K38 limitation') . PHP_EOL;"
```

An unaffected PHP instance prints `OK` while an affected PHP instance prints `Y2K38 limitation`.