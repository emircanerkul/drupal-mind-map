The project uses [PostCSS](https://postcss.org/) for compiling CSS for better browser support. Every CSS file Claro has an accompanying file with the extension `.pcss.css` these`.pcss.css` are the ones that should be directly edited. These files are then compiled to their equivalent .css file.

CSS scaffolding tasks are following the logic of the JavaScript tasks:

`yarn run build:css `

Process sources without writing source maps.

`yarn run build:css-dev `

Process sources with (external) source maps.

`yarn run watch:css`

Watches source assets and applies distributive task if any of them changes.

`yarn run watch:css-dev `

Watches source assets and applies development task if any of them changes.