Ordered by most to least frequently used APIs:

Serializing & deserializing

Using Drupal 8's `serializer` service's ([\\Symfony\\Component\\Serializer\\SerializerInterface](https://api.drupal.org/api/drupal/vendor%21symfony%21serializer%21SerializerInterface.php/interface/SerializerInterface/8)) `serialize()` and `deserialize()` methods:

```php
$output = $this->serializer->serialize($entity, 'json');
$entity = $this->serializer->deserialize($output, \Drupal\node\Entity\Node::class, 'json');

```

Serialization format encoding/decoding (format → array → format

The encoder ([\\Symfony\\Component\\Serializer\\Encoder\\EncoderInterface](https://api.drupal.org/api/drupal/vendor%21symfony%21serializer%21Encoder%21EncoderInterface.php/interface/EncoderInterface/8)) and decoder ([\\Symfony\\Component\\Serializer\\Encoder\\DecoderInterface](https://api.drupal.org/api/drupal/vendor%21symfony%21serializer%21Encoder%21DecoderInterface.php/interface/DecoderInterface/8), to add support for encoding to new serialization formats (i.e. for reading data) and decoding from them (i.e. for writing data).

Normalization (array → object → array)

The normalizer ([\\Symfony\\Component\\Serializer\\Normalizer\\NormalizerInterface](https://api.drupal.org/api/drupal/vendor%21symfony%21serializer%21Normalizer%21NormalizerInterface.php/interface/NormalizerInterface/8)) and denormalizer ([\\Symfony\\Component\\Serializer\\Normalizer\\DenormalizerInterface](https://api.drupal.org/api/drupal/vendor%21symfony%21serializer%21Normalizer%21DenormalizerInterface.php/interface/DenormalizerInterface/8)), to add support for normalizing to a new normalization format. The default format is as close to a 1:1 mapping of the object data as possible, but other formats may want to omit e.g. local IDs (for example node IDs are local, UUIDs are global) or add additional metadata (such as URIs linking to related data).

Entity resolvers

In a Drupal context, usually it will be (content) entities that end up being serialized. When given an entity to normalize (object → array) and then encode (array → format), that entity may have references to other entities. Those references may use either UUIDs ([\\Drupal\\serialization\\EntityResolver\\UuidResolver](https://api.drupal.org/api/drupal/core%21modules%21serialization%21src%21EntityResolver%21UuidResolver.php/class/UuidResolver/8)) or local IDs ([\\Drupal\\serialization\\EntityResolver\\TargetIdResolver](https://api.drupal.org/api/drupal/core%21modules%21serialization%21src%21EntityResolver%21TargetIdResolver.php/class/TargetIdResolver/8)). For advanced use cases, additional mechanisms for referring to other entities may exist; in that case, you would add an additional entity resolver.