Various characters and strings can be considered "whitespace" in an HTML string. Sometimes it is right to preserve them, but sometimes you want to replace them all with simple space characters:

```yaml
process:
  field_formatted_text:
    -
      plugin: callback
      source: html_string
      callable: htmlentities
    -
      plugin: str_replace
      search:
        - '&#160;'
        - '&nbsp;'
      replace: ' '
    -
      plugin: str_replace
      regex: true
      search: '@\s+@'
      replace: ' '
    -
      plugin: callback
      callable: trim

```

This snippet will

* replace actual non-breaking spaces (and other special characters) with HTML entities using the PHP [htmlentities()](https://www.php.net/htmlentities) function;
* replace the numeric or named HTML entities for non-breaking spaces with actual space characters;
* replace one or more whitespace characters (including newlines and tabs) with a single space, like `preg_replace('@\s+@', ' ', $string)`;
* remove leading and trailing spaces with the PHP [trim()](https://www.php.net/trim) function.