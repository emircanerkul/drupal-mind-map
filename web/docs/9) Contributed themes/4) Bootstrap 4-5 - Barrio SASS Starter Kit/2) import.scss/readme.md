---
url: >-
  https://www.drupal.org/docs/8/themes/bootstrap-4-sass-barrio-starter-kit-0/importscss
description: >-
  The import.scss file contains the first level of import files: /* IMPORTS */
  @import url(font-awesome.min.css); // variables @import "variables";
  //bootstrap @import "../node_modules/bootstrap/scss/bootstrap"; //material
  design bootstrap //@import "../node_modules/mdbootstrap/scss/mdb"; // barrio
  @import "barrio"; // typography @import "typography"; // mixins @import
  "mixins"; bootstrap.scss, mdb.scss and barrio.scss contains more imports.
  Editing those files is a good idea for performance purposes, specially in
  simple sites where not all features are required.
published_time: '2018-02-17T02:32:27+00:00'
modified_time: '2018-06-19T21:03:39+00:00'
---
The import.scss file contains the first level of import files:

```php
/* IMPORTS */

@import url(font-awesome.min.css);
// variables
@import "variables";
//bootstrap
@import "../node_modules/bootstrap/scss/bootstrap";
//material design bootstrap
//@import "../node_modules/mdbootstrap/scss/mdb";
// barrio
@import "barrio";
// typography
@import "typography";
// mixins
@import "mixins";

```

bootstrap.scss, mdb.scss and barrio.scss contains more imports. Editing those files is a good idea for performance purposes, specially in simple sites where not all features are required.

Material Design is not included by default, uncomment to use it.

The order of the files is important, do not change it unless you know what you are doing