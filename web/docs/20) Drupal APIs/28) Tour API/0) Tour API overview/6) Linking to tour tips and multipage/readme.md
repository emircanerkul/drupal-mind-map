Thanks to [#1942576: Tour tips to be able to link to other pages and start tour's automatically.](https://www.drupal.org/project/drupal/issues/1942576 "Status: Closed (fixed)"), you can create links to pages that will automatically start the tour, and optionally target specific tips. Details can be found in [the issue](https://www.drupal.org/node/1942576) or the internal [code documentation for tour.js](http://cgit.drupalcode.org/drupal/tree/core/modules/tour/js/tour.js?h=8.3.x#n15).

Opening the link ...

/admin/config/regional/language?tour=1&tips=tip-language-reorder

..will take the user to a page, and open the tour on the named tip.

To find the id or class of the tip(s) you want to target, it may help to inspect the document and find the element (<ol id="tour">) and inspect the clues on the items there.

Stringing several such links together by embedding the links inside your tips may allow you to create a multi-page or branching tour.

```yaml
langcode: en
status: true
dependencies: {  }
id: project_site_content
label: Project Site
module: project_site
routes:
  - route_name: system.admin_content
    # /admin/content
tips:
  content-overview:
    id: content-overview
    plugin: text
    label: 'Content Administration'
    body: '<p>The usual content administration screens have been extended with several project specific audit and bulk management tools</p>'
    weight: 1
  content-tabs:
    id: content-tabs
    plugin: text
    label: 'Additional Tabs'
    body: "<p>Several types of content overviews are available as tabs. </p><p><a href='/admin/content/files?tour' class='button button--primary'>Files</a> and <a href='/admin/content/media?tour' class='button button--primary'>Media</a> provide access to the media libraries.</p>"
    weight: 2
    selector: '.tabs .primary'
```

![Animation of a multistep branching tour](https://www.drupal.org/files/multistep_tour.gif)  
Animation of a multistep branching tour  