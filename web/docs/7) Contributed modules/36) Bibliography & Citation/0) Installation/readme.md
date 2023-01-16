---
url: https://www.drupal.org/docs/8/modules/bibliography-citation/installation
description: >-
  1.a) If you manage your site dependencies via Composer, then the module's
  dependencies will be installed automatically once the module itself is
  installed via Composer. 1.b) In case you manage your site dependencies
  manually or via Drush, install Entity API and Token modules. Then install
  required libraries via Composer using following command: composer require
  academicpuma/citeproc-php:~1.0 adci/full-name-parser:^0.2.4
  technosophos/libris:~2.0 audiolabs/bibtexparser:dev-master
  caseyamcl/php-marc21:~1.0 You can find a bit more info about Composer here. 2.
published_time: '2018-10-14T19:34:09+00:00'
modified_time: '2020-03-02T09:30:50+00:00'
---
1.a) If you [manage your site dependencies via Composer](https://www.drupal.org/docs/develop/using-composer/using-composer-to-manage-drupal-site-dependencies), then the module's dependencies will be installed automatically once the module itself is installed via Composer.  
1.b) In case you manage your site dependencies manually or via Drush, install [Entity API](https://www.drupal.org/project/entity) and [Token](https://www.drupal.org/project/token) modules. Then install required libraries via [Composer](https://www.drupal.org/docs/8/extending-drupal/installing-modules-composer-dependencies) using following command:

`composer require academicpuma/citeproc-php:~1.0 adci/full-name-parser:^0.2.4 technosophos/libris:~2.0 audiolabs/bibtexparser:dev-master caseyamcl/php-marc21:~1.0`

You can find a bit more info about Composer [here](https://www.drupal.org/node/2804889#comment-11651131).

2\. Install as you would normally install a contributed Drupal module. See [https://www.drupal.org/docs/8/extending-drupal/installing-contributed-mo...](https://www.drupal.org/docs/8/extending-drupal/installing-contributed-modules) for further information.

_**Note:** when installing the module's dependencies via Composer, you may notice the following messages:_  
`Package technosophos/LibRIS is abandoned, you should avoid using it. No replacement was suggested.`  
`Package academicpuma/citeproc-php is abandoned, you should avoid using it. Use seboettg/citeproc-php instead.`  
_There is no known good alternative for the technosophos/LibRIS, and seboettg/citeproc-php cannot be used as drop-in replacement for the academicpuma/citeproc-php for the moment, at least for the module's needs. You should ignore these messages for now._