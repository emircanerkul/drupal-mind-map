---
url: https://www.drupal.org/docs/drupal-apis/serialization-api/adding-new-formats
description: >-
  THIS IS ALL WRONG AND NEEDS TO BE UPDATED. See \Drupal\hal\HalServiceProvider
  for a correct example. Core supports JSON and XML, as well as HAL-JSON. It is
  easy to add support for other formats. Adding basic support As explained in
  How the Serializer works, the serialization process has two parts,
  normalization and encoding. If the array structure created by core's default
  Normalizers is acceptable for your format, then you can simply add an Encoder.
  Create an encoder Your Encoder should implement EncoderInterface. See
  Drupal\hal\Encoder for a simple example.
published_time: '2013-01-27T18:13:08+00:00'
modified_time: '2021-10-26T17:02:18+00:00'
---
**THIS IS ALL WRONG AND NEEDS TO BE UPDATED. See \\Drupal\\hal\\HalServiceProvider for a correct example.**

Core supports JSON and XML, as well as HAL-JSON. It is easy to add support for other formats.