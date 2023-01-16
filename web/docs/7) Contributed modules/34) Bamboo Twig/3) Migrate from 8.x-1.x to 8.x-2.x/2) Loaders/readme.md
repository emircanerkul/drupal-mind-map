| Function/Filter  | 8.x-1.x                                    | 8.x-2.x                                                        | Module               |
| ---------------- | ------------------------------------------ | -------------------------------------------------------------- | -------------------- |
| Render a Block   | {{ load\_block('bartik\_powered') }}       | {{ bamboo\_render\_block('bartik\_powered') }}                 | Bamboo Twig - Loader |
| Render an Entity | {{ load\_entity('node', node.nid.value) }} | {{ bamboo\_render\_entity('node', node.nid.value, 'teaser') }} | Bamboo Twig - Loader |
| Render a Form    | {{ load\_form('system', 'CronForm') }}     | {{ bamboo\_render\_form('system', 'CronForm') }}               | Bamboo Twig - Loader |