---
url: https://www.drupal.org/docs/8/api/serialization-api/how-the-serializer-works
description: >-
  The Serialization API depends on Symfony's Serializer component. Serializer's
  separation of concerns The serializer splits the work into two steps. First,
  it will normalize the object to an array. Then it will encode that array into
  the requested format. This work is split across two interfaces, the
  NormalizerInterface and the EncoderInterface. When a Serializer is created,
  all of the Normalizer objects which might be necessary to handle the data are
  passed in, as well as all of the relevant Encoder objects.
published_time: '2013-01-25T21:27:46+00:00'
modified_time: '2016-10-13T17:43:31+00:00'
---
The Serialization API depends on Symfony's [Serializer component](http://symfony.com/doc/current/components/serializer.html). 