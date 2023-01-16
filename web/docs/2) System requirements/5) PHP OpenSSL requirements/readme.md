---
url: https://www.drupal.org/docs/system-requirements/php-openssl-requirements
description: >-
  Starting with version 9.1.0, Drupal core's Update Manager uses HTTPS to fetch
  information about available updates. This means that the PHP a Drupal site is
  using must have OpenSSL installed and properly configured. If PHP does not
  support OpenSSL, a site with the Update Manager enabled will see a "Failed to
  fetch available update data" error message at their available updates report.
published_time: '2020-09-13T03:14:09+00:00'
modified_time: '2022-06-15T11:02:22+00:00'
---
Starting with version 9.1.0, Drupal core's Update Manager uses HTTPS to fetch information about available updates. This means that the PHP a Drupal site is using must have OpenSSL installed and properly configured. If PHP does not support OpenSSL, a site with the Update Manager enabled will see a "Failed to fetch available update data" error message at their available updates report.

![Available updates report when a site can't make outbound HTTPS requests](https://www.drupal.org/files/issues/2020-09-12/1538118-138.available-updates.png)

If you see this error, there are a few steps you can take to get things working:

1. [Confirm the site can connect to the Internet](#confirm-network)
2. [Confirm OpenSSL is enabled](#enable-openssl)
3. [Confirm the site's certificate files are properly installed and configured](#configure-openssl)
4. [If needed, configure Update Manager to fallback to HTTP](#http-fallback)