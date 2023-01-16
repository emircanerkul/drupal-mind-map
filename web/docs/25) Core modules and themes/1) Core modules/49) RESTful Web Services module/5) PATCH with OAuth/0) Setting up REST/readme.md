You need to enable the PATCH method with HAL format and OAuth authentication. This can be done easily using [REST UI](https://www.drupal.org/project/restui) module.

This is what the Content resource looks like after we make the changes at `admin/config/services/rest`:

![REST UI setup](https://www.drupal.org/files/rest_ui_setup.png)

Then, you need to adjust permissions so authenticated users can access the content.