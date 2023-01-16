### **Defining trusted host patterns using an environment variable**

If you have multiple Drupal environments (e.g. DEV, TEST, PROD), you might want to define the trusted host patterns using environment variable:

```php
$settings['trusted_host_patterns'] = [
  '^'.getenv('DRUPAL_TRUSTED_HOST').'$',
];
```

You can then define the environment variable "`DRUPAL_TRUSTED_HOST`" with your expected domain name using the method of your choice:

In the Dockerfile of your PHP image:

```php
ENV DRUPAL_TRUSTED_HOST="www\.example\.com"
```

In your docker-compose.yml:

```php
  php:
    environment:
      DRUPAL_TRUSTED_HOST: 'www\.example\.com'
```

### Drupal in Google Cloud Kubernetes cluster

If you run Drupal in a Google Cloud Kubernetes cluster and [expose your service to public internet via Google Cloud Ingress](https://cloud.google.com/kubernetes-engine/docs/concepts/ingress), the [service will be associated with a Google Health Check](https://cloud.google.com/kubernetes-engine/docs/concepts/ingress#health%5Fchecks). As mentioned in the Google documentation, this health check is different from a Kubernetes liveness or readiness probe because the health check is implemented outside of the cluster. By default, the health check will point to the root path '/' of your site but you can configure it to a path of your choice in the [service backend config](https://cloud.google.com/kubernetes-engine/docs/how-to/ingress-features#direct%5Fhealth).

The Ingress Health Checks MUST get a HTTP 200 response to the health check probes, otherwise your Ingress will return HTTP 502 to the clients when they try to access your site from the public IP address of the Ingress.[ ](https://cloud.google.com/load-balancing/docs/health-check-concepts#ip-ranges)

[Assuming that you haven't blocked traffic from Google Health Check system to your backend services](https://cloud.google.com/load-balancing/docs/health-check-concepts#ip-ranges), you can inspect the logs of the Drupal pod with `kubectl logs <pod id>` to see what is the HTTP response code to the Health Check requests. If you observe that the health check probes are coming through to your Drupal pod but they are getting HTTP 400 responses, the issue is most probably in the Drupal trusted host settings described on this page. If you suspect this, you can debug as follows:

* Create a PHP script (which is not bootstrapping Drupal) which writes the HTTP headers of incoming HTTP requests to a text file.
* Configure your Google Health checks to point to this PHP script
* Check the HTTP Host header of the incoming health check requests. Example script can be found below.

If you find that your Drupal is returning HTTP 400 because the health check probe HTTP requests don't have the expected Host header, you can either whitelist the Hosts in your `trusted_host_patterns` or for a better solution, [configure the Host header of the health checks](https://cloud.google.com/load-balancing/docs/health-check-concepts#headers).

Example script that will write the HTTP headers to a text file:

```php
<?php
class DumpHTTPRequestToFile {
  public function execute($targetFile) {
    $data = sprintf(
      "%s %s %s\n\nHTTP headers:\n",
      $_SERVER['REQUEST_METHOD'],
      $_SERVER['REQUEST_URI'],
      $_SERVER['SERVER_PROTOCOL']
    );

    foreach ($this->getHeaderList() as $name => $value) {
      $data .= $name . ': ' . $value . "\n";
    }

    file_put_contents(
      $targetFile,
      $data . "\n",
      FILE_APPEND
    );

    echo("Done!");
  }

  private function getHeaderList() {
    $headerList = [];
    foreach ($_SERVER as $name => $value) {
      if (preg_match('/^HTTP_/',$name)) {
        // convert HTTP_HEADER_NAME to Header-Name
        $name = strtr(substr($name,5),'_',' ');
        $name = ucwords(strtolower($name));
        $name = strtr($name,' ','-');

        // add to list
        $headerList[$name] = $value;
      }
    }
    return $headerList;
  }
}

(new DumpHTTPRequestToFile)->execute('./dumprequest.txt');
```