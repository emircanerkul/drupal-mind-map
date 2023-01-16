1. Go to [https://developer.amazon.com](https://developer.amazon.com/) and sign in with your Amazon account.
2. Click _Alexa_ in the top menu.
3. Choose _Alexa Skills Kit_ and add a new skill, call it _Hello Drupal_, and fill in the form:
* For **Skill Type**, choose _Custom Interaction Model_
* Give your skill a descriptive **Name**
* For **Invocation Name**, use a short phrase of your choice such as M_y Application_
* On the **Interaction Model** tab  
   * For **Intent Schema**, copy and paste the content of [alexa\_demo/sample\_intents.json](http://cgit.drupalcode.org/alexa/tree/alexa%5Fdemo/sample%5Fintents.json)  
   * For **Sample Utterances**, copy and paste the content of [alexa\_demo/sample\_utterances.txt](http://cgit.drupalcode.org/alexa/tree/alexa%5Fdemo/sample%5Futterances.txt)
* On the **Configuration** tab  
   * For **Service Endpoint Type**, choose _HTTPS_  
   * Choose the **geographical region(s)** nearest your customers  
   * Enter the endpoint URLs in the text boxes for your region(s). They should be in the form: <https://your.site/alexa/callback>  
   * Choose _No_ for **Account linking**
* On the **SSL Certificate** tab, choose what kind of SSL certificate your site is using. If you're using a self-signed certificate, you'll need to upload it.
* Save the configuration.
* Write down the **Application Id** back on the **Skill information** tab. It should be something like: _amzn1.ask.skill.11111111-2222-3333-4444-555555555555_