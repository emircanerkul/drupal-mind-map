In Drupal, clean URLs are enabled by default and can't be disabled. However, a [rewrite module must be installed on your web server](#dedicated).

Check your browser's address-bar. Your site's URLs should not contain `?q=` within the URL.

**Example of proper 'Clean URLs'**  
`http://www.example.com/node/83`

**Example of 'Clean URLs' not working**  
`http://www.example.com/?q=node/83`

There are further instructions on [Configuring Clean URLs for various systems](/node/717772) such as apache, wamp, xampp and IIS.