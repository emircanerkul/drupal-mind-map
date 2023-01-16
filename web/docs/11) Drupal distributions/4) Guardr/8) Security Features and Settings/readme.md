---
url: >-
  https://www.drupal.org/docs/distributions/guardr/security-features-and-settings
description: >-
  Guardr is a Drupal distribution with a combination of modules and settings to
  enhance a Drupal application's security and availability to meet enterprise
  security requirements. Project details and configuration for the Guardr
  security distribution Drupal core Guardr default settings: Allow only 6 bad
  login attempts per user account prior to user login block. User block stays
  active for 30 minutes. Retain last 1,000,000 watchdog log entries. Notify for
  available security updates. Check for updates every 1 day.
published_time: '2015-09-23T18:21:20+00:00'
modified_time: '2020-12-14T01:16:04+00:00'
---
Guardr is a Drupal distribution with a combination of modules and settings to enhance a Drupal application's security and availability to meet enterprise security requirements.

Project details and configuration for the [Guardr](https://www.drupal.org/project/guardr) security distribution

* [Drupal core](https://drupal.org/project/drupal)  
   * **Guardr default settings:**  
         * Allow only 6 bad login attempts per user account prior to user login block. User block stays active for 30 minutes.  
         * Retain last 1,000,000 watchdog log entries.  
         * Notify for available security updates.  
         * Check for updates every 1 day.
* [autologout](https://drupal.org/project/autologout) (Enabled by default)  
   * This module provides a site administrator the ability to log users out after a specified time of inactivity. It is highly customizable and includes "site policies" by role to enforce logout.  
   * **Guardr default settings:**  
         * Autologout after 15 minutes of inactivity.
* [clear\_password\_field](https://drupal.org/project/clear%5Fpassword%5Ffield) (Enabled by default)  
   * As a Drupal developer, it's very likely that you have saved passwords for several of your websites. This makes it easier when coming back to it after a while. However, there are several situations where this is not desirable:  
         * Whenever you try to edit any user account (including yours), your password is already populating one of the fields, even though the purpose of the field is to change it  
         * Whenever you want to add a new user through the admin interface, not just your password, but also your username are now populating the fields of a soon-to-be different user
* [diff](https://drupal.org/project/diff) (Enabled by default)  
   * This module adds a tab for sufficiently permissioned users. The tab shows all revisions like standard Drupal but it also allows pretty viewing of all added/changed/deleted words between revisions.
* [diskfree](https://drupal.org/project/diskfree) (Enabled by default)  
   * Get a status report at admin/reports/status and a cron-triggered e-mail warning when locally mounted disk space on your Drupal server reaches a preset threshold.
* [ejectorseat](https://drupal.org/project/ejectorseat) (Enabled by default)  
   * Ejector Seat provides some Javascript (ajax) code which checks periodically to see if a user is still logged in. If the user is NOT logged in, the current page is reloaded so that the user sees the page as an anonymous user.
* [email\_confirm](https://drupal.org/project/email%5Fconfirm) (Enabled by default)  
   * This module was created to address a missing piece of functionality in the Drupal user system. This module provides a confirmation step when email address changes are requested by emailing the user.
* [encrypt](https://drupal.org/project/encrypt)  
   * Encrypt is a Drupal module that provides an application programming interface (API) for performing two-way data encryption. It allows modules to encrypt data such that it can be decrypted using the same key that was used to encrypt the data. This is useful for storing sensitive information.
* [entitycache](https://drupal.org/project/entitycache) (Enabled by default)  
   * Entity cache puts core entities into Drupal's cache API.
* [field\_permissions](https://drupal.org/project/field%5Fpermissions) (Enabled by default)  
   * The Field Permissions module allows site administrators to set field-level permissions to edit, view and create fields on any entity.
* [flood\_control](https://drupal.org/project/flood%5Fcontrol) (Enabled by default)  
   * This project is intended to add an administration interface for hidden flood control variables in Drupal 7, like the login attempt limiters and any future hidden variables.
* [guardr\_core](https://drupal.org/project/guardr%5Fcore) (Enabled by default)  
   * This module is a required part of the [Guardr distribution](http://drupal.org/project/guardr). It is here so install profiles can use Guardr as a base profile.
* [hacked](https://drupal.org/project/hacked)  
   * This module scans the currently installed Drupal, contributed modules and themes, re-downloads them and determines if they have been changed. Changes are marked clearly and if the [diff module](http://drupal.org/project/diff) is installed then Hacked! will allow you to see the exact lines that have changed.
* [hide\_php\_fatal\_error](https://drupal.org/project/hide%5Fphp%5Ffatal%5Ferror) (Enabled by default)  
   * This module simply redirects the user to an error page when a PHP fatal error is thrown. The error page is configurable. The error is logged using watchdog.
* [libraries](https://drupal.org/project/libraries) (Enabled by default)  
   * This module introduces a common repository for libraries in sites/all/libraries or sites/<domain>/libraries for contributed modules.
* [login\_history](https://drupal.org/project/login%5Fhistory)  
   * Login History adds a new table which stores a list of each users' past logins. This module was originally written as a way to capture a user's last login timestamp.
* [login\_security](https://drupal.org/project/login%5Fsecurity) (Enabled by default)  
   * Login Security module improves the security options in the login operation of a Drupal site. By default, Drupal introduces only basic access control denying IP access to the full content of the site.  
   * **Guardr default settings:**  
         * Maximum number of login failures before detecting an ongoing attack: 30  
         * Maximum number of login failures before soft blocking a host: 35  
         * Disable login failure error message.  
         * Display last login timestamp.  
         * The time window to check for security violations: 1 hour  
         * Maximum number of login failures before blocking a user: 3
* [logging\_alerts](https://drupal.org/project/logging%5Falerts)  
   * This is a collection of logging and alerts modules. Currently, the following modules are included:  
         * Email logging and alerts  
         * Web server logging  
         * Watchdog triggers  
         * Watchdog rules  
   * Provides rules integration for watchdog events. You may now trigger additional ruleset responses when an event occurs.
* [mass\_pwreset](https://drupal.org/project/mass%5Fpwreset)  
   * This module allows users with "Administer users" permission to reset all user accounts and notify all users
* [memcache](https://drupal.org/project/memcache)  
   * This module provides integration between Drupal and Memcached.
* [no\_autocomplete](https://drupal.org/project/no%5Fautocomplete) (Enabled by default)  
   * This module attempts to disallow autocompleting user authentication form fields by adding "autocomplete=off" to the related forms or form elements.  
   * **Guardr default settings:**  
         * Disable password autocompletion for the login and profile forms
* [paranoia](https://drupal.org/project/paranoia) (Enabled by default)  
   * The Paranoia module attempts to identify all the places that a user can evaluate PHP via Drupal's web interface and then block those. It reduces the potential impact of an attacker gaining elevated permission on a Drupal site.
* [password\_policy](https://drupal.org/project/password%5Fpolicy) (Enabled by default)  
   * This module provides a way to enforce restrictions on user passwords by defining password policies.  
   * **Guardr default settings:**  
         * Show password policy restrictions  
         * Guardr standard password policy:  
                  * Password expiration: 90 days  
                  * Password expiration warning emails: 7 and 14 days prior to expiration  
                  * Digits required: 2  
                  * Letter/Digit (Alphanumeric) required  
                  * Length: 8 characters  
                  * Cannot reuse the last 24 passwords  
                  * Uppercase required  
                  * Lowercase required  
                  * Punctuation required  
                  * Minimum number of hours between password changes: 24  
                  * Username not allowed in password  
                  * Cannot place digits at the beginning and end of a password string  
                  * History (checks hashed password against a collection of user's previous hashed passwords looking for recent duplicates)  
         * Administrator password policy (in addition to the standard policy):  
                  * Password expiration: 60 days  
                  * Length: 12 characters  
                  * Cannot reuse the last 48 passwords  
                  * Password must contain the specified minimum number of punctuation (not whitespace or an alphanumeric) characters: 3
* [permission\_watchdog](https://drupal.org/project/permission%5Fwatchdog) (Enabled by default)  
   * Permission watchdog logs all changes to permissions on roles so an administrator can audit the entire history of changes to permissions. This is useful for sites or applications which have security audit requirements to illustrate what permissions a role had at any given point in time.  
   * **Guardr default settings:**  
         * Log all permissions changes
* [profiler](https://drupal.org/project/profiler)  
   * Profiler provides a new way to write install profiles. Gone are the days where you needed to know all the quirks of Drupal's APIs in order to write a solid install profile. Profiler allows you to quickly and easily create new install profiles, as well as have 'Sub' Install Profiles, where one Install Profile inherits from and extends another Install Profile.
* [r4032login](https://drupal.org/project/r4032login) (Enabled by default)  
   * Redirect the HTTP 403 error page to the Drupal /user/login page with an optional message that reads:  
   "Access denied! You must login to view this page."  
   Also, the desired page is appended in the url query string so that, once login is successful, the user is taken directly where they were originally trying to go.
* [realname](https://drupal.org/project/realname) (Enabled by default)  
   * The RealName module allows the administrator to choose fields from the user profile that will be used to add a "real name" element (method) to a user object. Hook\_user is used to automatically add this to any user object that is loaded. It will also optionally set all nodes and comments to show this name.
* [remove\_generator](https://drupal.org/project/remove%5Fgenerator) (Enabled by default)  
   * Removes the Generator META tag.
* [revision\_all](https://drupal.org/project/revision%5Fall) (Enabled by default)  
   * Revision All allows for centralized management of content type revisioning. Revisioning can be turned on/off individually by type or enabled for all simultaneously. There is also support for enabling automatic revisioning of future content types and the disabling of the "create new revision" checkbox on node and/or content type forms.
* [role\_watchdog](https://drupal.org/project/role%5Fwatchdog) (Enabled by default)  
   * Role watchdog automatically logs all role changes made through the user profile or the User List in its own table. A record of these changes is shown in a [Role history tab](http://drupal.org/node/422534) on each user's page. Role watchdog can optionally monitor one or more specific roles for changes and notify members of selected roles via email whenever a change occurs.
* [seckit](https://drupal.org/project/seckit)  
   * SecKit provides Drupal with various security-hardening options. This lets your mitigate the risks of exploitation of different web application vulnerabilities.  
         * Cross-site scripting  
         * Cross-site request forgery  
         * Clickjacking  
         * SSL/TLS  
                  * Implementation of HTTP Strict Transport Security (HSTS) response header, preventing man-in-the-middle and eavesdropping attacks.  
         * Various  
                  * Implementation of From-Origin HTTP response header
* [security\_review](https://drupal.org/project/security%5Freview) (Enabled by default)  
   * The Security Review module automates testing for many of the easy-to-make mistakes that render your site insecure.
* [semiclean](https://drupal.org/project/semiclean) (Enabled by default)  
   * Semiclean fixes [broken crons](http://drupal.org/node/553430) by clearing the cron semaphore from the database when a previous cron execution fails.
* [session\_expire](https://drupal.org/project/session%5Fexpire) (Enabled by default)  
   * Expires rows from the session table older than a certain time.  
   * **Guardr default settings:**  
         * Expire anonymous and authenticated sessions every 20 minutes.  
         * Perform garbage collection on every cron run.
* [session\_limit](https://drupal.org/project/session%5Flimit) (Enabled by default)  
   * Session Limit allows administrators to limit the number of simultaneous sessions per user.  
   * **Guardr default settings:**  
         * Only one active session allowed per account.
* [settings\_audit\_log](https://drupal.org/project/settings%5Faudit%5Flog)  
   * Monitor changes to the Drupal {variable} table.
* [token](https://drupal.org/project/token)  
   * Tokens are small bits of text that can be placed into larger documents via simple placeholders, like %site-name or \[user\]. The Token module provides a central API for modules to use these tokens, and expose their own token values. This module is a dependency of other Guard modules.
* [user\_registrationpassword](https://drupal.org/project/user%5Fregistrationpassword) (Enabled by default)  
   * Let users register with a password on the registration form when verification mail is required.  
   By default, users can create accounts directly on the registration form, set their password and be immediately logged in, or they can create their account, wait for a verification e-mail, and then create their password. With this module, users are able to create their account along with their password and simply activate their account when receiving the verification email.
* [username\_enumeration\_prevention](https://drupal.org/project/username%5Fenumeration%5Fprevention) (Enabled by default)  
   * By default Drupal is very secure (especially Drupal 7). However, there is a way to exploit the system by using a technique called username enumeration. Both Drupal 6 and 7 have this issue, but it is much worse for people using Drupal 6\. This is because Drupal 6 does not have any built in brute force prevention. When an attacker knows a username they can start a brute force attack to gain access with that user. To help prevent this, it is best if usernames on the system are not easy to find out.  
   Attackers can easily find usernames that exist by using the forgot password form and a technique called “username enumeration”. The attacker can enter a username that does not exist and they will get a response from Drupal saying so. All the attacker needs to do is keep trying usernames on this form until they find a valid user.  
   This module will stop this from happening. When the module is enabled, the error message will be replaced for the same message as a valid user and they will be redirected back to the login form. If the user does not exist, no password reset email will be sent, but the attacker will not know this is the case.
* [view\_profiles\_perms](https://drupal.org/project/view%5Fprofiles%5Fperms) (Enabled by default)  
   * This module provides permissions toview user profiles depending on what roles the profile requested to be viewed has.
* [x\_originating\_ip](https://drupal.org/project/x%5Foriginating%5Fip) (Enabled by default)  
   * Add the [X-Originating-IP](https://en.wikipedia.org/wiki/X-Originating-IP) header to_all outgoing emails_ to assist with investigation of the sources for spam and unsolicited bulk email.

**Notes:** 

* Latest development snapshot versions of modules and libraries can be found here: <http://cgit.drupalcode.org/guardr/tree/drupal-org.make>
* Securing your site: <https://www.drupal.org/security/secure-configuration>
* Best practices: <https://www.drupal.org/best-practices>
* Drupal Security Best Practices: <https://openconcept.ca/drupal-security-best-practices-guide-governments-and-nonprofits>
* Drupal Security White Paper: <http://drupalsecurityreport.org/about-drupal-security-report>