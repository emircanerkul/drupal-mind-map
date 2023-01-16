Recent versions of Debian and CentOS use **rsyslog** instead of **syslog**. **rsyslog** is a more flexible and powerful version of **syslog**. It is also 100% compatible with how **syslog** logs events, though its configuration files are not at all the same. 

**Configuring rsyslog FOR CENTOS / Ubuntu / Debian**

Configuring this module for **rsyslog** oriented systems is pretty straightforward:

1\. Configure the **Syslog** module as you would normally. 

2\. Be sure that the _Syslog identity_ field starts with the string "**drupal**".

3\. Create /etc/rsyslog.d/drupal.conf with the following code inside:

```php
# Optional Comment

if $programname startswith 'drupal' then {

    action(type="omfile" File="/var/log/drupal.log")

    stop

}
```

4\. Restart rsyslog