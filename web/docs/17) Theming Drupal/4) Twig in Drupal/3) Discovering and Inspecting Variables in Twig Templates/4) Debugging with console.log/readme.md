We can add the following to a twig template and view the logs in the browser:

`<script>console.log({{ _context | json_encode | raw}});</script>`