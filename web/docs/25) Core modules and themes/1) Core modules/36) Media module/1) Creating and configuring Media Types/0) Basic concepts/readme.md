If you have worked with **nodes** before, you will find some similarities in the basic concepts when dealing with **media entities**. For example, **Media Types** are the equivalent to **media entities** of what **Content Types** are for **nodes**. In other words, the `media` entity (just like any other content entity in Drupal 8) has **bundles**, which for the end user are exposed using the terminology of **Media Types**.

As soon as you enable the **Media** module, some Media Types will be created automatically for you:

* Document
* Image
* Audio file (local)
* Video file (local)
* Remote video

(Note that these are available when using the Standard profile. If you are using another distribution or install profile, other types may be available instead of these ones, or you may need to create your own.)

They are ready to use, and if you want to directly create a Media entity you can go to `/media/add/{type_name} `and see how the media entity form looks like.

One important difference of media entities when compared to nodes is that _not all media types are equal_. They are specialized so that they are able to know how to manage the media resource they are dealing with in the best way. For example, media types that deal with _images_ will be able to validate file extensions, as well as know how to map width/height image information to Drupal fields. On the other hand, this knowledge won't be necessary or useful to _youtube_ media entities, which in turn will probably need to know how to retrieve a thumbnail or the video author information from the remote video server.

This specialization is done by delegating all this "domain" knowledge to a specific plugin type, called **Source Plugin**. All Media Types (created by Drupal or by the end user) need to define what Source Plugin they will use. For example, you can have many image media types that are all using the "image" source plugin. At this moment, Drupal comes with three Source Plugins implemented in core:

* The File source plugin
* The Image source plugin
* The oEmbed source plugin

They largely correspond to the contributed modules [Media Entity Document](https://drupal.org/project/media%5Fentity%5Fdocument), [Media Entity Image](https://www.drupal.org/project/media%5Fentity%5Fimage), and [Video Embed Field](https://drupal.org/project/video%5Fembed%5Ffield), when Media Entity was not part of Drupal core. Other plugins will probably be added to Drupal core in the future. In parallel, many contributed modules provide source plugins (providers) for core media entities:

* [Slideshow](https://drupal.org/project/media%5Fentity%5Fslideshow)
* [Twitter](https://drupal.org/project/media%5Fentity%5Ftwitter)
* [Facebook](https://drupal.org/project/media%5Fentity%5Ffacebook)
* [Instagram](https://drupal.org/project/media%5Fentity%5Finstagram)
* [Slideshare](https://www.drupal.org/project/media%5Fentity%5Fslideshare)

... and [many](https://www.drupal.org/node/2860796)[ more](https://www.drupal.org/node/2860796).

Any site listed in <https://oembed.com/providers.json> is supported by the core oEmbed source plugin. Though currently only YouTube and Vimeo are enabled. The [oEmbed Providers module](https://www.drupal.org/project/oembed%5Fproviders) can be used to enable others via the UI.