Start by declaring any new regions in your THEMENAME.info.yml file. Regions are declared as children of the `regions` key like so:

```yaml
regions:
  header: 'Header'
  content: 'Content'
  footer: 'Footer'
```

Region keys should be alphanumeric and can include underscores (\_). Keys should begin with a letter. The key is the machine name (which you use in code) and the value a human readable version displayed in the admin UI.