---
url: >-
  https://www.drupal.org/docs/8/modules/bootstrap-paragraphs/customizing-paragraph-types
description: >-
  Tips and tricks to customize the paragraph types. Tabs Linking to a specific
  tab To link to a specific tab, add the following JavaScript to your theme or a
  custom module. jQuery(document).ready(function($) { // Javascript to enable
  link to tab. var url = document.location.toString(); if (url.match('#')) {
  $('.nav-tabs a[href="#' + url.split('#')[1] + '"]').tab('show'); } // Change
  hash for page-reload. $('.nav-tabs a').on('shown.bs.tab', function (e) {
  window.location.hash = e.target.hash; }); }); You will then be able to link to
  the specific tab using http://example.com/#tab-123-1
published_time: '2018-12-26T03:44:21+00:00'
modified_time: '2019-03-02T02:31:35+00:00'
---
Tips and tricks to customize the paragraph types.