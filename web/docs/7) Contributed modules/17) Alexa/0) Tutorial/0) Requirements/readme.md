There are some requirements for your Drupal site that must be met to integrate with the Alexa Service:

1. Your site has to be accessible online - Amazon's Alexa Service will be sending requests to the **/alexa/callback** path on your site.
2. Alexa Service callbacks can only be made via HTTPS, so your site must support it. A self-signed certificate can be used during Skill development, but a certificate signed by a trusted Certificate Authority is required to publish Skills.