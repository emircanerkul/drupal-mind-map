### Create a BotmanChatbot Plugin

You must create at least one BotmanChatbot plugin.  
You can look at _botman/modules/examples/botman\_helloworld/src/Plugin/HelloWorldChatbot.php_ for an example.

#### A simple plugin example

```php
<?php
namespace Drupal\botman_helloworld\Plugin\BotmanChatbot;

use Drupal\botman\BotmanChatbotBase;
use Drupal\botman\BotmanChatbotInterface;

use BotMan\BotMan\BotMan;

/**
 * @BotmanChatbot(
 *  id = "helloworld",
 *  label = @Translation("HelloWorld")
 * )
 */
class HelloWorldChatbot extends BotmanChatbotBase implements BotmanChatbotInterface {

  /**
   * {@inheritdoc}
   */
  public function initialize(Botman $botman) {
    $botman->hears('hello|hi|hola', function (Botman $botman) {
      $botman->reply('Hello, nice to meet you.');
    });

    return $botman;
  }
}

```

### Add a Botman Chatbot Block to your site

Once you've created your chatbot plugin, you can add it to the website by going to _/admin/structure/block_, clicking Place Block for the content region and selecting the Botman Chat Block. On the block configuration screen you can select your plugin as well as a widget for displaying/interacting with the chatbot.

For a full example, take a look at the example module in:  
/botman/modules/examples/botman\_helloworld/ 