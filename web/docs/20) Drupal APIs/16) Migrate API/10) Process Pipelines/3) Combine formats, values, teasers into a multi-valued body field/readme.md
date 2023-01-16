Let's say this is your source:

```php
Array
(
    [format] => format 1|format 2|format 3
    [value] => This is the first value|Here is the second value|Third value now
    [teaser] => Teaser 1|Teaser 2|Teaser 3
)
```

The process pipeline below uses the `transpose` plugin from `migrate_plus`.

```yaml
format_array:
  plugin: explode
  delimiter: "|"
  source: format
value_array: 
  plugin: explode
  delimiter: "|"
  source: value
teaser_array: 
  plugin: explode
  delimiter: "|"
  source: teaser
body_not_associative:
  plugin: transpose
  source:
    - '@format_array'
    - '@value_array'
    - '@teaser_array'
body:
  plugin: sub_process
  source: '@body_not_associative'
  process:
    format:
      plugin: extract
      source:
        - 0
      index:
        - 0
    value:
      plugin: extract
      source:
        - 1
      index:
        - 0
    teaser:
      plugin: extract
      source:
        - 2
      index:
        - 0
```

This results in

```php
Array
(
  [body] => Array
        (
            [0] => Array
                (
                    [format] => format 1
                    [value] => This is the first value
                    [teaser] => Teaser 1
                )

            [1] => Array
                (
                    [format] => format 2
                    [value] => Here is the second value
                    [teaser] => Teaser 2
                )

            [2] => Array
                (
                    [format] => format 3
                    [value] => Third value now
                    [teaser] => Teaser 3
                )

        )
)
```