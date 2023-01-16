---
url: https://www.drupal.org/docs/drupal-apis/runtime-assertions
description: >-
  A runtime assertion is a statement that is expected to always be true at the
  point in the code it appears at. They are tested using PHP's internal assert()
  statement. If an assertion is ever FALSE it indicates an error in the code or
  in module or theme configuration files. User-provided configuration files
  should be verified with standard control structures at all times, not just
  checked in development environments with assert() statements on. Since unit
  tests also use the term "assertion" to refer to test conditions, the term
  "runtime assertion" will be used when disambiguation is necessary.
published_time: '2015-05-20T16:55:40+00:00'
modified_time: '2022-05-03T13:31:32+00:00'
---
A runtime assertion is a statement that is expected to always be true at the point in the code it appears at. They are tested using PHP's internal [assert()](http://www.php.net/assert) statement. If an assertion is ever FALSE it indicates an error in the code or in module or theme configuration files. User-provided configuration files should be verified with standard control structures at all times, not just checked in development environments with assert() statements on.

Since unit tests also use the term "assertion" to refer to test conditions, the term "runtime assertion" will be used when disambiguation is necessary.