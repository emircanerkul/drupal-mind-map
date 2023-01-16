---
url: https://www.drupal.org/docs/multilingual-guide/enable-language-detection
description: >-
  By default, Drupal includes support for language detection using a variety of
  methods. This means your site can offer multilingual content without forcing
  the user to choose their language before entering the site. There is no need
  to use a splash page to choose a language when you use Drupal! The built-in
  methods for detecting language are: Account administration pages - Account
  administration pages language setting. URL - Determine the language from the
  URL (Path prefix or Domain). Session - Determine the language from a
  request/session parameter.
published_time: '2016-09-07T20:07:08+00:00'
modified_time: '2021-12-23T11:57:28+00:00'
---
By default, Drupal includes support for language detection using a variety of methods. This means your site can offer multilingual content without forcing the user to choose their language before entering the site. There is no need to use a splash page to choose a language when you use Drupal!

The built-in methods for detecting language are:

* **Account administration pages -** [Account administration pages language setting](https://www.drupal.org/node/3192982).
* **URL** \- Determine the language from the URL (Path prefix or Domain).
* **Session** \- Determine the language from a request/session parameter.
* **User** \- Follow the user's language preference.
* **Browser** \- Determine the language from the browser's language settings.
* **Selected language** \- Use the default site language.

![Language Detection and Selection UI](https://www.drupal.org/files/Drupal_lang_settings.png)

You can enable and re-order these methods through the 'Language Detection and Selection' user interface at _Configuration_ \>   _Regional and Language_ \> _Languages_ \>   _Language Detection and Selection_.

Generally, the URL method will be enabled and will be the first on the list, meaning that if the language is specified in the URL of the page, the page will be displayed in that language. The URL method can be configured to use either the domain or language path prefix of the page. If the language is not specified in the URL, the next method on the list will be used.

The default language is always enabled as a detection method and is usually the last enabled method, providing a fallback language if none of the other language detection methods are available.

In addition to the built-in methods of detection, it is possible to determine the user's language preference by creating your own custom or contributed modules, possible ideas:

* **Geolocation** \- Determine the user's language by their location using latitude and longitude values.
* **LDAP** \- Similar to the built-in _User_ method, but using LDAP as your data source.

You can also [create your own method](/node/1497272) to determine the user's language using API methods that were introduced in Drupal 7.

### Create a Language Switcher Link

If you are using the URL detection method, here is a way to create a language switcher link. You'll need to edit a couple files in your theme. This example shows a switcher link that switches the website between either English (as a default language) or Japanese.

Inside _themeName._theme file, you can add this code (or modify the existing \[_themeName_\]\_preprocess\_page() function) to create some variables that will be available to your theme's page.html.twig file:

```php
/**
 * Implements hook_preprocess_page().
 *
 * @param $vars
 */
function mytheme_preprocess_page(&$vars) {
  $current_path = \Drupal::service('path.current')->getPath();
  $language = $vars['language']->getId();

  if ($language == 'ja') {
    $vars['switch_path'] = '/ja' . $current_path;
    $vars['switch_lang'] = t('Japanese');
  }
  else {
    $vars['switch_path'] = $current_path; //default path english
    $vars['switch_lang'] = t('English');
  }
}
```

 Then inside your page.html.twig file, you can place a link like this wherever you like: 

```php
 <a class="lang-switcher" href="{{ switch_path }}">{{ switch_lang }}</a>
```

**Note:**  
Unless you prefer to customize your installation, the above code _(which may not work on Drupal 8.3.x and above)_, isn't necessary. Once you have the core modules Configuration Translation, Content Translation, Interface Translation, and Language (under Multilingual) enabled, you should be able to go to your block layout (or Page Manager page, if using that), and Place Block. There, you should see the Language Switcher available to use.

### Get the current language into your custom code

To get the current language code as determined by language detection:

```php
$langcode = \Drupal::languageManager()->getCurrentLanguage()->getId();
```

If you want to get the language code for a specific language type (content, interface or URL), you can use LanguageInterface constants:

```php
use Drupal\Core\Language\LanguageInterface;
$language_manager = \Drupal::languageManager();

$content_langcode = $language_manager->getCurrentLanguage(LanguageInterface::TYPE_CONTENT)->getId();
$interface_langcode = $language_manager->getCurrentLanguage(LanguageInterface::TYPE_INTERFACE)->getId();
$url_langcode = $language_manager->getCurrentLanguage(LanguageInterface::TYPE_URL)->getId();
```