# Uso de formularios, enrrutamiento y tablas

Este proyecto ha sido desarrollado como parte de una actividad de aprendizaje sobre conceptos avanzados de Angular. He optado por usar el enfoque clásico con `NgModules`, desactivando la opción de _standalone components_ para consolidar conocimientos sobre el uso de módulos, enrutamiento y formularios siguiendo un enfoque de desarrollo clásico con Angular.

![image](https://github.com/user-attachments/assets/ac986db3-9c44-4285-9ef9-769abc81ba84)

## Modularización y routing

Aprendí a crear módulos separados (`FormModule` y `TableModule`) y configurarlos con rutas perezosas (lazy loading) usando `loadChildren`. Esto permite que Angular cargue solo lo necesario, mejorando el rendimiento y la organización del código.

## Implementación de formularios

He implementado un formulario robusto y fácilmente escalable de alta de usuario usando `ReactiveFormsModule`, consiguiendo con ello:

- Conseguir crear un `FormGroup` que utiliza varios `FormControls`
- Conocer más sobre validaciones reactivas con `Validators`
- Habilitado dinámico del botón de envío en base a si el formulario es válido o no

## Renderizado condicional con \*ngFor y manipulación de UI

En el módulo `table`, generé una tabla con datos falsos (mock) usando `*ngFor`, y añadí un botón que permite al usuario cambia los estilos y alternar la visibilidad de columnas de la tabla mediante el uso de `*ngIf`. Esto me ayudó a ver cómo se pueden construir interfaces dinámicas sin necesidad de librerías externas.
