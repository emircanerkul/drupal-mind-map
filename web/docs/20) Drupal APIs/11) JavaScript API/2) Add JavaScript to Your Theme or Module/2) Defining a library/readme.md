In your theme or module’s root directory create a `*.libraries.yml` file. An example `example.libraries.yml` file would be:

```yaml
example:
  version: 1.x
  js:
    js/example.js: {}
    js/example2.js: { minified: true }
```

* The root element `example` is usually the namespace of your project but it can be anything you want since you can define numerous libraries in a project.
* Declare a version of the library.
* Include JavaScript files with the `js` element. This will hold an array of JavaScript files and their associated properties.
* Beneath that declare the path from the project root to the file. The filename forms the key of the array of JavaScript files.

For each file, you can define a number of properties. If you don't wish to nominate any custom properties, then you must provide an empty array `{}` like the example above. Some examples properties you could add include:

* `external`: bool (load the script from an external source)
* `minified`: bool (tells Drupal it needn’t try to compress the script)
* `preprocess`: bool (tells Drupal if it should be preprocessed (disable aggregation)