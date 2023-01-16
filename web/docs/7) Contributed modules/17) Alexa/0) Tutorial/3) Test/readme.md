If you have Amazon Echo and it's linked to the **same** Amazon account you're using to developing this skill, you can now say: _Alexa, ask {your invocation name} hello drupal from {your city}_

If you don't have Amazon Echo yet or you want to quickly test the skill integration, go back to your Alexa Skill on the Amazon Developer console. From the **Test** tab you can type in the text equivalent of what you'd speak into an Amazon Echo device into the **Service Simulator**. Try it out by typing in "help" and clicking the **Ask {your invication name}** button. You should receive a JSON response back that looks like this:

```php
{
  "version": "1.0",
  "response": {
    "outputSpeech": {
      "type": "PlainText",
      "text": "You can ask anything and I will respond with \"Hello Drupal\""
    },
    "shouldEndSession": false
  },
  "sessionAttributes": {}
}
```