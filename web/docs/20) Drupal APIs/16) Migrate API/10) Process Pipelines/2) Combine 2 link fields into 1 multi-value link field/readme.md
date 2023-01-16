In this example, the source content type has 2 single-value link fields e.g. `field_link_1` and `field_link_2`. In the destination content type we would like to combine those 2 fields into just 1 field. Here's what the incoming arrays may look like (you can output this to the terminal by using the **debug** plugin which comes with the [migrate\_devel](https://www.drupal.org/project/migrate%5Fdevel) module).

`Array (
    [0] => Array
        (
            [link_1_url] => /node/123
            [link_1_title] => Node 123
            [link_1_attributes] => a:0:{}
        )
)`

`Array (
    [0] => Array
        (
            [link_2_url] => /node/456
            [link_2_title] => Node 456
            [link_2_attributes] => a:0:{}
        )
)`

But in order to achieve our objective we need to combine those 2 arrays as follows.

`Array (
    [0] => Array
        (
            [uri] => /node/123
            [title] => Node 123
            [options] => a:0:{}
        )
    [1] => Array
        (
            [uri] => /node/456
            [title] => Node 456
            [options] => a:0:{}
        )
)`

Note that, unlike in the individual field arrays, each inner array above uses the same keys (uri, title, options).

We can create the above array by preparing the data of each field using pseudo-fields (see [Migrate API overview](https://www.drupal.org/docs/drupal-apis/migrate-api/migrate-api-overview#s-glossary)), prefixed with **psf** for clarity, before using the [Migrate Plus](https://www.drupal.org/docs/8/api/migrate-api/migrate-process-plugins/list-of-process-plugins-provided-by-migrate-plus) **merge** plugin to combine the individual field arrays. And the code in your YML file would look like this.

`process:
  # Pre-process Link-1.
  psf_link_1:
    - plugin: sub_process
      source: link_1
      process:
        uri: field_link_1_url
        title: field_link_1_title
        options: field_link_1_attributes

  # Pre-process Link-2.
  psf_link_2:
    - plugin: sub_process
      source: link_2
      process:
        uri: field_link_2_url
        title: field_link_2_title
        options: field_link_2_attributes`

The 2 pseudo-fields become the source in the final step. At last we can condense the code as follows.

`process:
  psf_link_1:
    - plugin: sub_process
      source: link_1
      process:
        uri: field_link_1_url
        title: field_link_1_title
        options: field_link_1_attributes
  psf_link_2:
    - plugin: sub_process
      source: link_2
      process:
        uri: field_link_2_url
        title: field_link_2_title
        options: field_link_2_attributes
  field_links:
    - plugin: merge
      source:
        - '@psf_link_1'
        - '@psf_link_2'`

Note how we reference pseudo-fields using an @ and single quotes.