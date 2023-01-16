---
url: >-
  https://www.drupal.org/docs/automated-testing/javascript-testing-using-nightwatch
description: >-
  For initial documentation please read core/tests/README.md. It explains how to
  setup Nightwatch and run it. To create your own test, add a file in your
  module: your_module/tests/src/Nightwatch/Tests/exampleTest.js.
published_time: '2018-05-02T07:13:07+00:00'
modified_time: '2022-11-06T20:26:43+00:00'
---
**For initial documentation please read [core/tests/README.md](https://git.drupalcode.org/project/drupal/-/tree/10.1.x/core/tests/README.md). It explains how to setup Nightwatch and run it.**

To create your own test, add a file in your module: `your_module/tests/src/Nightwatch/Tests/exampleTest.js`.  
In there write some JS:

```php
module.exports = {
  '@tags': ['your_module'],
  before: function(browser) {
    browser
      .drupalInstall();
  },
  after: function(browser) {
    browser
      .drupalUninstall();
  },
  'Visit a test page and create some test page': (browser) => {
    browser
      .drupalRelativeURL('/test-page')
      .waitForElementVisible('body', 1000)
      .assert.containsText('body', 'Test page text')
      .drupalRelativeURL('/node/add/page')
      .setValue('input[name=title]', 'A new node')
      .setValue('input[name="body[0][value]"]', 'The main body')
      .click('#edit-submit')
      .end();
  },

};
```

Don't forget to use @tags to tag your test with your modules' machine name so it gets picked up by the test runner on drupal.org.

For further reference / a list of available assertions, please visit <http://nightwatchjs.org/api>

If you want to learn how to add custom commands/assertions, have a read at <http://nightwatchjs.org/guide/#extending>

### Writing Unit tests in Nightwatch

It is possible to use Nightwatch [for unit testing](https://nightwatchjs.org/guide/writing-tests/writing-unit-tests.html) JavaScript. In order to unit test your JavaScript it is important that the JavaScript is written in a way that is testable. Writing unit-testable JavaScript is not specific to Drupal and you should look around the Internet for examples of how to do it.

You can mark your test as a unit test by setting:

'@unitTest' : true

Here is an example test

```php
const assert = require('assert');
const testScript = require('../../Scripts/unitTestScript');

const dataProvider = [
  {input: 'value_1', expected: 'value_1Test'},
  {input: 'value_2', expected: 'value_2Test'},
  {input: 'value_3', expected: 'value_3Test'},
];

module.exports = {
  '@tags': ['unit_test'],
  '@unitTest' : true,
  'example unit test' : function (done) {
    dataProvider.forEach(function (values) {
      assert.strictEqual(testScript.testMethod(values.input), values.expected);
    });
    setTimeout(function() {
      done();
    }, 10);
  }
};
```