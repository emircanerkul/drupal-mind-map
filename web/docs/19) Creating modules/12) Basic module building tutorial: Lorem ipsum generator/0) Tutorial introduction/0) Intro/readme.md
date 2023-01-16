Much has been said - and argued - about Drupal 8 and later, and one thing's for sure: module building has changed a great deal. There's plenty of tutorials covering the new ground, and in every one of them, authors advise developers to look out for even more modifications as the code matures.

Over the last few days, I've investigated [some](https://www.drupal.org/developing/modules/8) of [those](https://www.youtube.com/watch?v=tmT6CATUWbk) [tutorials](http://www.sitepoint.com/series/how-to-build-a-drupal-8-module), as well as the [Examples](https://drupal.org/project/examples) module and have come up with a pretty neat example - one that I hope remains current in the near future!

### Tutorial goal

![Tutorial goal](https://www.drupal.org/files/01_8.png)  
What we're building in this tutorial is a module for _[lorem ipsum](https://en.wikipedia.org/wiki/Lorem%5Fipsum)_ generation. Simply put, it's a module that combines random phrases to create filler text. Users can select how many paragraphs of text and how many sentences on each paragraph, hit a button and get some material for their layout needs.

The module provides a simple settings page and a block with a form for customising how much text to generate. There's also default settings, permissions, tests and theming involved.

![Folder structure](https://www.drupal.org/files/02_5.png)![File structure](https://www.drupal.org/files/03_5.png)  
_This is what the finished structure looks like_