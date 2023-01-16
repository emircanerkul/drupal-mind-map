The following should work for any version of a Debian type system and Mac OS. For installing on Windows, [see here](https://www.guru99.com/download-install-node-js.html).

In a terminal, issue `node -v`

If you see:

`Command 'node' not found, but can be installed with:`

`sudo apt install nodejs`

**DO NOT DO THIS!** This will install node.js V8 and the GOV.UK Frontend needs node.js V10 or better. Switch to your home directory `cd ~` and issue the following to install node.js V12:

`curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt install -y nodejs`

If you see a version of node.js that is less the V10 e.g.

`V8.7.0`

Follow the same instructions above. This will replace your existing version of node.js with V12.

Now check your version of node.js with `node -v` and you should see something like:

`12.8.1`

Now check your version of NPM (Node Package Manager) with `npm -v` and you should see something like:

`6.10.1`

Now switch to the GOV.UK theme's folder e.g. `themes/contrib/govuk_theme` and issue:

`npm install`

This will install the GOV.UK Frontend node module and all the required dependencies. This will take several seconds and you will see a lot of activity. Once this is finished, you will see something like:

```php
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})

added 451 packages from 375 contributors and audited 10234 packages in 25.355s
found 0 vulnerabilities

```

The 2 warnings are normal and the important part is `found 0 vulnerabilities`. At this point the theme is fully installed and can be enabled by going to Admin > Appearance and clicking on "Enable and set default" link under the "GOV.UK Theme" (which will be in the DISABLED THEMES section).