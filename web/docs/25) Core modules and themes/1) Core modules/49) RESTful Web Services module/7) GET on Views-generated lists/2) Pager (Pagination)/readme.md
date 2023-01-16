There is limited support for pagination. Only two of the four pager types have more than 1 page. 'Display all items' and 'Display a specific number of items' are a single page. The Mini and Full pagers can be controlled by GET query parameter **page** and if is exposed to the user **items\_per\_page**. The response only includes the rows. It does not include the total number of items, nor anything else to do with paging. 

```php
[
  {...},
  {...}
]
```

The [Pager Serialzer](https://www.drupal.org/project/pager%5Fserializer) module extends the Serializer to include the pager by creating a custom Views style plugin. By default, the Pager Serializer module produces something like this, but allows for the keys to customized.

```php
{
  rows: [
    {...},
    {...}
  ],
  pager: {
    current_page: 0,
    total_items: 6,
    total_pages: 2,
    items_per_page: 5
  }
}

```