---
url: >-
  https://www.drupal.org/docs/testing/phpunit-in-drupal/comparison-with-phpunit-mocks
description: >-
  Now that we saw how you can use prophecy as a start, let's compare it with the
  other frequently used PHPUnit mocking framework.
published_time: '2015-08-23T19:36:22+00:00'
modified_time: '2019-10-29T14:52:39+00:00'
---
Now that we saw how you can use prophecy as a start, let's compare it with the other frequently used PHPUnit mocking framework.

| PHPUnit mocks                                                                                                                                             | Prophecy mocks                                                                                                                  |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| Basic stubs:                                                                                                                                              | Basic stubs:                                                                                                                    |
| $mock   \-\>expects($this\-\>any())   \-\>method('get')   \-\>with('param1', 'param2')   \-\>willReturnValue('some return value');                        | $prophecy   \-\>get('param1', 'param2')   \-\>willReturn('some return value');                                                  |
| Multiple calls:                                                                                                                                           | Multiple calls:                                                                                                                 |
| $mock   \-\>expects($this\-\>any())   \-\>method('get')   \-\>willReturnMap(\[     \['key1', 'return value 1'\],     \['key2', 'return value 2'\],   \]); | $prophecy   \-\>get('key1')   \-\>willReturn('return value 1'); $prophecy   \-\>get('key2')   \-\>willReturn('return value 2'); |
| Argument wildcards:                                                                                                                                       | Argument wildcards:                                                                                                             |
| // @todo Pending.                                                                                                                                         | // @todo Pending.                                                                                                               |

PHPUnit expectations always add an assert while Prophecy does not. A real equivalent would be `$prophecy->get('param1', 'param2')->willReturn('some return value')->shouldBeCalled()`. If the return value is not asserted directly or indirectly (ie. if the tested code does not use it) a `shouldBeCalled()` or similar prediction is an absolute must. For example:

```php
class ImageOperation {
  public function __construct(Image $image) {
    $this->image = $image;
  }

  public function shrinkAndDesaturate() {
    $this->image->crop(50, 50);
    // Oops! We accidently left this commented out.
    //$this->image->desaturate();
  }
}

class ImageTest extends UnitTestCase {
  public function testShrinkAndDesaturate() {
    $image = $this->prophesize(Image::class);
    $image->crop(50, 50)->willReturn(TRUE);
    $image->desaturate()->willReturn(FALSE);
    $op = new ImageOperation($image->reveal());

    // Since there is no shouldBeCalled() prediction for the each method call, this test
    // will pass, even though it should fail since there was no desaturate() call.
    $op->shrinkAndDesaturate();
  }
}

```