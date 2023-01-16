### Manually compile your SASS code

```php
cd themes/custom/your_theme
npx gulp sass
```

### Compile dev version of CSS

```php
npx gulp sass:dev
```

<!-- note-tip -->
> TIP: Compiling dev version of CSS will inject source maps into your CSS which allows you to easily debug CSS, see related SASS code and figure which SASS variables you need to override.

### Update theme

```php
drush bs-tu your_theme
```

<!-- note-tip -->
> TIP: Updating theme with a drush bs-tu command should always be done when you update to the latest version of bs_base.