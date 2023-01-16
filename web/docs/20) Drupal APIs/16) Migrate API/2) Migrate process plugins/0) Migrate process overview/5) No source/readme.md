If a destination property should not have a value set at all it is still advised to add to the migration like this:

```yaml
process:
  foo: { }

```

To denote an empty array (`[]` can be used as well). The system recognizes and handles the empty pipeline specially and does not set the `foo` property at all. However, this allows an analysis tool or UI to recognize the migration is aware of this property and simply does not want it to be set. Without this, a warning might be issued that a destination property is left dangling.

See [constant values](https://drupal.org/node/2171833) on how to set NULL instead of not setting a value.