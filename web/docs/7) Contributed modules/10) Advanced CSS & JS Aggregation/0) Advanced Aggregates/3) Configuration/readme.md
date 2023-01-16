The Advagg settings page is located at: `admin/config/development/performance/advagg`.

### Global Options

* **Enable Advanced Aggregation:** You can quickly temporarily disable all AdvAgg functionality by un-checking this. For testing purposes, see also [Testing AdvAgg](#testing). \[Default: enabled\]
* **Use DNS Prefetch for external CSS/JS:** If enabled places prefetch tags near the top of your html to trigger DNS look-ups as soon as possible on load. \[Default: disabled\]
* **Server Config:** Server configuration options for AdvAgg. Mostly only available on Apache server. For more details see [Server Settings](#server-settings).
* **Include Cache-Control: immutable in generated .htaccess files.** _Apache only_ include directives in .htaccess to send [Cache-Control Immutable](http://bitsup.blogspot.de/2016/05/cache-control-immutable.html) headers for all optimized files. Only supported on Edge 15+ and Firefox 49+. In other browsers, they will have no effect, so can be safely enabled. \[Default: enabled\]
* **AdvAgg Cache Settings:** Development will scan all files for a change on every page load. Normal is fine for all use cases. Aggressive should be fine in almost all use cases. \[Default: Normal\]

### Compression Options

* **Gzip \[CSS/JS\] Assets:** If enabled, AdvAgg will create gzip compressed version of every file that is generated. This will then be served if the users' browser supports it instead of the uncompressed file saving time and bandwidth. \[Default: enabled\]
* **Brotli Compress \[CSS/JS\] Assets:** Only selectable if the non standard [PHP brotli extension](https://github.com/kjdev/php-ext-brotli) is installed. If enabled, Advagg will create brotli compressed versions of every file that is generated. Moderately better compression ratios than Gzip, but lower server and browser support. \[Default: disabled\]

### CSS Options

* **Combine CSS files by using media queries:** If enabled, AdvAgg will add a media query wrapper to any file that needs it so that aggregation is more efficient. \[Default: disabled\]
* **Fix improperly set type:** If type is external but does not start with http, https, or // change it to be type file. If type is file but it starts with http, https, or // change type to be external. \[Default: enabled\]

### JS Options

* **Fix improperly set type:** If type is external but does not start with http, https, or // change it to be type file. If type is file but it starts with http, https, or // change type to be external. \[Default: enabled\]
* **Do not change external to file if on same host:** In rare cases, JS files may be on the same host but are actually still external such as served via a CDN. \[Default: disabled\]

### CRON Options

Unless you have a good understanding of what you are trying to do, probably better to leave these alone. For best performance, setting up an external cron task is better than relying on Drupal's built in "poor man's cron".

* **Minimum amount of time between `advagg_cron()` runs:** Set the minimum amount of time between `advagg_cron` runs. `advagg_cron` whenever you site cron runs, if less than the minimum time, will return before further processing. \[Default: 1 day\]
* **Delete aggregates modified more than a set time ago:** Set how old to keep generated files for. Longer will have higher performance and with AdvAgg 8.x-3.x should have no negatives except for possibly wasted disk space from rarely used or changed files. \[Default: 1 month\]

### Obscure Options

* **Convert absolute paths to protocol relative paths:** Only applies to external files, this will change any http:// or https:// based urls to use //. \[Default: enabled\]
* **Convert http:// to https://:** Also only applies to external files and is mutually incompatible with **Convert absolute paths to protocol relative paths**. \[Default: disabled\]
* **Use "Options +SymLinksIfOwnerMatch":** On some rare hosting configurations the AdvAgg htaccess files need to use `Options +SymLinksIfOwnerMatch` instead of the more common `Options +FollowSymlinks`. \[Default: disabled\]