All guidelines below are from 800-63B sec. 5.1.1.2 unless otherwise noted.

### High Importance (SHALL)

#### Require at least 8 characters in passwords

![warning](https://www.drupal.org/misc/message-24-info.png)Drupal core does not provide for limiting of passwords by length. The [Password Policy](http://drupal.org/project/password%5Fpolicy) and [Better Passwords](/project/better%5Fpasswords) modules provide this capability, and it would be relatively easy to provide it using a custom module.

#### Count each Unicode code point as a single character when calculating length

![warning](https://www.drupal.org/misc/message-24-warning.png)While the vast majority of unicode code points will register as a single character by Drupal's password strength meter, some of the higher groups, such as emoji and mahjong tiles, register as two characters.

#### Never truncate passwords

![warning](https://www.drupal.org/misc/message-24-ok.png)Drupal core does not truncate passwords.

#### Generated passwords must be 6 or more characters using an approved random bit generator

![warning](https://www.drupal.org/misc/message-24-info.png)Whether or not the random bit generator is secure is complicated and possibly dependent on what specific software is running on the server. However, Drupal core does not generate random passwords. If new user accounts are created by an administrator, the strength of your default passwords are dependent on the skill, knowledge and trustworthiness of that administrator; to avoid this, use a module like [Better Passwords](/project/better%5Fpasswords).

#### Do not allow users to store password hints

![warning](https://www.drupal.org/misc/message-24-ok.png)Drupal core does not provide the ability to store password hints.

#### Do not prompt users to use specific types of information when choosing passwords

![warning](https://www.drupal.org/misc/message-24-ok.png)Drupal core does not make any suggestion to site administrators to include such prompts. Site administrators should refrain from using Drupal tools like custom blocks for this discouraged practice.

#### Compare chosen passwords against a list of poor choices

![warning](https://www.drupal.org/misc/message-24-info.png)Drupal core does not provide this functionality, but it is provided by the [Better Passwords](/project/better%5Fpasswords) module, as well as the [Password Policy](https://drupal.org/project/password%5Fpolicy) and [Password Strength](http://drupal.org/project/password%5Fstrength) modules used together. The NIST guidelines go on to specify that 

> If the chosen secret is found in the list, the CSP or verifier SHALL advise the subscriber that they need to select a different secret, SHALL provide the reason for rejection, and SHALL require the subscriber to choose a different value.

#### Rate limit authentication attempts, allowing no more than 100 failures per account (5.1.1.2 and 5.2.2)

![warning](https://www.drupal.org/misc/message-24-ok.png)Drupal core enforces rate limits on unsuccessful authentication attempts to 5 per username every 6 hours. For more control over what rate limiting is done, the [Login Security](https://www.drupal.org/project/login%5Fsecurity) module can be used. Additional possible enhancements as described in [Section 5.2.2](https://pages.nist.gov/800-63-3/sp800-63b.html#throttle) can be achieved with contributed modules.

#### Force password change in the event of a breach

![warning](https://www.drupal.org/misc/message-24-info.png)Drupal core does not provide this functionality, but it can be obtained with the [Mass Password Reset](https://www.drupal.org/project/mass%5Fpwreset) module.

#### Use encrypted connections whenever a password is requested

![warning](https://www.drupal.org/misc/message-24-info.png)For Drupal, as for all other content management systems, this is dependent on the setup of the web server. A valid SSL certificate should be employed to protect Drupal sites. SSL certificates can be obtained for free from various vendors. It is encouraged to serve all pages of a site over SSL. In cases where unencrypted connections are also supported, the web server should be configured to redirect login pages and authenticated sessions to the encrypted https connection.

#### Store only a salted hash value for each password

![warning](https://www.drupal.org/misc/message-24-ok.png)Drupal core stores only a salted hash value for each password.

#### Hash passwords (and salt) using a suitable one-way key derivation function

![warning](https://www.drupal.org/misc/message-24-ok.png)Drupal core uses a version of [the Portable PHP password hashing framework](http://www.openwall.com/phpass/) that has been modified to use the SHA-512 algorithm instead of MD5\. Drupal's key derivation is very similar to PBKDF2, one of two examples NIST gives of suitable key derivation functions. [CalebD](https://stackoverflow.com/users/160759/calebd) gave an overview of Drupal 8's password storage system in a [Stack Overflow answer](https://stackoverflow.com/a/5031807/4107494):

> There is a [PasswordInterface](http://api.drupal.org/api/drupal/core!lib!Drupal!Core!Password!PasswordInterface.php/interface/PasswordInterface/8) which defines a hash method. The default implementation of that interface is in the [PhpassHashedPassword](https://api.drupal.org/api/drupal/core!lib!Drupal!Core!Password!PhpassHashedPassword.php/class/PhpassHashedPassword/8) class. That class' [hash](http://api.drupal.org/api/drupal/core!lib!Drupal!Core!Password!PhpassHashedPassword.php/function/PhpassHashedPassword::hash/8) method calls the [crypt](http://api.drupal.org/api/drupal/core!lib!Drupal!Core!Password!PhpassHashedPassword.php/function/PhpassHashedPassword::crypt/8) method passing in SHA512 as the hashing algorithm, a password, and a generated salt.

#### Use an approved one-way hashing function within the key derivation function

![warning](https://www.drupal.org/misc/message-24-ok.png)Drupal uses SHA-512, which is an approved hash function in [SP 800-107](https://pages.nist.gov/800-63-3/sp800-63b.html#SP800-107).

#### Salt passwords with at least 32 bits of data

![warning](https://www.drupal.org/misc/message-24-ok.png)Drupal salts passwords with 64 bits of data.

#### Store salt and the derived password hashes together

![warning](https://www.drupal.org/misc/message-24-ok.png)Drupal stores salt and derived password hashes together.

### Medium Importance (SHOULD)

#### Allow at least 64 characters in passwords

![warning](https://www.drupal.org/misc/message-24-ok.png)Drupal core allows up to 128 characters in password fields. Because only the hashed value is actually stored, passwords can actually be even longer, but users would not be able to enter them into password fields unless those fields were modified by a module.

#### Allow any character in passwords, including unicode

![warning](https://www.drupal.org/misc/message-24-ok.png)Drupal core allows any characters in passwords.

#### Apply normalization to Unicode characters accepted in passwords

![warning](https://www.drupal.org/misc/message-24-info.png)\[info needed - does Drupal do this?\]

#### Notify users with Unicode characters in passwords that they may be represented differently by some endpoints, affecting login attempts

![warning](https://www.drupal.org/misc/message-24-error.png)Drupal core does not provide this functionality, nor is there any contributed module that provides it.

#### Guide users to choose a strong password

![warning](https://www.drupal.org/misc/message-24-ok.png)Drupal core offers a password-strength meter to assist the user in choosing a strong password. The password meter is implemented only as a suggestion, in keeping with the recommendation that no composition rules should be enforced. Password composition suggestions from Drupal core are:

* 12 characters
* lowercase letters
* uppercase letters
* numbers
* punctuation
* different from username

Additional functionality may be obtained from the [Password Strength](https://drupal.org/project/password%5Fstrength) or [Better Passwords](/project/better%5Fpasswords) modules.

#### Do not enforce password composition rules

![warning](https://www.drupal.org/misc/message-24-ok.png)Drupal core does not enforce password composition rules. Administrators should refrain from using the [Password Policy](https://drupal.org/project/password%5Fpolicy) module for this discouraged practice.

#### Do not force periodic password changes

![warning](https://www.drupal.org/misc/message-24-ok.png)Drupal core does not enforce periodic password changes. Administrators should refrain from using the [Password Policy](https://drupal.org/project/password%5Fpolicy) module for this discouraged practice.

#### Allow paste into password fields

![warning](https://www.drupal.org/misc/message-24-ok.png)Drupal core allows paste into password fields.

#### Offer an option to display the password until it is entered

![warning](https://www.drupal.org/misc/message-24-info.png)Drupal core does not provide this functionality, but it can be obtained with the [View Password](https://www.drupal.org/project/view%5Fpassword) module.

#### Use a memory-hard key derivation function to hash passwords for storage

![warning](https://www.drupal.org/misc/message-24-info.png)\[info needed - is Drupal's implementation considered memory-hard?\]

#### Output should be the same length from the key derivation function as from the underlying one-way function output

![warning](https://www.drupal.org/misc/message-24-info.png)\[info needed - is this the case in Drupal?\]

#### Stretch password hashes by performing the hash function at least 10,000 times

![warning](https://www.drupal.org/misc/message-24-ok.png)Drupal 8 performs the hash function 65,537 times.

#### Use an additional secret randomly generated salt stored in a specialized device like a hardware security module

![warning](https://www.drupal.org/misc/message-24-error.png)Drupal core does not provide this functionality, nor is there any contributed module that provides it. The definition from NIST is as follows:

> In addition, verifiers SHOULD perform an additional iteration of a key derivation function using a salt value that is secret and known only to the verifier. This salt value, if used, SHALL be generated by an approved random bit generator [\[SP 800-90Ar1\]](https://pages.nist.gov/800-63-3/sp800-63b.html#SP800-90Ar1) and provide at least the minimum security strength specified in the latest revision of [SP 800-131A](https://pages.nist.gov/800-63-3/sp800-63b.html#SP800-131A) (112 bits as of the date of this publication). The secret salt value SHALL be stored separately from the hashed memorized secrets (e.g., in a specialized device like a hardware security module). With this additional iteration, brute-force attacks on the hashed memorized secrets are impractical as long as the secret salt value remains secret.