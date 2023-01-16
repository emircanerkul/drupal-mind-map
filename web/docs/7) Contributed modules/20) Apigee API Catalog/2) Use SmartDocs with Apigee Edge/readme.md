---
url: >-
  https://www.drupal.org/docs/8/modules/apigee-api-catalog/use-smartdocs-with-apigee-edge
description: >-
  The Apigee SmartDocs library provides a rich sandbox experience for API
  developers using your developer portal. Enabling developers to test calls to
  your APIs can streamline the process of integrating consumer apps with your
  services. However, in order for the SmartDocs Angular app to work properly in
  your developer portal, your Apigee Edge proxy must comply with Cross-Origin
  Resource Sharing (CORS) access restrictions. You can read more about the
  security implications and mechanisms of CORS here.
published_time: '2020-03-31T23:33:57+00:00'
modified_time: '2020-04-01T16:25:59+00:00'
---
The Apigee SmartDocs library provides a rich sandbox experience for API developers using your developer portal. Enabling developers to test calls to your APIs can streamline the process of integrating consumer apps with your services.

However, in order for the SmartDocs Angular app to work properly in your developer portal, your Apigee Edge proxy must comply with Cross-Origin Resource Sharing (CORS) access restrictions. You can read more about the security implications and mechanisms of CORS [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS).

You can create a seamless connection between SmartDocs and your APIs in Apigee Edge by creating and attaching a CORS policy to the TargetEndpoint response PreFlow, as shown in the figure below.

![Add CORS policy in UI.](https://www.drupal.org/files/Add-CORS-response-flow.png)