The [Drupal 8 ZURB Foundation 6 contributed theme](https://www.drupal.org/project/zurb%5Ffoundation) (D8F6 for short) is the logical application of Foundation for Sites 6 to Drupal 8’s YAML-based theming.

It is intended to be a parent theme, and YOU create your custom subtheme. Your subtheme will inherit from the parent so you’ll be able to take advantage of future updates.

Like its [Drupal 7 branches](https://www.drupal.org/node/1948260), the 8.x-6.x version tries to do little out of the box while giving subthemes as much flexibility as possible.

D8F6 has also been jam-packed with some excellent tools and methodologies to speed up and organise your theme development. Here are some examples

* [Gulp](https://gulpjs.com/) \- "a toolkit for automating painful or time-consuming tasks in your development workflow”
* [Sass](http://sass-lang.com/) \- the recommended styling language that is compiled into production-ready CSS. If you’re still writing vanilla CSS, [then you need to educate yourself](http://sass-lang.com/guide) and get onto Sass!
* [Sass-lint](https://github.com/sasstools/gulp-sass-lint) \- helping you write beautiful, organised Sass
* [SMACSS](https://smacss.com/) \- a "flexible thought process" for organising your Sass files
* [Source maps](http://thesassway.com/intermediate/using-source-maps-with-sass) \- debug Sass during development. When you inspect your website code, it will tell you which Sass file (rather than in the compiled CSS) is affecting that code block. You can even edit your Sass directly in the inspector.

D8F6 leans on the experience of the development of the [Drupal ZURB Foundation](https://www.drupal.org/project/zurb%5Ffoundation) theme going back [as far as 2012](https://www.drupal.org/project/zurb%5Ffoundation/releases/7.x-1.x-dev).