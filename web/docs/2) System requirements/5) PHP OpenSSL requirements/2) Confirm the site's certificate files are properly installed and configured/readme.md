You might see an error in your site's log files like one of these:

* `SSL Certificate Problem: Unable to get local issuer certificate`
* `SSL Certificate Problem: Verify that the CA cert is OK.`

If so, it means your site does not have the correct Certificate Authority (CA) certificates installed or that PHP cannot find the correct certificates. You can install a set of trusted certificates provided by cURL itself:

1. Download [cacert.pem](https://curl.haxx.se/ca/cacert.pem)
2. Move the `cacert.pem` file to the affected computer, e.g.:  
   * /etc/pki/tls/cacert.pem  
   * C:\\php\\extras\\ssl\\cacert.pem
3. Edit the `php.ini` file and change the `curl.cainfo` parameter, e.g:  
   * curl.cainfo = "/etc/pki/tls/cacert.pem"  
   * curl.cainfo = "C:\\php\\extras\\ssl\\cacert.pem"  
Note that on some PHP configurations, you might need to set `openssl.cafile`, not `curl.cainfo`, to point to the `cacert.pem` file you downloaded.
4. Potentially restart your webserver (e.g., Apache) to get the `php.ini` changes to take effect.

For more information, see:

* <https://docs.bolt.cm/3.7/howto/curl-ca-certificates>
* <https://curl.haxx.se/docs/sslcerts.html>
* <https://curl.haxx.se/libcurl/c/libcurl-errors.html>
* <https://stackoverflow.com/questions/13467648/configuring-curl-for-ssl>