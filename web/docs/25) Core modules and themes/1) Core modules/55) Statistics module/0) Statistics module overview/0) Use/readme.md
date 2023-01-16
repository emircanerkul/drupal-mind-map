### Configuring statistics

In Drupal 9, configure statistics via _Configuration > System > Statistics_.

To enable collection of statistics, check the _Count content views_ checkbox on the Statistics settings page.

### Display popular content

The module includes a Popular content block that displays the most viewed pages today and for all time, and the last content viewed. To use the block:

1. Enable Count content views on the statistics settings page (Configuration > System > Statistics)
2. Add the Popular Content block from the Block Layout page (Structure > Block Layout)
3. Configure how many results to show for each statistics list.
4. Choose which roles to show the statistics to

### Page view counter

The Statistics module includes a counter for each page that increases whenever the page is viewed. To use the counter, enable Count content views on the statistics settings page, and set the necessary permissions (View content hits) so that the counter is visible to the users.

### Views

The Statistics module also provides data that appears within the Views module. A "content statistics" category should appear when you go to a view (in "fields", "filter criteria," and "sort criteria") which provides three items: "Most recent view", "Total views", and "Views today". For instance, one would create a view of most popular content based on views today, or total views (additional ways to limit this would be to filter for particular content, or content created within a certain time frame).