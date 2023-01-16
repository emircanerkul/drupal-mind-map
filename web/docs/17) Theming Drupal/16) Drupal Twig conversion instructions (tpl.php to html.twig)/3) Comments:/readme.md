Andriy Podanenko: <http://drupal.org/node/1783130> How should variables be renamed  
jen: Add your own opening and closing Twig comment markers `{#` and `#}`.  
jen: Follow the twig comment markers with the standard doxygen PHP docblock markers.  
jen: Copy and Paste this definition from api.drupal.org  
James Wilson: If copying the definition from a \*function\* should rewrite "Returns HTML ..." as "Default theme implementation"  
jen: Copy and paste the "Parameters" from api.drupal.org  
James Wilson: Remove dollar sign from variable names, if you need to refer to another variable from within the doc block use single quotes around the variable. \[See policy discussion here <http://drupal.org/node/1804710]>  
jen: You "print" variables in twig with the `{{ }}` syntax  
jen: Attributes are "drillable" so that you can reference classes like this  
jen: Most functions, like `url()`, should be removed from the template file and added into a preprocess instead.