To recap, when a page is viewed with `?amp=1` at the end of the URL (or when `&amp=1` is added to an existing query string), and that page has a content type with an AMP view mode enabled, the AMP version of that page will be displayed.

The overall format of the AMP version of a page is determined by the AMP subtheme selected for the site. The layout of the subtheme's regions, and the blocks selected for those regions, determines the overall structure of the AMP page.

The content of an individual AMP page is controlled through the fields selected in the AMP view mode for that content type. AMP-specific formatters for those fields provide options to customize the markup of AMP elements.

In particular, fields with large amounts of text (including the body field) can use the AMP Text formatter to take advantage of the AMP PHP Library. This takes care of automatic conversion of markup into AMP-friendly markup, which is particularly important for embedded content like videos and images.

The end result should be valid AMP markup, which can be verified with the AMP validation tools available through the AMP configuration page.