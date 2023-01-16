In theory, having one codebase for all sites running the same version of Drupal would be a time and disk-space saving thing.

Disk-space is cheap, and so let's forget that as a consideration.

As mentioned above, updating each Drupal site when a new core version is released, can be done in a few minutes from the command line, and so your time might be better spent learning that skill instead of trying to tangle with learning how to implement and troubleshoot a multisite setup.

A shared codebase setup would be most beneficial only if all of your sites are using the exact same modules and settings, as for example, if you were managing all of the separate and distinctive sites for each sports team in a league.

If the multiple sites you administer are using different modules, however, then you face the hazard of a bug in a module that not all sites use, disrupting all sites.