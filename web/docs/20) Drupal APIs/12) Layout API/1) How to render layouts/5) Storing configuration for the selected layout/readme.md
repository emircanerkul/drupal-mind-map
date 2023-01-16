```php
use \Drupal\block\Entity\Block;
use \Drupal\layout_builder\SectionComponent;
use \Drupal\layout_builder\Plugin\SectionStorage\OverridesSectionStorage;
use \Drupal\layout_builder\Section;

$block_1 = Block::load(1);
$block_2 = Block::load(2);

$entity_with_layout_enabled = Node::load(47);

$section_components[$block_1->uuid()] = new SectionComponent($block_1->uuid(), 'first', [
  'id' => $block_1->getPluginId(),
]);
$section_components[$block_2->uuid()] = new SectionComponent($block_2->uuid(), 'second', [
  'id' => $block_2->getPluginId(),
]);

$entity_with_layout_enabled->set(OverridesSectionStorage::FIELD_NAME, new Section('layout_twocol', [], $section_components))->save();
```