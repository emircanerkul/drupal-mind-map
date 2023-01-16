See <https://github.com/LionsAd/xhprof-kit>.

1) Clone the xhprof-kit repository. It doesn't really matter where you clone it on your local, as long as it's not inside your document root.

`git clone git://github.com/LionsAd/xhprof-kit.git`

2) While in the xhprof-kit directory, download xhprof as a Git submodule:

```php
git submodule init
git submodule update

```

3) While in the Drupal directory you want to benchmark, run setup-directory.sh in xhprof-kit using the full path: `/full/path/to/xhprof-kit/setup-directory.sh`.

This creates a xhprof-kit symlink in the directory.  
Make sure symlinks are allowed in Apache configuration.

4) 127.0.0.1  
Currently XHProf-Kit assumes that Drupal is installed at 127.0.0.1\. If you use a virtual host, you will need to change the URL in `find-min-web.sh` or export a value for `$XHPROF_KIT_DOCROOT`, for example:

```php
export XHPROF_KIT_DOCROOT="d8.dev".

```