AMP pages require Schema.org metadata be provided as JSON-LD in the head of the page. This can be accomplished using the [Schema.org Metadata module](https://www.drupal.org/project/schema%5Fmetadata). See links to documentation and other instructions on its project page.

That module contains numerous sub-modules that can be used to display Schema.org metadata on various kinds of content. At a minimum, enable the Schema.org Metatag base module and the Schema.org Article module. Then configure your article content type to display article metadata.

* Compare your JSON with the [Article guidelines](https://developers.google.com/search/docs/data-types/articles).
* If there is no public page available for Google to read, you can just copy the script markup into the [Structured Data Testing tool](https://search.google.com/structured-data/testing-tool) to verify that all information meets the requirements.