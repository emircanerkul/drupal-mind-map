Drupal 7 added a new feature into core that is not user facing directly, but is sometimes called [poor man's cron](http://drupal.org/node/331611). The feature triggers the periodic tasks of a Drupal site like emptying log files, sending e-mails, and clearing out caches. This feature, when combined with dynamic detection of the "base url" (added in [Drupal 4.7](http://drupal.org/node/56634#comment-392372)), can lead to some confusing or risky situations. This section is a description of some of those confusing situations that occur with either module or both of them and what you can do to prevent them. The comments below assume some default configurations - above are explanations and configuration examples to prevent these problems.

### Scenario 1: Getting/sending user emails that appear to be for another domain

To replicate this behavior:

1. Point a new domain at the IP of an existing site - let's call the existing site <http://www.example.com> and the new name pointed at that IP is <http://other-site.example.org>
2. Visit the url: <http://other-site.example.org/user/password>
3. Submit a username that is likely to be used on the site.

The result is that in step 2 the host detection thinks that your site is <http://other-site.example.org> and all the tokens for the e-mail like \[user:one-time-login-url\]that contain links to your site will be changed to use <http://other-site.example.org> as the base url. The user who receives this email will see their username and e-mail for example.com are now somehow in use on <http://other-site.example.org>, which is usually just confusing. Two bad scenarios could come from this, though:

* In a worst-case scenario could lead to them click on the password reset link which the evil site could then use to login to the site as that user.
* They might enter their username/password into <http://other-site.example.org> \- a so-called social engineering attack - which could then be used on the main site.

### Scenario 2: Cache entries containing the wrong domain

A similar problem can occur when a user uses the wrong domain to make a request and that happens to be the request that primes a cache entry with dynamic, fully qualified domains in it. Subsequent visits that retrieve information from that cache will get the wrong domain name. Drupal core's page cache uses the domain as part of the cache ID, preventing this problem, but other caching mechanisms may not be as robust against this problem.

### Scenario 3: Notification mails containing the wrong domain

Yet another problem can occur on sites that use modules that send e-mails during cron runs. This scenario requires the poor-man's-cron with the dynamic base\_url detection. If a user happens to trigger the poor man's cron when there are notifications in the queue by visiting the wrong domain name then notifications will be sent with that incorrect domain. Users will be very confused about why the mail they expect to receive coming from an e-mail address at example.com includes links to the <http://other-site.example.org> domain.