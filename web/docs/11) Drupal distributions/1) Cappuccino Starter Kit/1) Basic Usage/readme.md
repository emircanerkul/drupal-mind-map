---
url: https://www.drupal.org/docs/8/distributions/cappuccino-starter-kit/basic-usage
description: >-
  Currently the distribution does not come with default content, so the site
  will be empty after installation. The homepage is populated by the paragraphs
  in the "Homepage" Site Settings entity. First it needs to be created under the
  admin/content/site-settings page. Click on the "Create Setting" button, and
  then the "Add paragraph" button to start editing the entity. There is a wide
  selection of paragraphs to choose from: It is also possible to add paragraphs
  to the top, bottom, left, right, footer and header regions. This can be done
  the same way as the homepage example above.
published_time: '2019-07-29T16:45:15+00:00'
modified_time: '2019-07-29T21:58:50+00:00'
---
Currently the distribution does not come with default content, so the site will be empty after installation.

The homepage is populated by the paragraphs in the "Homepage" [Site Settings](https://www.drupal.org/project/site%5Fsettings) entity. First it needs to be created under the admin/content/site-settings page. Click on the "Create Setting" button, and then the "Add paragraph" button to start editing the entity.

![New homepage setting](https://www.drupal.org/files/setup_01.jpg)

There is a wide selection of paragraphs to choose from:

![Selection of paragraphs](https://www.drupal.org/files/setup_02.jpg)

It is also possible to add paragraphs to the top, bottom, left, right, footer and header regions. This can be done the same way as the homepage example above.

The first time the header and footer setting is created the Drupal cache might need to be cleared in order to make it appear on the site.

It is also possible to define a set of paragraph to be always added to a new node by creating the "Content template" Site Setting. It is possible to create more than one instance of this setting.

![](https://www.drupal.org/files/setup_03.jpg)

First the content type needs to be selected, then each paragraph field can have several paragraphs defined as default content.