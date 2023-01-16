---
url: https://www.drupal.org/docs/8/modules/audiofield/theming-audiofield-players
description: "All of the Audio player libraries are rendered using Twig templates, as is the list of \"Download links\" provided with the audio players. All of these templates can be found in the templates\_directory inside the module folder with the extension .html.twig. Some audio players only require a single template, others have different templates for each available theme. To modify these templates, simply copy them to your theme directory and modify them as needed."
published_time: '2017-08-15T16:05:32+00:00'
modified_time: '2017-08-15T16:08:15+00:00'
---
All of the Audio player libraries are rendered using Twig templates, as is the list of "Download links" provided with the audio players. All of these templates can be found in the **templates** directory inside the module folder with the extension **.html.twig**. Some audio players only require a single template, others have different templates for each available theme. To modify these templates, simply copy them to your theme directory and modify them as needed.

Each template contains 4 variables:

* **plugin\_id** \- the name of the audioplayer plugin being templated
* **plugin\_theme** \- the name of the audioplayer theme being templated, if it exists
* **settings** \- array containing settings information for the audioplayer
* **files** \- array containing all of the audio files which are going to be rendered using this audioplayer

Additionally, this templating system allows for programmers using the module to render audio players in code if they wish, by using a render array such as

`$player = [ '#theme' => 'audioplayer', '#plugin_id' => 'soundmanager', '#plugin_theme' => 'inlineplayer', '#settings' => [ 'id' => 'UNIQUE_ID_ABCD', ], '#files' => [ [ 'url' => 'http://example.com/file.mp3', 'description' => 'Test Mp3', ], ], ];`

For more information on using Twig templates, see <https://www.drupal.org/docs/8/theming/twig>