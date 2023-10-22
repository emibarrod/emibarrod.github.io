# Cuidado con las referencias en Python
---
El otro día estaba intentando actualizar el valor de las claves de un diccionario en Python de manera iterativa. Digamos que mi código era el siguiente.
```python
import random

dictionary = {
    0:"a",
    1:"b",
    2:"c"
}

keys = dictionary.keys()

for key in keys:
    new_key = random.randint(3,10)
    dictionary[new_key] = dictionary[key]
    del dictionary[key]
```
De primera mano me parecía completamente correcto: saco todas las claves del diccionario e itero sobre ellas para actualizarlas con un número aleatorio entre el 3 y el 10. Por último, borro la clave antigua.
Para mi sorpresa, el código me devolvía un error: 
```
    for key in keys:
RuntimeError: dictionary changed size during iteration
```
¿Cómo va a cambiar mi diccionario de tamaño, si estoy añadiendo una clave y borrando otra?
Tras investigar este código tan simple durante un buen rato (durante el que me sentí idiota, ya que el código era simple), me di cuenta. El fallo era que la variable `keys` estaba cambiando durante la ejecución del bucle. ¿Por qué? Pues porque `keys = dictionary.keys()` crea una **referencia** a las claves del diccionario. Por lo tanto, al añadir una nueva clave a nuestro diccionario, aunque borremos la antigua, la variable `keys` tiene un nuevo valor. De esta forma entraríamos en bucle infinito dentro del bucle for.
¿Cómo solucioné esto? Creando una copia del valor de las claves mediante el uso de listas por comprensión:
```python
import random

dictionary = {
    0:"a",
    1:"b",
    2:"c"
}

keys = [i for i in dictionary.keys()]

for key in keys:
    new_key = random.randint(3,10)
    dictionary[new_key] = dictionary[key]
    del dictionary[key]
```
De esta forma, la variable `keys` contendrá una copia de los valores de `dictionary.keys()` en vez de una referencia.