---
url: https://www.drupal.org/docs/contributed-modules/breakgen/breakgen-crop
description: >-
  To use the crop_crop style effect you need to enable the Breakgen Crop module.
  This module is a submodule from Breakgen and can be enabled manually. Assume
  we have the following breakpoint configuration: breakgen.default: label:
  Default weight: 5 multipliers: - 1x breakgen: block_(1000x1000):
  style_effects: - id: crop_crop weight: -10 data: crop_type: '1:1' The ID of
  the crop type would be generated from the `crop_type` key. The `crop_type` key
  will replace all ":" characters with "x" because configuration machine names
  do not support ":".
published_time: '2020-10-23T18:08:14+00:00'
modified_time: '2020-10-23T18:09:10+00:00'
---
To use the crop\_crop style effect you need to enable the Breakgen Crop module. This module is a submodule from Breakgen and can be enabled manually. 

Assume we have the following breakpoint configuration:

```yaml
breakgen.default:
  label: Default
  weight: 5
  multipliers:
    - 1x
  breakgen:
    block_(1000x1000):
      style_effects:
        - id: crop_crop
          weight: -10
          data:
            crop_type: '1:1'
```

The ID of the crop type would be generated from the \`crop\_type\` key. The \`crop\_type\` key will replace all ":" characters with "x" because configuration machine names do not support ":". The crop\_type key is prefixed with breakgen\_crop\_.

In case of our example the ID generated would be: breakgen\_crop\_1x1.