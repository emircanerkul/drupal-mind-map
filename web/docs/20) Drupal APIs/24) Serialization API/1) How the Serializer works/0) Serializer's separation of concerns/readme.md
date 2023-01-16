The serializer splits the work into two steps. First, it will **normalize** the object to an array. Then it will **encode** that array into the requested format.

![Diagram showing object transformed to array by normalize method and array transformed to string by encode](https://www.drupal.org/files/serialize-process.png)

This work is split across two interfaces, the [NormalizerInterface](https://github.com/symfony/symfony/blob/master/src/Symfony/Component/Serializer/Normalizer/NormalizerInterface.php) and the [EncoderInterface](https://github.com/symfony/symfony/blob/master/src/Symfony/Component/Serializer/Encoder/EncoderInterface.php). When a Serializer is created, all of the Normalizer objects which might be necessary to handle the data are passed in, as well as all of the relevant Encoder objects.

```php
$encoders = array(new XmlEncoder(), new JsonEncoder());
$normalizers = array(new ComplexDataNormalizer(), new ListNormalizer(), new TypedDataNormalizer());

$serializer = new Serializer($normalizers, $encoders);

```

NOTE: Except in rare cases, you shouldn't create a new Serializer. Core adds a serializer service to the dependency injection container and modules should use and modify that Serializer.