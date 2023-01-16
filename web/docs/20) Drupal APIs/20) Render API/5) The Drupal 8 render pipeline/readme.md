---
url: https://www.drupal.org/docs/8/api/render-api/the-drupal-8-render-pipeline
description: >-
  Or "How Drupal renders pages" First, you need to know the general routing
  concepts: please read Route controllers for simple routes first. This is
  explained both textually (below) and in the form of a diagram — see the files
  attached to this page (available in PNG, SVG and PDF — print the PDF to have a
  handy offline reference!). High level: controllers, the VIEW event and main
  content renderers Takeaway Routes whose controllers return a Response object
  bypass the pipeline below. They rely directly on the Symfony render pipeline.
published_time: '2015-03-20T09:49:12+00:00'
modified_time: '2019-04-22T20:52:42+00:00'
---
> _Or "How Drupal renders pages"_

First, you need to know the general routing concepts: please read [Route controllers for simple routes](https://api.drupal.org/api/drupal/core!lib!Drupal!Core!Routing!routing.api.php/group/routing/8#sec%5Fcontroller) first.

This is explained both textually (below) and in the form of a diagram — see the files attached to this page (available in [PNG](https://www.drupal.org/files/d8%5Frender%5Fpipeline%5F1.png), [SVG](https://www.drupal.org/files/d8%5Frender%5Fpipeline.svg%5F%5F0.txt) and [PDF](https://www.drupal.org/files/d8%5Frender%5Fpipeline%5F0.pdf) — print the PDF to have a handy offline reference!).

[![Thumbnail of the Drupal 8 render pipeline diagram.](/files/d8_render_pipeline-thumbnail_0.png)](https://www.drupal.org/files/d8%5Frender%5Fpipeline%5F0.pdf)