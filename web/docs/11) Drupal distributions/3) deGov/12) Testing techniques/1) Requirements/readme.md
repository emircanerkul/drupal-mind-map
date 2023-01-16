If you want to use [Docker](https://docs.docker.com/) to provide a deGov website instance on which you want to run the your tests against, so the `host.docker.internal` host file entry variable must be accessible. Otherwise your test will fail.

If you are using [Docker for Mac](https://docs.docker.com/docker-for-mac/) or [Docker for Windows](https://docs.docker.com/docker-for-windows/), the following steps should not be required.

For proofing if you must indeed take any setup actions, execute the console commands below.

```php
$ nslookup host.docker.internal
Server:         192.168.10.10
Address:        192.168.10.10#53

Non-authoritative answer:
Name:   host.docker.internal
Address: 127.0.0.1
```


```php
$ ping host.docker.internal PING host.docker.internal (127.0.0.1) 56(84) bytes of data. 64 bytes from localhost (127.0.0.1): icmp_seq=1 ttl=64 time=0.044 ms 64 bytes from localhost (127.0.0.1): icmp_seq=2 ttl=64 time=0.058 ms 64 bytes from localhost (127.0.0.1): icmp_seq=3 ttl=64 time=0.034 ms 64 bytes from localhost (127.0.0.1): icmp_seq=4 ttl=64 time=0.042 ms --- host.docker.internal ping statistics --- 4 packets transmitted, 4 received, 0% packet loss, time 3051ms rtt min/avg/max/mdev = 0.034/0.044/0.058/0.008 ms 
```

If `nslookup` and `ping` are not reporting any errors, then you do not need to do anything. Hence, if there are errors, you can proceed with the following workaround.

Add the following lines to your `/etc/hosts` file:

```php
# Workaround deGov host.docker.internal 127.0.0.1 host.docker.internal ::1 host.docker.internal 
```

The location of the DNS name `host.docker.internal` is important, because it will be used in the pipeline scripts and also provides a variable for IP of the host machine in the virtualisation context of Docker. If the IP of the host machine cannot be located, there will be errors.