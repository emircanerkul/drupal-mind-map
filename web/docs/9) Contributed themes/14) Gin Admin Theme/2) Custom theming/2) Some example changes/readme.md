### Gin Secondary Toolbar

```php
/**
 * @file
 * A place for custom styles.
 */

/* Colour variables. */
:root {
  --black: #000;
  --cello: #1f3357;
  --flamenco: #ff7d08;
  --lipstick: #bd0171;
  --mine-shaft: #333;
  --persian-green: #00a699;
  --white: #fff;
}

/* Secondary toolbar. */
.gin-secondary-toolbar {
  height: 100%;
  padding: 15px 0;
}

/* Gin breadcrumb rulesets. */
.gin-breadcrumb {
  padding: 10px 25px;
  border-radius: 0.75rem;
  background-color: var(--mine-shaft);
}

.gin-breadcrumb-wrapper .gin-breadcrumb__link {
  transition: 0.3s;
  color: var(--white);
}

.gin-breadcrumb-wrapper .gin-breadcrumb__link:hover {
  transition: 0.3s;
  color: var(--flamenco);
}

.gin-breadcrumb-wrapper .gin-breadcrumb__link::before {
  transition: 0.3s;
}

.gin-breadcrumb__item:first-of-type .gin-breadcrumb__link::before {
  background-color: var(--white);
}

.gin-breadcrumb__item:first-of-type .gin-breadcrumb__link:hover::before {
  background-color: var(--flamenco);
}
```

![Secondary toolbar with CSS changes](https://www.drupal.org/files/custom-styles-secondary-toolbar-gin-admin-theme.png)