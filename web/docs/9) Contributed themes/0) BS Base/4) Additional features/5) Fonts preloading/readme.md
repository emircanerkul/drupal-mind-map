---
url: >-
  https://www.drupal.org/docs/8/themes/bs-base/additional-features/fonts-preloading
description: >-
  You can preload your theme custom fonts by defining `preload-fonts` section in
  theme info file, for example: preload-fonts: - fonts/Roboto-Regular.woff2 -
  '@custom_theme/fonts/Roboto-Bold.woff2' -
  /libraries/shariff/fontawesome-webfont.woff2 -
  https://fonts.gstatic.com/s/roboto/v29/KFOmCnqEu92Fr1Mu72xKOzY.woff2 This will
  add preload links to your fonts in html head section. The first font
  definition with a relative path `fonts/Roboto-Regular.woff2` will load a font
  from current active theme.
published_time: '2021-11-03T21:47:32+00:00'
modified_time: '2022-06-21T08:06:57+00:00'
---
You can preload your theme custom fonts by defining \`preload-fonts\` section in theme info file, for example:

```yaml
preload-fonts:
  - fonts/Roboto-Regular.woff2
  - '@custom_theme/fonts/Roboto-Bold.woff2'
  - /libraries/shariff/fontawesome-webfont.woff2
  - https://fonts.gstatic.com/s/roboto/v29/KFOmCnqEu92Fr1Mu72xKOzY.woff2
```

This will add preload links to your fonts in html head section. The first font definition with a relative path \`fonts/Roboto-Regular.woff2\` will load a font from current active theme.

You can combine fonts preloading with \`font-display: optional\` in font family definition to completely eliminate layout shifting and flash of invisible text (FOIT).

<!-- note-warning -->
> WARNING: If you are using preload-fonts in your custom base theme do not forget to override preload-fonts in your client theme if you are using different fonts!

Resources:

* <https://www.freecodecamp.org/news/web-fonts-in-2018-f191a48367e8/#preload-fonts>
* <https://web.dev/preload-optional-fonts/>