```yaml
-- core

-- modules
   -- contrib
   -- custom

-- themes
   -- contrib
   -- custom

-- sites
   -- site1
         -- modules
            -- custom
            -- contrib
         -- themes
            -- custom
            -- contrib
         -- files
   -- site2
         -- modules
            -- custom
            -- contrib
         -- themes
            -- custom
            -- contrib
        -- files
   -- site3
         -- modules
            -- custom
            -- contrib
         -- themes
            -- custom
            -- contrib
        -- files


```

Given a scenario where the entire multisite is maintained by a single person, only the _files_ directories will normally exist in the directory structure below "sites". The _modules_ and _themes_ directories are only created in the webroot.

For more complex multisite environments, were multiple maintainers maintain their own site code, this may not apply. This complex scenario is expanded in the next section.