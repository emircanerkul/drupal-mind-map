You might want to use JavaScript that is externally on a CDN (Content Delivery Network) — e.g. web fonts are usually only available using an external URL. This can be done by declaring the library to be external (by specifying `type: external`). It is also a good idea to include some information about the external library in the definition.

(Note that it is in general _not_ a good idea to load libraries from a CDN; avoid this if possible. It introduces more points of failure both performance- and security-wise, requires more TCP/IP connections to be set up, and usually is not in the browser cache anyway. However, 3rd party libraries should _not_ be hosted on Drupal.org as part of your repo – see [Policy on 3rd party libraries on Drupal.org](https://www.drupal.org/node/422996) for clarification of policy.)

```yaml
angular.angularjs:
  remote: https://github.com/angular
  version: 1.4.4
  license:
    name: MIT
    url: https://github.com/angular/angular.js/blob/master/LICENSE
    gpl-compatible: true
  js:
    https://ajax.googleapis.com/ajax/libs/angularjs/1.4.4/angular.min.js: { type: external, minified: true }

```

If you want your external file to be requested with the same protocol as the page is requested with, specify a protocol-relative URL:

```yaml
  js:
    //ajax.googleapis.com/ajax/libs/angularjs/1.4.4/angular.min.js: { type: external, minified: true }

```

Or if you want to add CSS, here is an example of integrating Font Awesome:

```yaml
font-awesome:
  remote: https://fortawesome.github.io/Font-Awesome/
  version: 4.5.0
  license:
    name: MIT
    url: https://fortawesome.github.io/Font-Awesome/license/
    gpl-compatible: true
  css:
    theme:
      https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css: { type: external, minified: true }
```

### Example for Bootstrap CDN CSS with custom attributes.

```yaml
bootstrap-cdn:
  remote: getbootstrap.com
  version: 4.0
  license:
    name: MIT
    url: https://github.com/twbs/bootstrap/blob/main/LICENSE
  css:
    theme:
      'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css':
        type: external
        minified: true
        attributes:
          crossorigin: anonymous
          integrity: "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
```