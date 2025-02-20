### Takeaway

1. Routes whose **controllers return a [Response](https://api.drupal.org/api/drupal/vendor%21symfony%21http-foundation%21Response.php/class/Response/8) object** bypass the pipeline below. They rely directly on the [Symfony render pipeline](https://symfony.com/doc/3.4/components/http%5Fkernel.html).
2. Routes whose **controllers return the "main content" as a render array** automatically have the ability to be requested in multiple ways: it can be rendered in a certain format (HTML, JSON …) and/or in a certain decorated manner (e.g. with blocks around the main content).

### The pipeline

> _This can be considered the Drupal render pipeline, but it really is just embedded within the [Symfony render pipeline](https://symfony.com/doc/3.4/components/http%5Fkernel.html)._

1. After the controller returns a render array, the [VIEW](https://api.drupal.org/api/drupal/core%21vendor%21symfony%21http-kernel%21Symfony%21Component%21HttpKernel%21KernelEvents.php/constant/KernelEvents%3A%3AVIEW/8) event will be triggered by the [HttpKernel](https://api.drupal.org/api/drupal/vendor!symfony!http-kernel!HttpKernel.php/class/HttpKernel/8), because the controller result is not a `Response`, but a render array.
2. [MainContentViewSubscriber](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21EventSubscriber%21MainContentViewSubscriber.php/class/MainContentViewSubscriber/8) is subscribed to the `VIEW` event. It checks whether the controller result is a render array, and if so, it guarantees to generate a `Response`.
3. Next, `MainContentViewSubscriber` checks whether the negotiated request format is supported:  
   1. Any format for which a main content renderer service exists (an implementation of [MainContentRendererInterface](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Render%21MainContent%21MainContentRendererInterface.php/interface/MainContentRendererInterface/8) is supported.  
   2. If the negotiated request format is not supported, a 406 JSON response is generated, which lists the supported formats in a machine-readable way (as per [RFC 2616, section 10.4.7](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.4.7)).
4. Otherwise, when the negotiated request format is supported, the corresponding main content renderer service is initialized. A response is generated by calling `MainContentRendererInterface::renderResponse()` on the service. That's it!

### Main content renderers

Each main content renderer service can choose how to implement its `renderResponse()` method. It may, of course choose to add protected helper methods to provide more structure if it's a complex main content renderer.

Drupal 8 ships with the following main content renders (and thus supports rendering any render array in one of the following formats/MIME types):

* HTML: [HtmlRenderer](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Render%21MainContent%21HtmlRenderer.php/class/HtmlRenderer/8) (`text/html`)
* AJAX: [AjaxRenderer](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Render%21MainContent%21AjaxRenderer.php/class/AjaxRenderer/8) (`application/vnd.drupal-ajax`)
* Dialog: [DialogRenderer](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Render%21MainContent%21DialogRenderer.php/class/DialogRenderer/8) (`application/vnd.drupal-dialog`)
* Modal: [ModalRenderer](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Render%21MainContent%21ModalRenderer.php/class/ModalRenderer/8) (`application/vnd.drupal-modal`)