The [Encrypt module](https://www.drupal.org/project/encrypt) is a Drupal module that provides an application programming interface (API) for performing symmetric or asymmetric encryption. It allows integrating modules to encrypt and decrypt data in a standardized manner. It doesn't provide any user-facing features of its own, aside from administration pages to manage encryption profiles.

The [Key module](https://www.drupal.org/project/key) provides the ability to improve Drupal security by managing sensitive keys (such as API and encryption keys). It gives site administrators the ability to define how and where keys are stored, which allows the option of a high level of security and allows sites to meet regulatory or compliance requirements.

Other modules integrate with the **Key module** to connect with encrypted key management providers. Two of these modules are [Lockr](https://www.drupal.org/project/lockr) and [AWS Secrets Manager](https://www.drupal.org/project/aws%5Fsecrets%5Fmanager). Both of these modules require the user to subscribe to the service that handles the key management.

### Key Management Providers

* [AWS Secrets Manager](https://aws.amazon.com/secrets-manager/)
* [Lockr](https://www.lockr.io)

### Other Modules

The [HashiCorp Vault](https://www.drupal.org/project/vault) module is intended to provide Core APIs for HashiCorp Vault integration. The module is in development and there is an alpha release as of 6 March 2022.