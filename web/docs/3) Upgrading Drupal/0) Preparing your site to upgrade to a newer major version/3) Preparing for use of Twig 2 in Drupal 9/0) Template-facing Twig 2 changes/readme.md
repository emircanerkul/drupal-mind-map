Twig 2 has a few small changes that impact the template level language (i.e. the language used in .html.twig files):

* As of Twig 2.0, macros imported in a file are no longer available in child templates anymore (via an `includecall` for instance). Macros must now be explicitly imported in each file they are used.
* Silent display of undefined blocks is deprecated since version 1.29 and will throw an exception in 2.0\. This can be addressed by wrapping potentially-undefined blocks in conditionals that verify they are defined before attempting to display them.  
```php  
{% if block('potentially-undefined-block') is defined %}  
  {{ block(‘potentially-undefined-block’) }}  
{% endif %}  
```
* As of Twig 1.x, the `raw` tag is deprecated in favor of `verbatim`
* The `sameas` and `divisibleby` tests are deprecated in favor of `same as` and `divisible by` respectively.
* As of Twig 1.x, using the `_self` global variable to access to the current `\Twig\Template` instance is deprecated. In Twig 2.0, the output of `_self` is the current template name, so instances of `{{ _self.templateName }}` should be replaced with `{{ _self }}`. Note that `_self` can still be used to access macros - e.g. `{{ _self.macro_name() }}` is still valid.