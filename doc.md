## Explicación login y SPA

El login en vez de usar services, usa dos simples funciones que se encargan de guardar y obtener el usuario del localStorage. El SPA es una aplicación de una sola página, que se encarga de cambiar el contenido de la página sin recargarla.

Parece tener diseño de MPA, pero realmente es el app-component, que en nuestro caso hemos hecho un router outlet, y la estructura de los componentes y su jerarquía de visualización está definida en el router.

Por ejemplo el layout es el parent de otros componentes y por eso siempre sale arriba (es el navbar) y el router outlet es el que se encarga de cambiar el contenido de la página.

## Explicación de los componentes
Con control flow de Angular depende del tipo de usuario mostramos unos componentes u otros.


## localStorage
Con este método, hemos podido pintar, cargar, escribir y visualizar información, entre diferentes componentes y tipos de usuario.
Sin embargo, al no estar usando express, hemos centrado luego nuestros esfuerzos en pasarlo a express, y no se ha logrado conectarlo.

## Angular
Pese a usar el 17 estamos evitando los standalone y la nueva forma de importar, por ello tenemos modules y router.

## Sprints y SCRUM
Hemos tenido que al final dedicarle bastante horas en casa, y sin saber usar Angular 17 ha sido una carrera a contrarreloj, ha sido difícil coordinarse ya que no todo el mundo tenía git, pero al final con discord hemos sacado cosas adelante.
Como SCRUM master, creo que no tiene sentido serlo si desconoces la tecnología, y al final hemos optado por una estructura más horizontal, aparte que al yo también estar programando no era realmente SCRUM master, lo malo que creo que por ello al final no se ha seguido el backlog y tareas asignadas, y varias veces nos hemos pisado sin saberlo.