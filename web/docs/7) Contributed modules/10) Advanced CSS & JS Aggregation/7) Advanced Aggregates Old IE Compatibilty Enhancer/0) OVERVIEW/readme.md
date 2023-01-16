_This module may have conflicts with other modules if it is enabled._

Includes additional functionality to improve Drupal compatibility with old versions of Internet Explorer (6-9). No currently known compatibility issues however due to method required to override core on this it is easily possible that there are other modules that do conflict.

This module prevents CSS aggregates from being produced with more than 4095 (or a configured value) selectors as **old** Internet Explorer versions do not handle more than 4095 selectors in an individual file.