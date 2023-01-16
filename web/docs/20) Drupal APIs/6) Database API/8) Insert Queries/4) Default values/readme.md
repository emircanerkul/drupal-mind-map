In normal circumstances, if you do not specify a value for a given field and a default value is defined by the table's schema then the database will silently insert that default value for you. In some cases, however, you need to explicitly instruct the database to use a default value. That includes if you want to use all default values for the entire record. To explicitly tell the database to use the default value for a given field, there is a useDefaults() method.

```php
$query->useDefaults(['field1', 'field2']);

```

This line instructs the query to use the database-defined defaults for fields field1 and field2\. Note that it is an error to specify the same field in both useDefaults() and fields() or values(), and an exception will be thrown.