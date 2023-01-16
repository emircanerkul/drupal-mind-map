[CSS logical operators](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS%5FLogical%5FProperties) are additional properties that work well with right-to-left (RTL) languages, such as Arabic. Some of these are supported in modern browsers, while some are not. 

PostCSS Present ENV includes the following plugins that will convert them into a standard syntax. 

* [postcss-logical](https://github.com/csstools/postcss-logical)
* [postcss-dir-pseudo-class](https://github.com/jonathantneal/postcss-dir-pseudo-class)

These plugins will convert the following modern syntax

```php
.selector {
   margin-inline-end: 10px;
}

```

into something that all supported browsers can understand.

```php
[dir="ltr"] .selector { margin-right: 10px; }
[dir="rtl"] .selector { margin-left: 10px; }

```

### Gotchas

There are several “gotchas” that you need to be aware of. 

1\. **Additional specificity** \- When adding the `[dir="rtl"]` attribute onto the selector, the plugin introduces additional specificity into the selector, which may cause unexpected bugs. Example:

```php
.selector {
  padding-inline-end: 10px;
}

.selector {
  padding: 0;
}

```

We expect the `padding: 0` to override the `padding-inline-end: 10px` because it appears after the first rule. However, PostCSS will add `dir` attributes to the first selector, but not the second, which overrides this specificity. 

```php
[dir="ltr"] .selector {padding-right: 10px; }
[dir="rtl"] .selector {padding-left: 10px; }
.selector { padding: 0; }

```

To work around this, we need to be explicit with the inline logical properties. 

Instead of writing 

```php
padding: 0;

```

Write the following:

```php
padding-block: 0;
padding-inline-start: 0;
padding-inline-end: 0;

```

2\. **Non support of border-\*-\*-radius** \- PostCSS Present ENV currently does not support logical border-radius properties such as `border-start-start-radius`. The latest version of PostCSS Logical does support these, and the issue to update this within PostCSS Preset ENV is at <https://github.com/csstools/postcss-preset-env/issues/179>