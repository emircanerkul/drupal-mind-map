You may encounter this exception if your devportal tries to connect to a management server with a self-signed certificate. To enable the devportal to trust the self-signed certificate, add the following configurations to your `settings.php` file:

* For management servers with self-signed certificates  
```php  
$settings['http_client_config']['cert'] = 'path/to/self-signed-cert';  
```
* For management servers configured for two-way SSL  
```php  
$settings['http_client_config']['ssl_key'] = 'path/to/client.key';  
```
* For a hostname mismatch with the certificate Common Name  
```php  
$settings['http_client_config']['verify'] = false;  
```

**Note**: In cURL version > 7.62.0, users may see `Error message: cURL error 60`. Error 51 was unified with Error 60.