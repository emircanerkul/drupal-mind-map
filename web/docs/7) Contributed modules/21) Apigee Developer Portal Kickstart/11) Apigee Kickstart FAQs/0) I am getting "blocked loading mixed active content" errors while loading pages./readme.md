This may be happening because you have a reverse proxy in front of your web server. You will need to modify the `web/sites/default/settings.php` file variables:

* `$settings['reverse_proxy']`
* `$settings['reverse_proxy_addresses']`
* `$settings['reverse_proxy_trusted_headers']`

Read the comments above each variable in the `settings.php` file and set proper values. Do not forget to uncomment the line by removing the `#` sign in front.