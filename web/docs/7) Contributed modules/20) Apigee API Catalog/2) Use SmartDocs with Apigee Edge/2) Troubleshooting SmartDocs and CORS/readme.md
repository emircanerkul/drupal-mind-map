### Debugging CORS issues in the browser

You can use the Developer Tools console in your Chrome browser to view any CORS policy-related exceptions. As shown in the figure below, the console highlights any CORS errors and provides a detailed explanation of why the request failed.

![CORS errors in dev tools](https://www.drupal.org/files/CORS-error-dev-console.png)

### Error: Request header field not allowed

If you see an error message showing `request header field... not allowed`, you may need to add more headers to your CORS policy. For example, if you see the following error, you may need to add `content-type` as an allowed header:

`Access to XMLHttpRequest ... has been blocked by CORS policy: Request header field content-type is not allowed by Access-Control-Allow-Headers in preflight response.`

You can edit your CORS policy and change the Access-Control-Allow-Headers section to include content-type, as shown in the figure below:

![Edit CORS policy to include content-type](https://www.drupal.org/files/Add-CORS-policy.png)

### Error: Access denied when calling proxy

Apigee’s OAuthV2 policy returns a token response that contains certain non-RFC-compliant properties. For example, the policy will return a token with the value `BearerToken`, instead of the expected RFC-compliant value `Bearer`. This [invalid “token\_type” response](https://docs.apigee.com/api-platform/reference/policies/oauthv2-policy#non-rfc-compliant-behavior) can result in an `Access Denied` error when SmartDocs calls the proxy.

You can create and attach a javascript policy to transform the OAuthV2 policy output into a compliant format. The following steps provide an example of this approach:

1. From the **Develop** tab of the Apigee Edge UI, create a javascript file that contains the following script:  
```php  
// Change "token_type" in JSON response from "BearerToken" to  
// "Bearer" to be RFC compliant.  
//  https://docs.apigee.com/api-platform/reference/  
//  policies/oauthv2-policy#non-rfc-compliant-behavior  
    try {  
        var obj = JSON.parse(response.content);  
        obj.token_type = "BearerToken";  
        context.setVariable('response.content', JSON.stringify(obj));  
    } catch(e) {  
        print(e);  
    }  
```
2. Create a javascript policy that references this file, as shown in the figure below:  
![Javascript resource](https://www.drupal.org/files/js-resource.png)
3. Attach the javascript policy to the standard OAuth policy **AccessTokenClientCredential** Post Flow, as shown in the figures below:  
![Javascript policy](https://www.drupal.org/files/js-policy.png)  
![Policy attached to Access Token post flow](https://www.drupal.org/files/Access-Token-post-flow.png)