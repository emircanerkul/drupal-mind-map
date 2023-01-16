Paste the two lines below into your command line to download and extract the Drupal package and start it:

```php
mkdir drupal && cd drupal && curl -sSL https://www.drupal.org/download-latest/tar.gz | tar -xz --strip-components=1
php -d memory_limit=256M ./core/scripts/drupal quick-start demo_umami

```

Note: If you cloned the code via Git instead of using the tarball, make sure to run `composer install` prior to running the quick-start command, see [Git example](#s-download-with-git-and-run-drupal) below.

Installation can take a minute or two. A successful installation will result in opening the new site in your browser and outputting relevant information in the terminal.

```php
18/18 [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓]
Congratulations, you installed Drupal!
Username: admin
Password: PM_kRw1i1xtPGeoT
Drupal development server started: <http://127.0.0.1:8888>
This server is not meant for production use.
One time login url: <http://127.0.0.1:8888/user/reset/1/1536313723/49dSy9t55aC-zaOwP5DcQo8Sa_ZLnRkvXpd3K8ndHnU/login>
Press Ctrl-C to quit the Drupal development server.
```

Optional: Run the following command for a list of available options that you may need to configure quick-start:

```php
$ php ./core/scripts/drupal quick-start --help

```

The result

```php
Description:
  Installs a Drupal site and runs a web server. This is not meant for production and might be too simple for custom development. It is a quick and easy way to get Drupal running.

Usage:
  quick-start [options] [--] [<install-profile>]
  quick-start demo_umami --langcode fr
  quick-start standard --site-name QuickInstall --host localhost --port 8080
  quick-start minimal --host my-site.com --port 80

Arguments:
  install-profile              Install profile to install the site in.

Options:
      --langcode[=LANGCODE]    The language to install the site in. Defaults to en. [default: "en"]
      --site-name[=SITE-NAME]  Set the site name. Defaults to Drupal. [default: "Drupal"]
      --host[=HOST]            Provide a host for the server to run on. Defaults to 127.0.0.1. [default: "127.0.0.1"]
      --port[=PORT]            Provide a port for the server to run on. Will be determined automatically if none supplied.
  -s, --suppress-login         Disable opening a login URL in a browser.
  -h, --help                   Display this help message
  -q, --quiet                  Do not output any message
  -V, --version                Display this application version
      --ansi                   Force ANSI output
      --no-ansi                Disable ANSI output
  -n, --no-interaction         Do not ask any interactive question
  -v|vv|vvv, --verbose         Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug

```