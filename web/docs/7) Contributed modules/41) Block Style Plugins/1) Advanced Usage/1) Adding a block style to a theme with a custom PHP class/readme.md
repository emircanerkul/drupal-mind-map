Instead of defining form fields in Yaml, a theme can use a PHP class just like a module. Just add a class and path to the class name in the yaml file.

Standard class Annotations are not discoverable in a theme. Thus the need to use a **themename.blockstyle.yml** file

```yaml
sample_class:
  label: 'Sample Class'
  class: '\Drupal\themename\Plugin\BlockStyle\SampleClass'
```

Then add the new plugin class into `themename/src/Plugin/BlockStyle/SampleClass.php` which will extend the BlockStyleBase class.