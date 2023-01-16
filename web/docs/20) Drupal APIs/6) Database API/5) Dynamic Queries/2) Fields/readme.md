---
url: https://www.drupal.org/docs/8/api/database-api/dynamic-queries/fields
description: >-
  Add a field To add a field to the Select query, use the addField() method:
  $title_field = $query->addField('n', 'title', 'my_title'); The above code will
  instruct the query to select the "title" field of the table with alias "n",
  and give it an alias of "my_title". If no alias is specified, one will be
  generated automatically. In the vast majority of cases the generated alias
  will simply be the field name. In this example, that would be "title". If that
  alias already exists, the alias will be the table name and field name. In this
  example, that would be "n_title".
published_time: '2017-07-13T21:15:52+00:00'
modified_time: '2022-02-25T22:15:57+00:00'
---
