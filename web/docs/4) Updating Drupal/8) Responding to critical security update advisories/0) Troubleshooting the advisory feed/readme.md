If your Drupal site cannot fetch the advisories feed from Drupal.org, the [status report](https://www.drupal.org/docs/user%5Fguide/en/prevent-status.html) will have a warning under **Critical security announcements** that starts with "Failed to fetch security advisory data".

### Verify that the feed is online

To determine if the advisory feed from Drupal.org is currently online, visit the feed, <https://updates.drupal.org/psa.json>, directly in your browser. In most cases, if there are currently no highly critical security advisories, the feed will simply display "\[\]".

### Verify that OpenSSL is configured correctly

If OpenSSL is not configured correctly, your site might not be able to retrieve the advisory feed. Consult the [PHP OpenSSL requirements](https://www.drupal.org/docs/system-requirements/php-openssl-requirements) page for more information on correctly setting this up or enabling the HTTP fallback if OpenSSL is not available.

### Check your site's network connectivity

If the feed is online and OpenSSL is configured correctly, but the feed fails, the server or hosting provider might be blocking outgoing network traffic (due to a firewall, for example). Use the command line (e.g. `curl`) to verify that requests to the feed URL made by the web server user are working correctly, or contact your hosting provider or system administrator.

### Check for possible JSON feed format issues

There is a small chance that there could be a formatting problem in the feed itself. If this is the case, no error will appear in the site's status report. Instead, check the site error logs for "The security advisory JSON feed from Drupal.org could not be decoded.", which means that the entire feed could not be decoded, or "Invalid security advisory format:", which indicates that a particular advisory has invalid data. If you encounter these errors, [you can search the Drupal.org customizations issue queue](https://www.drupal.org/project/issues/drupalorg?categories=All) for an existing issue or create a new one.

### Check for issues in the Drupal.org issue queues

If none of the above troubleshooting steps resolves your issue, you can [search the Drupal.org issue queues](https://www.drupal.org/project/issues/search/) or report a new issue.