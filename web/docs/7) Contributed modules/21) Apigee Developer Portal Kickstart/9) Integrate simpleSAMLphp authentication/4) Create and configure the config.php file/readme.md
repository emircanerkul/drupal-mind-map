1. Create your `config.php` file using the available file in the `config-templates `directory:  
`cp vendor/simplesamlphp/simplesamlphp/config-templates/config.php vendor/simplesamlphp/simplesamlphp/config/config.php`
2. Open the `config.php` file you just created and add the following lines at the top, just after the opening `<?php` tag:  
**For Pantheon applications**:  
`$ps = json_decode($_SERVER['PRESSFLOW_SETTINGS'], TRUE);  
$host = $_SERVER['HTTP_HOST'];  
$db = $ps['databases']['default']['default'];`  
**For non-Pantheon applications**:  
`require $_SERVER['DOCUMENT_ROOT'] . '/sites/default/settings.php';  
$host = $_SERVER['HTTP_HOST'];  
$db = $databases['default']['default'];`  
**Note**: The include path may be different on your server. Locate `sites/default/settings.php` in your directory structure to confirm the correct path.
3. At the bottom of the `config.php `file, add the following:  
`// Set some security and other configs that are set above, however we  
// overwrite them here to keep all changes in one area.  
$config['technicalcontact_name'] = "Your Name";  
$config['technicalcontact_email'] = "your_email@yourdomain.com";  
// Change these for your installation.  
$config['secretsalt'] = '[YOUR-SECRET-SALT-ANY-STRING]';  
$config['auth.adminpassword'] = '[ADMIN-PASSWORD]';  
$config['admin.protectindexpage'] = TRUE;  
// Base URL  
$config['baseurlpath'] = 'https://'. $host .'/simplesaml/';  
// SQL Connection  
$config['store.type'] = 'sql';  
$config['store.sql.dsn'] = sprintf('%s:host=%s;port=%s;dbname=%s', $db['driver'], $db['host'], $db['port'], $db['database']);  
$config['store.sql.username'] = $db['username'];  
$config['store.sql.password'] = $db['password'];  
$config['store.sql.prefix'] = 'simplesaml';  
// Temp directory must be writable  
$config['tempdir'] = '/path/to/tmp/dir';`  
**Note**: If you are using Pantheon to host your application, replace the last two lines above with the following:  
`// Temp directory must be writable  
if (isset($_ENV['PANTHEON_ENVIRONMENT'])) {  
   $config['tempdir'] = $_SERVER['HOME'] .'/tmp';  
}  
if (!ini_get('session.save_handler')) {  
  ini_set('session.save_handler', 'file');  
}`