You can enable one of the following modules to make Drupal to output a HTTP header containing cache tags:

| Project                                                                     | Module                                                     | Header             |
| --------------------------------------------------------------------------- | ---------------------------------------------------------- | ------------------ |
| [Varnish Purger](https://drupal.org/project/varnish%5Fpurge)                | Varnish Purger Tags (varnish\_purge\_tags)                 | Cache\-Tags        |
| [Generic HTTP Purger](https://www.drupal.org/project/purge%5Fpurger%5Fhttp) | Generic HTTP Tags Header (purge\_purger\_http\_tagsheader) | Purge\-Cache\-Tags |

> Note, in some versions before **`8.x-3.0-beta5`**, the [Purge](https://www.drupal.org/project/purge) module automatically configured a `Purge-Cache-Tags` header, but this was removed as it was decided this should be the responsibility of submodules instead.