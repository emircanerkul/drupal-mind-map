If an element on the page:

* has an accessible alternative and would be confusing by itself, or,
* in general, should only be visible to sighted users,

... then you should make it invisible to screen readers.

You can do this by:

* giving the element the attribute `aria-hidden="true"`

Example:

A control to remove a search filter shows an "x" to sighted users only AND provides accessible, visually-hidden instructions for screen-reader users:

```php
Currently filtering by: <a href="...">Module <span class="visually-hidden">Click to remove this filter.</span> <span aria-hidden="true">x</span></a>

```

Reasoning:

There is already accessible alternative text.

Hearing an "x" by itself, even after hearing the alternative text, would be confusing to screen-reader users.

### Misuse

Making content invisible to screen readers means that people using them cannot perceive or interact with it. To conform to [WCAG 2.0 section 1.1](http://www.w3.org/TR/WCAG20/#text-equiv), you **must** provide accessible, alternative content, otherwise people using assistive technology will not be able to use it.