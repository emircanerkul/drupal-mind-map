To add a field to the Select query, use the addField() method:

```php
$title_field = $query->addField('n', 'title', 'my_title');

```

The above code will instruct the query to select the "title" field of the table with alias "n", and give it an alias of "my\_title". If no alias is specified, one will be generated automatically. In the vast majority of cases the generated alias will simply be the field name. In this example, that would be "title". If that alias already exists, the alias will be the table name and field name. In this example, that would be "n\_title". If that alias already exists, a counter will be added to the alias until an unused alias is found, such as "n\_title\_2".

Note that if you are creating and populating the query yourself and do not specify an alias and the default alias is not available, there is almost certainly a bug in your code. If you are writing a hook\_query\_alter() implementation, however, you cannot know with certainty what aliases are already in use so you should always use the generated alias.