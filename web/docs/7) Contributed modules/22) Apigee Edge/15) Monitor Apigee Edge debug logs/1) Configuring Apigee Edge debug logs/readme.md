Configure Apigee Edge debug logs to customize the log message format, configure the formatter, and sanitize the output to mask organization details and remove credential information.

To configure Apigee Edge debug logs:

1. Select **Configuration > Apigee Edge > Debug** in the Drupal administration menu.
2. Customize the log message format in the Log message format field, as required.  
Expand the list of **Available Tokens** that can be displayed in the log message.  
The following log message format is enabled by default:  
```php  
<pre>{request_formatted}</pre>  
<p>Transfer statistics: <pre>{stats}</pre></p>  
```  
**Note**: You can add API responses to log messages using the `[response_formatted]` token, though this is not recommended as the information may contain sensitive data (such as developer app credentials).
3. Select the formatter plugin used for HTTP requests, responses, and transfer statistics in log messages. Valid values are listed in the following table.  
| Formatter    | Example                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |  
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |  
| Simple       | GET https://api.enterprise.apigee.com/v1/organizations/\*\*\*organization\*\*\*/apps/4463cebb-868d-4e3c-8a32-71d5ff14dcfc 1.1 Transfer statistics: array (   'total\_time' \=\> '0.592s',   'namelookup\_time' \=\> '0s',   'connect\_time' \=\> '0s',   'pretransfer\_time' \=\> '0s',   'starttransfer\_time' \=\> '0.592s',   'redirect\_time' \=\> '0s', )                                                                                                                                                                                                  |  
| cURL command | curl 'https://api.enterprise.apigee.com/v1/organizations/\*\*\*organization\*\*\*/apiproducts?expand=true&startKey=helloworld' \-H 'X-Apigee-Edge-Api-Client-Profiler: X-Apigee-Edge-Api-Client-Profiler' \-A 'Apigee Edge DevPortal 8.x-1.0-alpha6 (Apigee Edge PHP Client 2.0.0-alpha3)' Transfer statistics:                                                                                                                                                                                                                                                 |  
| Full HTML    | GET /v1/organizations/\*\*\*organization\*\*\*/developers/1141e356\-3217\-45c9\-86af\-696da5cbf295/apps/hotels HTTP/1.1<br\> Host: api.enterprise.apigee.com<br\> X\-Apigee\-Edge\-Api\-Client\-Profiler: X\-Apigee\-Edge\-Api\-Client\-Profiler<br\> User\-Agent: Apigee Edge DevPortal 8.x\-1.0\-alpha6 (Apigee Edge PHP Client 2.0.0\-alpha3)<br\> Accept: application/json; charset\=utf\-8<br\>Transfer statistics: total\_time: 1.341s namelookup\_time: 0s connect\_time: 0.05s pretransfer\_time: 0.105s starttransfer\_time: 1.341s redirect\_time: 0s |
4. Select whether you want to sanitize the log messages, as follows:  
   * **Masquerade organization**: Mask the organization name.  
   * **Remove credentials**: Remove Apigee Edge authentication data from log entries, such as the authentication header, OAuth client ID and secret, access token, refresh token, and so on.