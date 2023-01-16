_Depending on tweaks applied this module may cause compatibility issues with other modules._

Includes additional tweaks that may not work for all sites such as:

* Force preprocessing for all CSS/JS.
* Add defer tag to all JS.
* Defer CSS loading using `rel=preload` and JavaScript Polyfill.
* Add async tag to all or only local JavaScript. Some of these may significantly increase performance depending on your individual site. However, they include possibly dangerous and minimally tested options so use care and read warnings on each option if there are any.