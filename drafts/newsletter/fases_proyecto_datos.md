## 1. Definición de requisitos

Consiste en recabar información (normalmente en una reunión con el cliente) de todo lo que se quiere conseguir con el proyecto. También tendremos que definir cómo queremos conseguir el objetivo (por ejemplo si el cliente quiere usar una tecnología en concreto). Por último, es importante definir una métrica para que, al finalizar el proyecto, se tenga claro si ha sido exitoso o si hemos fracasado.

En este primer punto de un proyecto de ingeniería de datos, decidiremos si el proyecto es viable o si tenemos capacidad para realizarlo. Es mejor una retirada a tiempo que luego fracasar estrepitosamente (aunque tampoco hay que acobardarse ante un proyecto desafiante).

Resumen de algunos puntos clave en esta etapa:

- Definición de las fuentes de datos que se usarán (para que luego no haya sorpresas): volumen de datos, tipo de fuente de datos, nivel de seguridad y permisos, etc. 
- Definición de la frecuencia de actualización. Tanto de las fuentes de datos, como de las ETLs que crearemos.
- ¿Tenemos requisitos de tecnología? Esto es importante puesto que afectará a las fases posteriores.  


## 2. Diseño de la arquitectura de datos

En esta fase, se diseña la arquitectura de datos que soportará los requisitos del proyecto. Esto incluye la selección de tecnologías, la definición de modelos de datos, y la planificación de la infraestructura de almacenamiento y procesamiento de datos.
    
Puntos que creo que son clave:
    
- ¿On-premise o Cloud?
- Tecnologías a usar: Base de datos, ETL, orquestación, governanza, etc. Definir las tecnologías que usará nuestra arquitectura.
- Definición del modelo de datos.
- Definición del proceso de gobernanza de datos.

## 3. Planificación y tiempos

En esta fase se prepara un plan detallado de las fases de desarrollo que tendrá el proyecto. Así como los tiempos, reparto de tareas, etc. Esta será la etapa en la que se puede decidir si lo que se quiere hacer es viable en el tiempo dado.
    
Hay que tener en cuenta:
    
- Rol de cada colaborador del equipo: responsabilidades, permisos, tareas, etc.
- Tiempo de cada tarea: lo mejor es hacer un cronograma de algún tipo definiendo las fases.
- Dependencias de cada tarea: hay que tener claro qué tareas dependen de otras, para asignar prioridades.

## 4. Implementación y desarrollo

Aquí se lleva a cabo el proyecto como tal. Esto incluye la programación, la configuración de bases de datos, la integración de sistemas, y la creación de flujos de procesamiento de datos.
    
Puntos importantes:
    
- Desarrollar según el estándar de la empresa: tu empresa debería tener un estándar de desarrollo. Si es el caso, se debería seguir. Si no, no te preocupes, en siguientes entregas de esta newsletter te enseñaré a definir una.
- Independientemente del punto anterior, SIEMPRE debemos implementar tests y logs para nuestro desarrollo. Esto nos ayudará en la siguiente etapa del proyecto.

## 5. Pruebas

En esta fase, el proyecto desarrollado se somete a diversas pruebas para asegurar que funciona según lo previsto. Esto incluye pruebas de rendimiento, pruebas de integridad de datos, y pruebas de seguridad.
    
Consideraciones:
    
-  Si lo hemos hecho bien hasta este punto, los tests y logs que hemos implementado en la etapa anterior nos ayudarán a probar el proyecto.
-  En esta fase podemos crear algún test o prueba que pudiera faltar.
-  Importante medir los tiempos de ejecución, para más tarde poder detectar comportamientos extraños en el proyecto.

## 6. Despliegue

Una vez hemos probado el proyecto y se ha confirmado que cumple con los requisitos, procedemos al despliegue. Esto puede incluir la migración de datos, la puesta en marcha de ETLs en producción y/o la integración con otros sistemas existentes entre otras tareas.
    
Importante:
    
- Lo he obviado en los puntos anteriores, pero el entorno de desarrollo del proyecto debe ser completamente independiente del entorno de producción.
- No se debería hacer el cambio al proyecto en producción de forma instantánea. Deberíamos pasar primero por la siguiente fase y ver que todo funciona bien.

## 7. Operación y mantenimiento

Después del despliegue, el sistema entra en la fase de operación, donde se monitorea, se mantiene y se actualiza según sea necesario. Esta fase incluye la gestión de la calidad de los datos, la resolución de problemas y la implementación de mejoras.

## 8. Evaluación

Finalmente, evaluamos el rendimiento del sistema y recopilamos información para identificar áreas de mejora. Esto puede llevar a ajustes en la arquitectura de datos, en el modelo de datos, en la ETL. A veces, de un proyecto se pueden identificar oportunidades para futuros proyectos. Si nuestros logs y tests están bien implementados, esta fase será coser y cantar.