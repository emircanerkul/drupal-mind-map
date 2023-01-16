If the rendering layer from Drupal is producing invalid HTML code by processing the demo content pages, then the CI-pipeline should fail. A validation error means a violation of the [HTML 5.x standard which is defined by the W3C consortium](https://dev.w3.org/html5/spec-LC/).

Please consider the [requirements](#requirements) as first.

You can use the HTML validation also locally, by executing the following console command.

```php
bash docroot/profiles/contrib/degov/scripts/pipeline/shared_scripts/html_validation.sh 
```

### [Ignore validation](#ignore-validation)

The validation errors don't need to be real errors. There might be [new HTML properties](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/controlsList) which are not part of the HTML 5.x standard or are not part of HTML validation tool's functionality.

To add exceptions to the validation, you can edit the [message-filters.txt](https://github.com/validator/validator/wiki/Message-filtering#using-the-resourcesmessage-filterstxt-file) file.

You can check the current exceptions in deGov by the following file:

```php
docroot/profiles/contrib/degov/scripts/pipeline/html_validation_shared/message-filters.txt 
```

Please describe any added exception with a descriptive comment.

### [Further resources about the Nu Html Checker](#further-resources-about-the-nu-html-checker)

For HTML validation we are using the `Nu Html Checker`. Further infos about this application can be found via the following urls:

* [Nu Html Checker Docker Image](https://hub.docker.com/r/validator/validator)
* [GitHub repository](https://github.com/validator/validator)