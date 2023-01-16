Before worrying about OpenSSL and HTTPS, the first step is to make sure the site can reach the public Internet at all. Consider:

* Is this a test site running on a local server or inside a container that doesn't have an Internet connection at all?
* Is the site behind a network proxy server? If so, is the network and the site properly configured to use that proxy?
* ...

The site must be able to access the public Internet at all, or none of the rest of these instructions will help.