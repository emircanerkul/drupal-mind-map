As explained in [How the Serializer works](http://drupal.org/node/1899288), the serialization process has two parts, normalization and encoding.

If the array structure created by core's default Normalizers is acceptable for your format, then you can simply add an Encoder.

1. ### Create an encoder  
Your Encoder should implement [EncoderInterface](https://github.com/symfony/symfony/blob/master/src/Symfony/Component/Serializer/Encoder/EncoderInterface.php). See [Drupal\\hal\\Encoder](https://api.drupal.org/api/drupal/core%21modules%21hal%21src%21Encoder%21JsonEncoder.php/class/JsonEncoder/8) for a simple example. Note that its parent class defines the required `encode` and `decode` methods.  
```php  
<?php  
namespace Drupal\tvml_base\Encoder;  
use Symfony\Component\Serializer\Encoder\EncoderInterface;  
use Symfony\Component\Serializer\Encoder\DecoderInterface;  
use Symfony\Component\Serializer\Encoder\XmlEncoder as BaseXmlEncoder;  
use Symfony\Component\Serializer\SerializerAwareInterface;  
use Symfony\Component\Serializer\SerializerAwareTrait;  
/**  
 * Adds TVML support for serializer.  
 *  
 * This acts as a wrapper class for Symfony's XmlEncoder so that it is not  
 * implementing NormalizationAwareInterface, and can be normalized externally.  
 */  
class TVMLEncoder implements SerializerAwareInterface, EncoderInterface, DecoderInterface {  
  use SerializerAwareTrait;  
  /**  
   * The formats that this Encoder supports.  
   *  
   * @var array  
   */  
  protected static $format = ['tvml'];  
  /**  
   * An instance of the Symfony XmlEncoder to perform the actual encoding.  
   *  
   * @var \Symfony\Component\Serializer\Encoder\XmlEncoder  
   */  
  protected $baseEncoder;  
  /**  
   * Gets the base encoder instance.  
   *  
   * @return \Symfony\Component\Serializer\Encoder\XmlEncoder  
   *   The base encoder.  
   */  
  public function getBaseEncoder() {  
    if (!isset($this->baseEncoder)) {  
      $this->baseEncoder = new BaseXmlEncoder();  
      $this->baseEncoder->setSerializer($this->serializer);  
    }  
    return $this->baseEncoder;  
  }  
  /**  
   * Sets the base encoder instance.  
   *  
   * @param \Symfony\Component\Serializer\Encoder\XmlEncoder $encoder  
   */  
  public function setBaseEncoder($encoder) {  
    $this->baseEncoder = $encoder;  
  }  
  /**  
   * {@inheritdoc}  
   */  
  public function encode($data, $format, array $context = []) {  
    print_r($data);  
    exit();  
    return $this->getBaseEncoder()->encode($data, $format, $context);  
  }  
  /**  
   * {@inheritdoc}  
   */  
  public function supportsEncoding($format) {  
    return in_array($format, static::$format);  
  }  
  /**  
   * {@inheritdoc}  
   */  
  public function decode($data, $format, array $context = []) {  
    print_r($data);  
    exit();  
    return $this->getBaseEncoder()->decode($data, $format, $context);  
  }  
  /**  
   * {@inheritdoc}  
   */  
  public function supportsDecoding($format) {  
    return in_array($format, static::$format);  
  }  
}  
```
2. ### Register the encoder  
You must register your custom encoder via a \*.services.yml file.  
```yaml  
services:  
  serializer.encoder.tvml:  
    class: Drupal\tvml_base\Encoder\TVMLEncoder  
    tags:  
      - { name: encoder, format: tvml }  
```  
If you want this format to be configurable via REST module, you must include the format attribute to the encoder tag.
3. ### Register MIME Type  
If the MIME type of your format isn't registered, register it. The default MIME types are defined in [Request::initializeFormats()](http://api.drupal.org/api/drupal/core!vendor!symfony!http-foundation!Symfony!Component!HttpFoundation!Request.php/function/Request%3A%3AinitializeFormats/8). If the MIME type of your format is not listed there, you need to add it to the Request object. This can be done with an event subscriber.  
```php  
<?php  
namespace Drupal\tvml_base\EventSubscribers;  
use Symfony\Component\EventDispatcher\EventSubscriberInterface;  
/**  
 * Event subscriber for adding additional content types to the request.  
 */  
class OnRequestMimeTypeTVML implements EventSubscriberInterface {  
  /**  
   * Register content type formats on the request object.  
   *  
   * @param \Symfony\Component\HttpKernel\Event\GetResponseEvent $event  
   *   The Event to process.  
   */  
  public function onKernelRequest(GetResponseEvent $event) {  
    $event->getRequest()->setFormat('tvml', ['application/tvml']);  
  }  
  /**  
   * Implements \Symfony\Component\EventDispatcher\EventSubscriberInterface::getSubscribedEvents().  
   */  
  static function getSubscribedEvents() {  
    $events[KernelEvents::REQUEST][] = array('onKernelRequest');  
    return $events;  
  }  
}  
```
4. Your event subscriber must also be registered via \*.services.yml.  
```yaml  
services:  
  serializer.encoder.tvml:  
    class: Drupal\tvml_base\Encoder\TVMLEncoder  
    tags:  
      - { name: encoder, format: tvml }  
  tvml_base.requestEventSubscribber:  
    # Event subscriber class that will listen for the events.  
    class: '\Drupal\tvml_base\EventSubscribers\OnRequestMimeTypeTVML'  
    # Tagged as an event_subscriber to register this subscriber with the event_dispatch service.  
    tags:  
      - { name: 'event_subscriber' }  
```