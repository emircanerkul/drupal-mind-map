### Use Twig templates

The Twig theme engine now auto escapes everything by default. That means, every string printed from a Twig template (e.g. anything between `{{ }}`) gets automatically sanitized if no filters are used.

See [Filters - Modifying Variables In Twig Templates](//www.drupal.org/node/2357633) for the Twig filters available in Drupal. Notably, watch out for the "raw" filter, which does not escape output. Only use this when you are certain the data is trusted.

When rendering attributes in Twig, make sure that you wrap them with double or single quotes. For example, `class="{{ class }}"` is safe, `class={{ class }}` is not safe.

In order to take advantage of Twig’s automatic escaping (and avoid safe markup being escaped) ideally all HTML should be outputted from Twig templates.

### Output with placeholders

We can leverage the [Translation API](//www.drupal.org/developing/api/8/localization) to build sanitized, translatable strings that are suitable for front end output. To understand [how to properly prepare data for use in the database, please read _Drupal 8: Secure Database Queries_](//www.drupal.org/node/2873816).

There are three available placeholders that were introduced in Drupal 8:

* `@variable`: When the placeholder replacement value is a string or a MarkupInterface object
* `%variable`: When the placeholder replacement value is to be wrapped in em tags.
* `:variable`: When the placeholder replacement value is a URL to be used in the "href" attribute

You can [ learn more about these placeholders in the FormattableMarkup::placeholderFormat() documentation.](//api.drupal.org/api/drupal/core%21lib%21Drupal%21Component%21Render%21FormattableMarkup.php/function/FormattableMarkup%3A%3AplaceholderFormat/8.2.x)

### API functions

* Use [t()](//api.drupal.org/api/function/t) and [\\Drupal::translation()->formatPlural() ](//api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21StringTranslation%21TranslationInterface.php/function/TranslationInterface%3A%3AformatPlural/8.2.x)with `@` or `%` placeholders to construct safe, translatable strings. See [Code text translation API in Drupal 8](//www.drupal.org/developing/api/8/localization) for more details.
* Use [Html::escape()](//api.drupal.org/api/drupal/core%21lib%21Drupal%21Component%21Utility%21Html.php/function/Html%3A%3Aescape/8) for plain text.
* Use [Xss::filter()](//api.drupal.org/api/drupal/core%21lib%21Drupal%21Component%21Utility%21Xss.php/function/Xss%3A%3Afilter/8) for text that should allow some HTML tags.
* Use [Xss::filterAdmin()](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Component%21Utility%21Xss.php/function/Xss%3A%3AfilterAdmin) for text entered by admin users that should allow most HTML.
* Use [UrlHelper::stripDangerousProtocols()](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Component%21Utility%21UrlHelper.php/function/UrlHelper%3A%3AstripDangerousProtocols/8.0.x) or [UrlHelper::filterBadProtocol()](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Component%21Utility%21UrlHelper.php/function/UrlHelper%3A%3AfilterBadProtocol/8.0.x) for checking URLs - the former can be used in conjunction with [SafeMarkup::format()](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Component%21Utility%21SafeMarkup.php/function/SafeMarkup%3A%3Aformat/8.0.x).

Strings sanitized by t(), Html::escape(), Xss::filter() or Xss::filterAdmin() are automatically marked safe, as are markup strings created from render arrays via [Renderer](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Render%21Renderer.php/class/Renderer/8.4.x).

While it can also sanitize text, it's almost never correct to use [check\_markup](//api.drupal.org/api/drupal/core%21modules%21filter%21filter.module/function/check%5Fmarkup/8) in a theme or module except in the context of something like a text area with an associated text format.

### Email

The security of your email content is strongly tied with the mail service that you choose to use. Remember, the same best practices of outputting text for HTML consumption should be considered here.