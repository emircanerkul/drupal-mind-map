In multisite environments, it is common that every site maintainer maintains their own site code. In complex environments, the front developers also want production deployments independent from regular Drupal deployments. Below is an example of how Drupal 8 and later multisite folders can be separated by multiple repositories. It is assumed that every site has its own database and code is shared as shown below.

```yaml
.                    ----> Repository1 (common to all the developers)
-- core                                                           

-- modules
   -- contrib
   -- custom

-- themes
   -- contrib
   -- custom           ----> Repository2 (managed by front end developers)

-- sites
   -- site1            ----> Repository3 (managed by site1 developers)
         -- modules
            -- custom
            -- contrib
         -- themes
            -- custom
            -- contrib
         -- files
   -- site2            ----> Repository4 (managed by site2 developers)
         -- modules
            -- custom
            -- contrib
         -- themes
            -- custom
            -- contrib
        -- files
   -- site3            ----> Repository5 (managed by site3 developers)
         -- modules
            -- custom
            -- contrib
         -- themes
            -- custom
            -- contrib
        -- files


```

 This model has the following advantages:

1\. Front-end developers can make independent deployments from regular Drupal deployments.

2\. Every site maintainers can make independent deployments (for example every site maintainer can have their own release dates).