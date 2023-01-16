The official BackstopJS documentation can be found [here](https://github.com/garris/BackstopJS).

### [Important locations in the file-system](#important-locations-in-the-file-system)

There are a few crucial locations for the BackstopJS test definitions.

The reference screenshots are referenced here:

```php
docroot/profiles/contrib/degov/testing/lfs_data/bitmaps_reference 
```

The JSON configuration file for the comparison of the reference screenshots against the test screenshots of the current system is located here:

```php
docroot/profiles/contrib/degov/testing/backstopjs/backstop.json 
```

### [Usage of the BackstopJS Docker image](#usage-of-the-backstopjs-docker-image)

The reference screenshots in deGov are versioned with [Git LFS](https://git-lfs.github.com/). For pulling the reference screenshots you must install the Git LFS extension in the first place.

With the following (Bash-)commands you are able to run the BackstopJS tests:

```php
# Fetch the Docker image
cd docroot/profiles/contrib/degov/testing/
docker pull backstopjs/backstopjs

# If the DNS name "host.docker.internal" is not working, you can
# --add-host="host.docker.internal:YOUR_IP_HERE".
# Example:
docker run -it --add-host="host.docker.internal:192.168.10.10" --rm -v $(pwd)/backstopjs:/src -v $(pwd)/lfs_data:/lfs_data backstopjs/backstopjs test

# Execute the tests
docker run -it  --rm -v $(pwd)/backstopjs:/src -v $(pwd)/lfs_data:/lfs_data backstopjs/backstopjs test

# Update the reference screenshots
docker run -it  --rm -v $(pwd)/backstopjs:/src -v $(pwd)/lfs_data:/lfs_data backstopjs/backstopjs reference

# Execute a test anew
docker run -it  --rm -v $(pwd)/backstopjs:/src -v $(pwd)/lfs_data:/lfs_data backstopjs/backstopjs reference --filter "<TESTT LABEL>"

# Run tests multiple times
for ((n=0;n<10;n++)); do docker run -it  --rm -v $(pwd)/backstopjs:/src -v $(pwd)/lfs_data:/lfs_data backstopjs/backstopjs test --filter "Verify overlay icons"; done
```

Open a shell for the Docker container, which has been created from the BackstopJS Docker image:

```php
# One time run
docker run -it --rm -v $(pwd)/backstopjs:/src -v $(pwd)/lfs_data:/lfs_data --entrypoint="" backstopjs/backstopjs bash
# Running container
docker exec -it NAME_or_ID bash
```

Ensure that `host.docker.internal` can be accessed from the Docker container, which has been created by the BackstopJS Docker image.

Example command:

```php
ping host.docker.internal 
```

Displaying the test results via the test reports from BackstopJS:

```php
cd degov_project/docroot/profiles/contrib/degov/testing/
# Show the BackstopJS report
google-chrome-stable backstopjs/backstop_data/html_report/index.html
# or
firefox backstopjs/backstop_data/html_report/index.html
# or
chromium backstopjs/backstop_data/html_report/index.html
```

The mentioned `index.html` file contains a comparison of the reference screenshots to the test screenshots. This allows you to compare even very small differences between your expected results and the actually rendered pages. If you would approach this test manually, then you would need a "lot" more time. Especially in terms of such a complex product like deGov or websites with different content types, blocks, content entity types, forms, widgets etc.

### [Debugging BackstopJS tests](#debugging-backstopjs-tests)

For debugging failed [BackstopJS](https://github.com/garris/BackstopJS) tests (from the CI-pipeline) BackstopJS must be installed locally. It can be installed via [NPM](https://www.npmjs.com/get-npm). The following command will install BackstopJS with all it's dependencies, which are also containing the [Chromium Webbrowser](https://www.chromium.org/Home).

```php
npm install -g backstopjs backstop --config backstop.json test 
```

Technically BackstopJS is taking screenshots from the webbrowser and is comparing them. If you like to watch the screenshot taking in the Chromium webbrowser, then change the following both entries in the configuration file, which is located at `degov/testing/backstopjs/backstop.json`:

```php
"debug": true,
"debugWindow": true
```