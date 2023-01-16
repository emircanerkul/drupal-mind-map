**The general steps for loading assets (CSS/JS) are:**

1. Save the CSS or JS to a file.
2. Define a "library", which can contain both CSS and JS files.
3. "Attach" the library to a render array in a hook.

But in the case of themes, there is an alternative to step 3: themes can choose to load any number of asset libraries on _all_ pages.