Test-infected developers never write their tests days after their code. Test-infected developers want to write tests because that's the way they think about software development. They don't want to think otherwise. Test-infected developers never have excuses not to test. They are never too busy to test, their environments never take up too much time to create test data, and their customer never complains that testing is too expensive because it takes too much time.

If it is difficult to create an environment of test infected developers,

* analyze the design of the application for testable code, prevent repetitive and over-specified tests, keep tests small, easy and close to the way objects are used in production.
* don't attempt to test every single line of code in your module. Realize that functional tests have a role. Focus your unit tests to test behaviour and not structure and wiring.
* ensure libraries, frameworks, API projects, any other code that is shared by multiple developers achieve the highest coverage and quality of tests.
* keep quality of test code as high as application code. Maintain tests with refactorings but realize that it's sometimes easier to throw away and rewrite tests as it's sometimes easier to throw away and rewrite code.