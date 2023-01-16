---
url: >-
  https://www.drupal.org/docs/8/api/migrate-api/migrate-destination-plugins-examples/migrating-media
description: >-
  Media is a wonderful tool and it is now quite mature and part of Drupal core.
  It allows easier handling of all media types (file attachments, videos, images
  etc). Migrations can also import files into the media library easily. The only
  thing is that you need to execute two separate migrations. Example: migrating
  first to files and then to media First we migrate the files to Drupal (as
  managed files) using the entity:file destination plugin. Then a second
  migration is executed, with the same source data, this time to create media
  entities with the entity:media destination plugin.
published_time: '2019-11-08T13:04:43+00:00'
modified_time: '2020-05-09T08:04:05+00:00'
---
Media is a wonderful tool and it is now quite mature and part of Drupal core. It allows easier handling of all media types (file attachments, videos, images etc). Migrations can also import files into the media library easily. The only thing is that you need to execute two separate migrations.