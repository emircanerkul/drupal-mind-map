Secrets can be stored in environment variables (["Hide Your Keys, Hide Your Access"](https://www.lullabot.com/articles/hide-your-keys-hide-your-access) by April Sides). However, any code can inspect environment variables so this is not the most secure option. In the start of her blog post, April suggests "\[i\]f your access credentials are protecting highly sensitive data, you may want to consider subscribing to an encrypted key management provider."

If using environment variables, be aware that the information can be viewed by executing the PHP function phpinfo(). This can be disabled by adding the following to the php.ini.

`disable_functions = phpinfo`

Or by adding the following to the .htaccess file.

`php_value disable_functions phpinfo`