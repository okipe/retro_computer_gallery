# Retro Computer Gallery Project

## Descripción
En este proyecto, se ha creado una página web denominada **Retro Computer Gallery Project**, el cual tiene 8 scritps, entre ellos una pantalla de carga (loader.js), un lightbox, un slider y otros más, tal como se muestra en los pantallazos de abajo. El editor usado fue Visual Studio Code y se usó Less como preprocesador CSS.

El proyecto fue creado para el curso **Fundamentos de Javascript**, dictado por el profesor Sergio Agamez Negrete, en Crehana.

![Editor VS Code con archivos HTML y Less.](/img_md/html_less.png)

En un inicio los scripts siguieron las especificaciones ES5 pero posteriormente fueron modernizadas para cumplir con las características de ES6. Cada archivo JS contiene una función específica (por ejemplo loader.js para la animación de carga, slider.js para el slider de fotos, etc.). En gran parte del código, se añadieron comentarios que permiten repasar qué hace cada línea de comando.

![Editor con archivos JavaScript](/img_md/JS_1-updated.png)

![Editor con archivos JavaScript](/img_md/JS_2.png)

El loader.js muestra pantalla de carga mientras la página se va cargando. Si la página cargara muy rápido, pueden ver su funcionamiento en la DevTools del navegador y activando la velocidad "3G lento" y "deshabilitar caché" en la pestaña Network, tal como se muestra la imagen, para simular una conexión lenta.

![Archivo loader.js en la consola de navegador](/img_md/loader_js.png)

Originalmente la página esta subida en Surge, pero luego se usó a Github Pages como host.

![Archivos siendo subidos a Surge.sh](/img_md/surge_cli.png)

## Características
- El sitio web es one-page.
- Se usó como preprocesador a Less.
- Se trabajó conceptos como variables, anidamiento de selectores y media queries. En la actualización, se usaron funciones flecha, variables ES6, bucles 'for...of', etc.
- El uso de Javascript se orientó a los efectos visuales, escroll de las página, banners deslizantes y pestañas.

## Resultados
Versión desktop:

![Página en versión escritorio](/img_md/webpage_desktop.png)

Versión mobile:

![Página en versión móvil](/img_md/webpage_mobile.png)

El sitio está [disponible en Github Pages](https://okipe.github.io/retro_computer_gallery)

## Comentarios finales
El curso representó mi primer acercamiento a Javascript. A continuación, el comentario brindado en mi presentación de Crehana.

Este curso me ha permitido tener mi primera experiencia con un lenguaje de programación (el Javascript sí es un lenguaje de programación, a diferencia de HTML y CSS), comprender más el trabajo de los desarrolladores front-end y armar animaciones de sitios web. Ello me permitirá conocer y practicar más, y pienso más adelante aprender las nuevas versiones de Javascript que se lanzarán el próximo año, así como bibliotecas y frameworks de Javascript. 🚀🚀 He disfrutado mucho haciendo este trabajo.

[Proyecto inicial en Crehana](https://www.crehana.com/proyecto/oscarroman-pe/267322/retro-computer-gallery-project)

## Changelog
Versión 1:
- Versión inicial.
- Uso de características y sintáxis ES5.

Versión 1.1:
- Modernización del código Javascript. Se empleó características de ES6.
- Ordenamiento de elementos CSS dentro del Less.
- Se mueve el hosting a Github Pages.