If you are using OAuth or Basic Authentication to secure your APIs in Edge, follow the steps below to configure your Add CORS policy and adjust your OAuth policy to work with SmartDocs.

1. Add an `authorization` attribute to the `Access-Control-Allow-Headers` header, as shown below:  
`    <AssignMessage async="false" continueOnError="false" enabled="true" name="add-cors">  
        <DisplayName>Add CORS</DisplayName>  
        <FaultRules/>  
        <Properties/>  
        <Set>  
            <Headers>  
                <Header name="Access-Control-Allow-Origin">{request.header.origin}</Header>  
                <Header name="Access-Control-Allow-Headers">origin, x-requested-with, accept, content-type, authorization</Header>  
                <Header name="Access-Control-Max-Age">3628800</Header>  
                <Header name="Access-Control-Allow-Methods">GET, PUT, POST, DELETE</Header>  
            </Headers>  
        </Set>  
        <IgnoreUnresolvedVariables>true</IgnoreUnresolvedVariables>  
        <AssignTo createNew="false" transport="http" type="response"/>  
    </AssignMessage>`
2. Add a `<RouteRule>` to your Target Endpoint Request to enable your OAuth backend service to accept an OPTIONS request, as shown below:  
```php  
<HTTPProxyConnection>  
            <BasePath>/v1/cnc</BasePath>  
            <VirtualHost>default</VirtualHost>  
            <VirtualHost>secure</VirtualHost>  
        </HTTPProxyConnection>  
        <RouteRule name="NoRoute">  
            <Condition>request.verb == "OPTIONS" AND request.header.origin != null AND request.header.Access-Control-Request-Method != null</Condition>  
        </RouteRule>  
        <RouteRule name="default">  
            <TargetEndpoint>default</TargetEndpoint>  
       </RouteRule>  
       <PostFlow name="PostFlow">  
            <Request/>  
            <Response/>  
        </PostFlow>  
    </ProxyEndpoint>  
```
3. Configure your OAuth proxy to send back CORS responses. Make sure to read [Handling CORS preflight requests](https://docs.apigee.com/api-platform/develop/adding-cors-support-api-proxy#handlingcorspreflightrequests) in the Apigee documentation to see how to add a CORS preflight step for both RefreshAccessToken and GenerateAccessTokenClient flows.