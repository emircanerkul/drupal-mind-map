---
url: >-
  https://www.drupal.org/docs/8/creating-custom-modules/creating-custom-blocks/process-the-block-config-form
description: >-
  Add the following method to the HelloBlock class. In this example, it is
  located in the src/Plugin/Block/HelloBlock.php file, but as you start thinking
  in a more OOP fashion, where it is physically located in the file structure is
  less important than where it is in the namespace. If you are a very clever OO
  programmer, you keep the two things very tightly aligned. But just in case, it
  is actually the namespace, very much like the Module folder name vs.
published_time: '2015-04-08T04:37:00+00:00'
modified_time: '2019-10-19T19:32:50+00:00'
---
Add the following method to the `HelloBlock` class. In this example, it is located in the `src/Plugin/Block/HelloBlock.php` file, but as you start thinking in a more OOP fashion, where it is physically located in the file structure is less important than where it is in the namespace. If you are a very clever OO programmer, you keep the two things very tightly aligned. But just in case, it is actually the namespace, very much like the Module folder name vs. machine name for our module discussion earlier in this section, that will be important later on for when you want to programmatically interact with your module's code.

```php
  /**
   * {@inheritdoc}
   */
  public function blockSubmit($form, FormStateInterface $form_state) {
    $this->configuration['hello_block_name'] = $form_state->getValue('hello_block_name');
  }

```

If you have a fieldset wrapper around your form elements then you should pass an array to the `getValue()` function, instead of passing the field name alone. Here `myfieldset` is the fieldset which is wrapping the `hello_block_name` field.

```php
$this->configuration['hello_block_name'] = $form_state->getValue(['myfieldset', 'hello_block_name']);


```

Adding this code will mean that the form will process, and the input to the form will be saved in the configuration for that instance of the block, independent of the other instances of the block. The block is still not making use of the results of the configuration change, however. That is in the next book page.