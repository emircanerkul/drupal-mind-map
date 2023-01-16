Elements that should scale depending on browser font size settings should use rem as a unit for dimensions. Examples of this include font-sizes, margins, paddings, and vertical-align.

Elements that should scale depending on browser width should use % as a unit for dimensions. Examples of this include horizontal width and horizontal margin.

Elements that should not scale on any occasion should use px as a unit for dimensions. This is applicable to hairline elements including borders, border-radius, and outline. This is due to some browsers failing to render hairline elements defined with dynamic dimensions when zooming out.