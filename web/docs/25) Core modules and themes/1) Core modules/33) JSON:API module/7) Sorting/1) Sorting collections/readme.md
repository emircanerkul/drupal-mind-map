### Sorting by 'created'

Sort a collection by its "created" timestamp (defaults to sorting in ascending order)

```php
SHORT
sort=created

NORMAL
sort[sort-created][path]=created

```

### Sort by author's username

Sort a collection by author's username, in descending order. Note that the preceding "minus" sign (-) specifies descending order.

```php
SHORT
sort=-uid.name

NORMAL
sort[sort-author][path]=uid.name
sort[sort-author][direction]=DESC

```

### Sort by multiple fields

Sort a collection by multiple fields.

```php
SHORT
sort=-created,uid.name

NORMAL
sort[sort-created][path]=created
sort[sort-created][direction]=DESC
sort[sort-author][path]=uid.name

```