---
url: https://www.drupal.org/docs/drupal-apis/migrate-api/process-pipelines
description: >-
  Every migration has a single source and a single destination. Most migrations
  have several fields in the process section, and each field may involve several
  steps. Typically, the process section is the most complex part of the
  migration. Each step uses a single process plugin, and a chain of process
  plugins is called a pipeline. Usually, the first step in a process pipeline
  has an explicit source, and then the output of each step is passed as the
  input for the next step.
published_time: '2020-10-13T02:14:06+00:00'
modified_time: '2022-11-17T15:01:05+00:00'
---
Every migration has a single source and a single destination. Most migrations have several fields in the process section, and each field may involve several steps. Typically, the process section is the most complex part of the migration.

Each step uses a single process plugin, and a chain of process plugins is called a **pipeline**. Usually, the first step in a process pipeline has an explicit source, and then the output of each step is passed as the input for the next step. A common mistake is to add a source property to a process plugin, which overrides the value from the previous step in the pipeline. Sometimes this is the right thing to do: see the [Skip Process if Not Set](#skip-process-if-not-set) section below for an example.

The core Migrate module and the contributed Migrate Plus module provide many process plugins. See the "Related content" section below for a list. The API documentation for each process plugin includes one or more examples of how to use the plugin, but it takes some practice and creativity to combine several process plugins into a useful pipeline. This page has examples of such pipelines.

There is an open issue [#3123534: Create a "pipeline" process plugin to re-use YAML config](https://www.drupal.org/project/migrate%5Fplus/issues/3123534 "Status: Needs work, Assigned to: herved") to make it easier to reuse process pipelines.

The contributed [Migrate Sandbox](http://drupal.org/project/migrate%5Fsandbox) module offers a UI for experimenting with process plugins and the process pipeline without running real migrations.