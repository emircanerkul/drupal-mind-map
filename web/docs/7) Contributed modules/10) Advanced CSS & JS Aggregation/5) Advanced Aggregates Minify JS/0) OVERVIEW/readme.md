Minify JavaScript files using a 3rd party minifier. AdvAgg includes a few and supports one faster compiled PHP extension. The options are:

* [JSMin +](https://crisp.tweakblogs.net/blog/6861/jsmin%2B-version-14.html): No installation required. Usually the second best minification, however it is the slowest supported option.
* [JShrink](https://github.com/tedious/JShrink): No installation required, JShrink is reliable and has fairly comparable minification to JSMin.
* [JSqueeze](https://github.com/tchwork/jsqueeze): No installation required, JSqueeze provides the most effective minification and is the fallback if another minification method fails. It is still fairly slow.
* [JSMin](https://github.com/sqmk/pecl-jsmin): The fast compiled C extension for PHP. Supports PHP 5.3+ and 7.x. Must be installed separately. Much faster than the other options but slightly less reliable although that is mostly mitigated within AdvAgg. See below for more details.