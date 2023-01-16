In kernel tests, requests are made using the kernel, and a session object created and passed in:

```php
    $request = Request::create('/my/path', 'GET');
    $session = new \Symfony\Component\HttpFoundation\Session\Session();
    $request->setSession($session);

    /** @var \Symfony\Component\HttpKernel\HttpKernelInterface $kernel */
    $kernel = $this->container->get('http_kernel');
    $response = $kernel->handle($request);

    $session = $request->getSession();
    $this->assertEquals(TRUE, $session->get('some_session_attribute'), "The expected session attribute is set.");

```