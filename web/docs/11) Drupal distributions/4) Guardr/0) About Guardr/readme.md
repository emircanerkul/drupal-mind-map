---
url: https://www.drupal.org/docs/8/modules/guardr/about-guardr
description: >-
  Guardr is a Drupal distribution with a combination of modules and settings to
  enhance a Drupal application's security and availability to meet enterprise
  security requirements. While you can easily start a new Drupal site with
  Guardr, it is recommended that you use Guardr as a base install profile.
  Guardr follows the CIA information security triad: confidentiality, integrity
  and availability. From Wikipedia: For any information system to serve its
  purpose, the information must be available when it is needed.
published_time: '2019-09-10T15:54:26+00:00'
modified_time: '2019-10-22T16:30:19+00:00'
---
Guardr is a Drupal distribution with a combination of modules and settings to enhance a Drupal application's security and availability to meet enterprise security requirements. While you can easily start a new Drupal site with Guardr, it is recommended that you use Guardr as a base install profile.

Guardr follows the CIA information security triad: confidentiality, integrity and availability. From [Wikipedia](https://en.wikipedia.org/wiki/Information%5Fsecurity#Availability):

> For any information system to serve its purpose, the information must be available when it is needed. This means that the computing systems used to store and process the information, the security controls used to protect it, and the communication channels used to access it must be functioning correctly. High availability systems aim to remain available at all times, preventing service disruptions due to power outages, hardware failures, and system upgrades.

Over the last 6 years or so, we've worked with the security departments of various US national banks, ones with names you would recognize, along with taking security standards from studying in the CSSLP and CISSP to not only pick out some great hardening modules (33 as of today), but to configure them during the profile install with hardened settings.

A default Guardr install will make your users pick passwords that won't be in a dictionary ([password\_policy](http://drupal.org/project/password%5Fpolicy)). It'll keep more logs than Drupal basic (1,000,000 instead of 1,000), not only standard watchdog logs, but role changes for users, too ([role\_watchdog](http://drupal.org/project/role%5Fwatchdog)). It won't let your browser save the password ([clear\_password\_field](http://drupal.org/project/clear%5Fpassword%5Ffield)). It'll warn you when your disk is about to fill up to prevent a DoS ([diskfree](http://drupal.org/project/diskfree)), hide fatal errors ([hide\_php\_fatal\_error](http://drupal.org/project/hide%5Fphp%5Ffatal%5Ferror)), and remove the generator META tag ([remove\_generator](http://drupal.org/project/remove%5Fgenerator)). The [Paranoia](http://drupal.org/project/paranoia) module prevents even your administrators from enabling the PHP input filter. Just in case your users create Views that list users, [Username Enumeration Prevention](http://drupal.org/project/username%5Fenumeration%5Fprevention) will help prevent a list of your users being exposed to the Internet without your knowledge.

Guardr goes beyond just adding some selected contrib modules by changing the default email notifications to remove references to user names and user IDs. That way any intercepted email isn't as helpful to whoever did a MITM on your email. We even change the defaults on checking for updates to Drupal modules because Drupal should check for security updates by default. It disables displaying errors by default rather than outputting them by default because you should have to opt-in to getting debug information. Users also get blocked from creating new accounts on a Guardr site by default; administrators are the only ones who can create accounts until the administrator switches the site to public signups.

If that paranoia wasn't enough, it goes as far as to add additional documentation to settings.php to show how you can configure Drupal to connect to MySQL over SSL, though additional SSL configuration is required for generating certificates between your web and database servers.

The default configuration of Guardr is clearly more hardened and secure than [Hardened Drupal](http://drupal.org/project/hardened%5Fdrupal), and is suitable as the basis for building a Drupal site for your average, national, mega bank. The only reason we even mention Hardened Drupal here is keyword SEO because there's really no comparison.