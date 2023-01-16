**Include only specific block content types**

```yaml
sample_block_style:
  label: 'Sample Block Style'
  include:
    - 'block_content_type'
```

**Exclude specific blocks**

```yaml
sample_block_style2:
  label: 'Sample Block Style 2'
  exclude:
    - 'block_plugin_id'
```

**Only show styles on the Basic custom block**

```yaml
sample_block_style3:
  label: 'Only for the Basic custom block'
  include:
    - 'basic'
```

**Don't show styles on the Main Menu**

```yaml
sample_block_style4:
  label: 'Hide from the Main Menu'
  exclude:
    - 'system_menu_block:main'
```

**Don't show styles on any menu**

```yaml
sample_block_style5:
  label: 'Hide from all Menus'
  exclude:
    - 'system_menu_block:*'
```