---
url: https://www.drupal.org/docs/contributed-themes/bs-base/installation
description: >-
  In order to use bs_bootstrap and any child theme that is based on bs_bootstrap
  you first need to download and install bs_lib contributed module. This module
  requires the installation of a couple of libraries in your project libraries
  folder: Bootstrap 4 library installation. Download Bootstrap 4 'Source code'
  from https://github.com/twbs/bootstrap/releases and extract it. Rename
  extracted folder to bootstrap and place it in the libraries folder. The exact
  version of Bootstrap that you should download depends on the version of
  bs_base you are using.
published_time: '2019-01-15T09:35:07+00:00'
modified_time: '2021-03-11T21:35:31+00:00'
---
In order to use bs\_bootstrap and any child theme that is based on bs\_bootstrap you first need to download and install [bs\_lib](https://www.drupal.org/project/bs%5Flib) contributed module. This module requires the installation of a couple of libraries in your project libraries folder:

* Bootstrap 4 library installation. Download Bootstrap 4 'Source code' from <https://github.com/twbs/bootstrap/releases> and extract it. Rename extracted folder to bootstrap and place it in the libraries folder. The exact version of Bootstrap that you should download depends on the version of bs\_base you are using. Please refer to bs\_base [project page](https://www.drupal.org/project/bs%5Fbase) for more details about this information.
* Popper library installation. Download Popper library from <https://github.com/FezVrasta/popper.js/releases> (Bootstrap 4 minimal dependency is version v1.11.0) and extract it. Rename extracted folder name to popper and place it in the libraries folder.
* \[OPTIONAL\] Jasny Bootstrap library installation. Download forked Jasny Bootstrap library from <https://github.com/pivica/jasny-bootstrap/archive/master.zip> and extract it. Rename extracted folder to jasny-bootstrap and place it in libraries folder. You need Jasny bootstrap library only if you want to use off-canvas navigation for the navigation bar.

<!-- note-tip -->
> TIP: If you are using composer to manage your site dependencies that it is recommended to add all bs_lib dependencies to your composer.json definition so they can be managed by a composer.

 When all libraries are in place visit 'Status Report' page on admin/reports/status and verify that all BS Lib dependencies are reported as installed.

You can now proceed with the download and installation of [bs\_base](https://www.drupal.org/project/bs%5Fbase) contributed theme.