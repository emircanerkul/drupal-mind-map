Property values can be added to mock objects by mocking the \_\_get() magic method:

```php
// Create mock object.
$mock_field_item_list = $this->getMockBuilder(FieldItemList::class)
  ->disableOriginalConstructor()
  ->getMock();
// Add mock method.
$mock_field_item_list->expects($this->any())
  ->method('METHOD_NAME')
  ->willReturn('METHOD_RETURN_VALUE');
// Add mock property value.
$mock_field_item_list->expects($this->any())
  ->method('__get')
  ->with('PROPERTY_NAME')
  ->willReturn('PROPERTY_VALUE');
```