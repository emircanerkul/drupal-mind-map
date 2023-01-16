For non-developers there is a contributed module called [Tour UI](https://www.drupal.org/project/tour%5Fui) that can help with the creation of tours. The following documentation is a developer oriented approach.

To manually create step by step tours in Drupal 8 using the core [Tour module](/documentation/modules/tour), you will follow roughly these steps:

* adding a YAML document to your module's **config/optional** folder
* naming the file according to the pattern: module.type.id.yml
* write the yml file according to the structure:  
   * id - The ID of the tour  
   * module - The name of your module ("forum" in our case).  
   * langcode - The language of the tour. We have configuration schemas now so config entities will eventually be translatable.  
   * label - A name for the tour - these aren't used in core but will be leveraged by the Tour UI module which is under active development (read more below).  
   * routes- An array of routes for which the tour is active. Specify these as an array with route\_name and optional route\_params (also an array). Route names are found in each module's routing.yml file.  
   * tips - An array of tip plugin configuration to comprise the tour:  
         * tip id  
         * id: tip id  
         * plugin: text (you can create your own tour plugins if needed)  
         * label: 'Your title'  
         * body: 'The main text of the tour bubble'  
         * weight: (integer) the order in which the bubbles will appear  
         * position: position of the bubble relative to the target  
         * selector: the id or class where the bubble should appear
* if "text" tours is not enough, create plugins for more complex tours (See the tour\_test module for an example)

You can watch the complete process on [YouTube](http://youtu.be/nsNQx5YwazI "Writing Tour Module tips in Drupal 8")