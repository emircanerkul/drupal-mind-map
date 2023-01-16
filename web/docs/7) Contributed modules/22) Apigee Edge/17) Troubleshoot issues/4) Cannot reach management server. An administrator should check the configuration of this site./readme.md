This can be a configuration issue with the site, make sure the [configuration of the connection to Apigee](https://www.drupal.org/docs/contributed-modules/apigee-edge/configure-the-connection-to-apigee-edge) has been configured correctly. If you go to **Configuration > Apigee Edge > General** in the Drupal administration menu, there is a **Test Connection** section that can help troubleshoot your connection settings.

If an error message is being sent from the Apigee API, it will be shown on the screen. For example, you may see a message such as:

Unanticipated exception. Please contact your Support administrator with code : be37f72a-f52d-4c62-8f97-xxxxx

You will most likely need to contact Apigee support and give them the code to trace down the issue. You can get more information on the exact API call details by turning on [Apigee Edge debug logs](https://www.drupal.org/docs/8/modules/apigee-edge/monitor-apigee-edge-debug-logs).