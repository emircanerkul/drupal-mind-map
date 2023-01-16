In addition to a "memorized secret" or password, the NIST guidelines describe several other possible methods of authentication:

* Memorized Secret ([Section 5.1.1](https://pages.nist.gov/800-63-3/sp800-63b.html#memsecret)—i.e. a password)
* Look-Up Secret ([Section 5.1.2](https://pages.nist.gov/800-63-3/sp800-63b.html#lookupsecrets)—e.g. one-time recovery codes)
* Out-of-Band Devices ([Section 5.1.3](https://pages.nist.gov/800-63-3/sp800-63b.html#out-of-band)—e.g. communication with cellphones)
* Single-Factor One-Time Password (OTP) Device ([Section 5.1.4](https://pages.nist.gov/800-63-3/sp800-63b.html#singlefactorOTP))
* Multi-Factor OTP Device ([Section 5.1.5](https://pages.nist.gov/800-63-3/sp800-63b.html#multifactorOTP))
* Single-Factor Cryptographic Software ([Section 5.1.6](https://pages.nist.gov/800-63-3/sp800-63b.html#sfcs))
* Single-Factor Cryptographic Device ([Section 5.1.7](https://pages.nist.gov/800-63-3/sp800-63b.html#sfcd))
* Multi-Factor Cryptographic Software ([Section 5.1.8](https://pages.nist.gov/800-63-3/sp800-63b.html#mfcs))
* Multi-Factor Cryptographic Device ([Section 5.1.9](https://pages.nist.gov/800-63-3/sp800-63b.html#mfcd))

Multi-factor authentication **is required** by NIST guidelines for any digital service with even low to moderate risk levels in several areas, including any application in which personally identifiable information (PII) is accessible.

Drupal core does not provide multi-factor authentication, but can be obtained with [Two-factor Authentication (TFA)](https://www.drupal.org/project/tfa) or [One Time Password](https://www.drupal.org/project/one%5Ftime%5Fpassword).