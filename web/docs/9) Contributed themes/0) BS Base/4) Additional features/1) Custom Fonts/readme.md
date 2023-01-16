---
url: https://www.drupal.org/docs/8/themes/bs-base/additional-features/custom-fonts
description: >-
  We have a `$theme-fonts` SASS map variable which we use to define fonts and
  then automatically generate font-family rules from it. The `theme-fonts` is
  generated from two additional SASS variables `$base-fonts` and
  `$additional-fonts`: // Base theme fonts. $base-fonts: () !default; //
  Additional fonts that can be defined in child theme. $additional-fonts: ()
  !default; // Final theme fonts definition that will be used for font family
  generation.
published_time: '2020-05-21T14:23:29+00:00'
modified_time: '2020-05-21T14:24:42+00:00'
---
We have a \`$theme-fonts\` SASS map variable which we use to define fonts and then automatically generate font-family rules from it. The \`theme-fonts\` is generated from two additional SASS variables \`$base-fonts\` and \`$additional-fonts\`:

```php
// Base theme fonts.
$base-fonts:        () !default;
// Additional fonts that can be defined in child theme.
$additional-fonts:  () !default;
// Final theme fonts definition that will be used for font family generation.
$theme-fonts:       map-merge($base-fonts, $additional-fonts) !default;
```

If you have a custom parent theme you would use \`$base-fonts\` do define base fonts that all your child themes will use. Then in child themes when you need to add the additional custom font you would use \`$additional-fonts\` map.

Most of the time you would just define \`$base-fonts\` SASS variable, for example:

```php
$base-fonts: (
  inter-regular: (
    font-family: Inter,
    font-style: normal,
    font-weight: normal,
    src: 'url("../../fonts/inter/inter-regular-webfont.woff2") format("woff2"), url("../../fonts/inter/inter-regular-webfont.woff") format("woff")'
  ),
  inter-bold: (
    font-family: Inter,
    font-style: normal,
    font-weight: bold,
    src: 'url("../../fonts/inter/inter-bold-webfont.woff2") format("woff2"), url("../../fonts/inter/inter-bold-webfont.woff") format("woff")'
  ),
);
```

You can also do this in theme-options.yml file but you need to take care of extra quotes:

```yaml
base-fonts:
  inter-bold:
    font-family: 'Inter'
    font-style: 'normal'
    font-weight: 'bold'
    # Do note the double quotes here, they are needed because of SASS map.
    src: "'url(\"../../fonts/inter/inter-bold-webfont.woff2\") format(\"woff2\"), url(\"../../fonts/inter/inter-bold-webfont.woff\") format(\"woff\")'"
  inter-regular:
    font-family: 'Inter'
    font-style: 'normal'
    font-weight: 'normal'
    # Do note the double quotes here, they are needed because of SASS map.
    src: "'url(\"../../fonts/inter/inter-regular-webfont.woff2\") format(\"woff2\"), url(\"../../fonts/inter/inter-regular-webfont.woff\") format(\"woff\")'"
```

We also support \`font-display\` and \`unicode-range\` options.

Finally to define which font family you are using for body and headings:

```php
font-family-base: 'Roboto, sans-serif'
headings-font-family: 'Inter, sans-serif'

```