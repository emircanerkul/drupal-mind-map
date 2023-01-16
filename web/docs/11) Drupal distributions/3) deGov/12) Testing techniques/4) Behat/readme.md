The official Behat documentation can be found [here](https://behat.org/en/latest/guides.html).

### [Setup the configuration](#setup-the-configuration)

The Behat configuration template for deGov is located here:

```php
docroot/profiles/contrib/degov/testing/behat/behat.dist.yml 
```

For local testing it is important to copy the provided configuration file template and make minor changes.

Example commands:

```php
cd degov_project/
cp docroot/profiles/contrib/degov/testing/behat/behat.dist.yml behat-degov.yml 
```

Modify the value of the `base_url` attribute, to suite the host url of your local Drupal instance. You "can" do the changes via [VI](https://www.howtogeek.com/102468/a-beginners-guide-to-editing-text-files-with-vi/) like below, but you are free to use the text editor of your taste:

```php
vi behat-degov.yml 
```

It should be something like in the following example:

```php
- base_url: http://localhost:80 
--- 
+ base_url: http://degov-nrw.local:80 
```

The configuration key `default > suites > default > paths` defines the locations to the most Behat test features. You are allowed to specify folders and/or single files. The definition can be made by a single entry or a list of them. Notice the possibilities of the [collections from the YAML format](https://yaml.org/spec/1.2/spec.html#id2759963).

Like in the current `default` or the `smoke-tests` suite, you can split your own test features into suites.

### [Install Chromedriver](#install-chromedriver)

You need the [Chromedriver](https://chromedriver.chromium.org/) to test via Behat how the application behaves in the webbrowser.

You can download Chromedriver via the following url:

<https://chromedriver.chromium.org/downloads>

#### [Simplify the Chromedriver execution](#simplify-the-chromedriver-execution)

For an easier Chromedriver startup (no need to memory the parameters), you can create a startup script like `start_chromedriver.sh`, create an Bash alias or create a Systemd Job.

`start_chromedriver.sh` script example:

```php
#!/usr/bin/env bash
chromedriver --verbose --url-base=wd/hub --port=4444
```

##### [Start Chromedriver with a Bash alias](#start-chromedriver-with-a-bash-alias)

On MacOS or Linux or the Windows (by [Git Bash](https://gitforwindows.org/) or [WSL on Windows 10](https://docs.microsoft.com/en-us/windows/wsl/about) you can write a [Bash alias](https://linuxize.com/post/how-to-create-bash-aliases/) in your users Bash configuration file. The Bash configuration is inside the `.bash_profile` file mostly. It should be located in your user profile folder.

```php
alias chromedriver-start='~/Dev/chromedriver --url-base=wd/hub --port=4444 --whitelisted-ips=""'
```

To activate the updated `.bash_profile` file in the current terminal session, the following command must be executed:

```php
source ~/.bash_profile 
```

Afterwards the Chromedriver can be started:

```php
chromedriver-start 
```

_A practical hint for your daily business:_ An alias supports the auto-completion of commands. That means, you can type only a few characters like "chrome" and the tab-key on your keyboard will lead you to a list of possibile commands. If there are no alternative commands, the "chrome" text will be auto-completed to the only one possible command "chromedriver-start".

E.g.:

```php
peter@computer degov $ chro
chromedriver-start chroot 
```

##### [Run Chromedriver by a Systemd job on Linux](#run-chromedriver-by-a-systemd-job-on-linux)

You can create a Systemd job on Linux, if you create the following file:  
`/usr/lib/systemd/system/chromedriver.service`

In this example the Chromedriver binary is located at the following path:  
`/usr/bin/chromedriver`

The content of the `chromedriver.service` file:

```php
[Unit]
Description=Chromedriver Service

[Service]
Type=simple
# edit the ExecStart path to your chromdriver executable
ExecStart=/usr/bin/chromedriver --url-base=wd/hub --port=4444 --whitelisted-ips=""
KillMode=mixed

[Install]
WantedBy=multi-user.target
```

The Chromedriver can be controlled via Systemd like described in the commands below:

```php
# start
systemctl start chromdriver.service
# status
systemctl status chromdriver.service
# stop
systemctl stop chromdriver.service
# restart
systemctl restart chromedriver.service
# enable auto start
systemctl enable chromdriver.service
# disable auto start
systemctl disable chromdriver.service
# see logs of service
journalctl -u chromedriver.service
```

### [Execute the Behat tests](#execute-the-behat-tests)

Ensure that Chromedriver is running in the first place:

```php
# Start Chrome driver
chromedriver --verbose --url-base=wd/hub --port=4444
# or with a script
./start_chromedriver.sh
# or with a systemd job
systemctl start chromedriver.service
```

Now you can run all Behat tests. With the configuration from the `behat.yml` file you will be able to start Behat:

```php
cd ~/var/www/degov_project
bin/behat -c behat.yml
```

#### [Behat Tests with extra options](#behat-tests-with-extra-options)


```php
bin/behat -c behat.yml --strict -vvv --stop-on-failure 
```

#### [Execute grouped Behat features by tags](#execute-grouped-behat-features-by-tags)

Add Behat tags to the test. E.g. `mytest`:

```php
@mytest
Scenario: I should see the copyright block in the footer
....
```

Then execute the Behat with the tag:

```php
bin/behat -c behat.yml --tags='@mytest' --strict -vvv --stop-on-failure 
```

If you want to execute a single feature file, then you can define that in the `behat.yml` file with the `paths` attribute, like in the following example:

```php
paths:
    - '%paths.base%/docroot/profiles/contrib/degov/testing/behat/features/bulk_action.feature' 
```

If you want to execute a specific tests suite, then you can accomplish this by the `--suite=` parameter:

```php
bin/behat -c behat.yml --suite=smoke-tests 
```

##### [Further information for executing Behat tests](#further-information-for-executing-behat-tests)

All possible parameters for executing various Behat test suites of single features are described in the official [Behat documentation](https://docs.behat.org/en/v2.5/guides/6.cli.html).