---
url: >-
  https://www.drupal.org/docs/installing-drupal/step-4-configure-your-installation
description: >-
  Having a local webserver to use a fully integrated, virtualized AMP (Apache,
  MySQL, PHP) stack that mimics the development, staging, and production servers
  that one may need to deploy Drupal. AMP stack on a local machine A developer
  workflow begins with having an AMP (Apache, MySQL, PHP) stack installed and
  configured on a Windows, Mac, or Linux based system. Depending on the
  operating system, there are a lot of different methods that one can use to set
  up an ideal environment on the system.
published_time: '2017-04-25T03:07:05+00:00'
modified_time: '2019-11-08T20:57:42+00:00'
---
Having a local webserver to use a fully integrated, virtualized AMP (Apache, MySQL, PHP) stack that mimics the development, staging, and production servers that one may need to deploy Drupal.

### AMP stack on a local machine

A developer workflow begins with having an AMP (Apache, MySQL, PHP) stack installed and configured on a Windows, Mac, or Linux based system. Depending on the operating system, there are a lot of different methods that one can use to set up an ideal environment on the system. However, when it comes down to choices, there are only three:

1. **Native AMP stack:** This option refers to systems that generally either come pre-configured with Apache, MySQL, and PHP or have a generally easy installation path to download and configure these three requirements. There are plenty of great tutorials on how to achieve this workflow, but this requires familiarity with the operating system.
2. **Packaged AMP stack:** This option refers to third-party solutions, such as  
   1. **MAMP** ([https://www.mamp.info/en/](https://github.com/geerlingguy/drupal-vm#quick-start-guide)),  
   2. **WAMP** (<http://www.wampserver.com/en/>), or  
   3. **Acquia Dev Desktop** (<https://dev.acquia.com/downloads>).  
These solutions come with an installer that generally works on Windows and Mac, and is a self-contained AMP stack allowing for general web server development. Out of these three, only Acquia Dev Desktop is Drupal specific.
3. **Virtual machine (VM):** This option is often the best solution as it closely represents the actual development, staging, and production web servers. However, this can also be the most complex to initially set up and requires some knowledge of how to configure specific parts of the AMP stack. There are a few well-documented VMs available that can help reduce the experience needed.

Two great virtual machines to look at are **DrupalVM** (<https://www.drupalvm.com/>) and **Vagrant Drupal Development (VDD)** (<https://www.drupal.org/project/vdd>).

In the end, my recommendation is to choose an environment that is flexible enough to quickly install, set up, and configure Drupal instances. The preceding choices are all good to start.

If you are a single person developer, a packaged AMP stack such as MAMP for a Mac machine, LAMP for a Linux, XAMPP which stands for cross-platform. By using this software you can test your web application on your local system. However, if you are in a team environment, I would strongly recommend one of the previously mentioned VM options or consider creating your own VM environment that can be distributed to your team.

You can run more than one site from a single codebase. See [Multisite Drupal](/docs/8/multisite-drupal) if you want to do this.