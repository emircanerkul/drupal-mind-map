Create the .info.yml file in the root of your [themes folder](/node/2349803). The folder name is the machine name, and the info file name is machine\_name.info.yml. For the rest of this page, we'll create a theme whose human-readable name is "Fluffiness" and machine name is "fluffiness", so the folder is named "_fluffiness_/" and the `.info.yml` file is named "_fluffiness/fluffiness.info.yml_". If the file is present with the minimum required properties (name, type, base theme and core/core\_version\_requirement) your theme will be visible on your website at Manage > Appearance (_<http://example.com/admin/appearance>_).

If you are not familiar with the YAML file structure, read the [quick introduction to the YAML file format](http://symfony.com/doc/current/components/yaml/yaml%5Fformat.html).

* Tabs are **NOT** allowed. Use spaces **ONLY**.
* Properties and lists **MUST** be indented by two (2) spaces.