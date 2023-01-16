---
url: >-
  https://www.drupal.org/docs/8/themes/barrio-bootstrap-4-drupal-89-theme/bootstrap-barrio-tips-tricks/svg-icons
description: >-
  Barrio includes predefined icons for default menu links. It also sets classes
  to identify menu links. To extend the usage of the links, in your subtheme css
  file include the following snippet: a.nav-link--user::before { display:
  inline-block; content: ""; background-image: url('data:image/svg+xml,');
  background-repeat: no-repeat; -webkit-background-size: 1rem 1rem;
  background-size: 1rem 1rem; background-position: 0 0.25rem; width: 1.5rem;
  height: 1.2rem; } Change the class to meet your own element. Bootstrap SVG
  icons could be found here Bootstrap Icons.
published_time: '2020-04-20T00:02:00+00:00'
modified_time: '2021-03-11T21:35:31+00:00'
---
Barrio includes predefined icons for default menu links.

It also sets classes to identify menu links.

To extend the usage of the links, in your subtheme css file include the following snippet:

```php
a.nav-link--user::before {
  display: inline-block;
  content: "";
  background-image: url('data:image/svg+xml,<svg class="bi bi-person-check" width="1em" height="1em" viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11 14s1 0 1-1-1-4-6-4-6 3-6 4 1 1 1 1h10zm-9.995-.944v-.002.002zM1.022 13h9.956a.274.274 0 00.014-.002l.008-.002c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664a1.05 1.05 0 00.022.004zm9.974.056v-.002.002zM6 7a2 2 0 100-4 2 2 0 000 4zm3-2a3 3 0 11-6 0 3 3 0 016 0zm6.854.146a.5.5 0 010 .708l-3 3a.5.5 0 01-.708 0l-1.5-1.5a.5.5 0 01.708-.708L12.5 7.793l2.646-2.647a.5.5 0 01.708 0z" clip-rule="evenodd"/></svg>');
  background-repeat: no-repeat;
  -webkit-background-size: 1rem 1rem;
          background-size: 1rem 1rem;
  background-position: 0 0.25rem;
  width: 1.5rem;
  height: 1.2rem;
}
```

Change the class to meet your own element. Bootstrap SVG icons could be found here [Bootstrap Icons.](https://icons.getbootstrap.com/)

To change the color of the icon use the following snippet, changing the fill property.

```php
.tabs a.nav-link--user-login::before {
  background-image: url('data:image/svg+xml,<svg class="bi bi-unlock" width="1em" height="1em" viewBox="0 0 16 16" fill="black" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9.655 8H2.333c-.264 0-.398.068-.471.121a.73.73 0 00-.224.296 1.626 1.626 0 00-.138.59V14c0 .342.076.531.14.635.064.106.151.18.256.237a1.122 1.122 0 00.436.127l.013.001h7.322c.264 0 .398-.068.471-.121a.73.73 0 00.224-.296 1.627 1.627 0 00.138-.59V9c0-.342-.076-.531-.14-.635a.658.658 0 00-.255-.237A1.122 1.122 0 009.655 8zm.012-1H2.333C.5 7 .5 9 .5 9v5c0 2 1.833 2 1.833 2h7.334c1.833 0 1.833-2 1.833-2V9c0-2-1.833-2-1.833-2zM8.5 4a3.5 3.5 0 117 0v3h-1V4a2.5 2.5 0 00-5 0v3h-1V4z" clip-rule="evenodd"/></svg>');
}
```