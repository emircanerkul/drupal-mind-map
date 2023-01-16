The Apigee SmartDocs OpenAPI specification renderer is an Angular application hosted on a Google CDN. If your developers are accessing the documentation behind a firewall you will need to whitelist the following domains so that the SmartDocs Angular library is available to the browser:

* [www.gstatic.com](http://www.gstatic.com)
* fonts.googleapis.com
* cdn.jsdelivr.net

If you are not able to meet these requirements, you can [change the OpenAPI spec renderer from SmartDocs to a different type](https://www.drupal.org/docs/8/modules/apigee-api-catalog/customizing-your-api-catalog#s-displaying-openapi-specs-using-a-different-renderer).