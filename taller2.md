# :whale: Mapeo de puertos con Docker

Ahora que ya sabemos lo básico sobre la gestión de un contenedor vamos a mapear los puertos del contenedor para poder utilizarlos. Lo haremos de manera local y crearemos un container basado en la imagen de Ubuntu 18.04LST, luego le instalaremos Apache en el puerto 8000 y este tendrá salida en nuestro ordenado host en el puerto 8080.



:bangbang: Te recomiendo que pases primero por el [taller1](taller1.md)

:bangbang: Ten en cuenta que tomo sistema operativo host un Ubuntu 18.04LTS. Puedes tenerlo instalado en tu ordenador o en algun servicio de la nube.

## :heavy_check_mark: Creación del contenedor y mapeo de puertos. 

No es necesario que desgargues por aparte la imagen de Ubuntu 18.04, al ejecutar el siguiente comando automáticamente lo hará.

Ingresa a la terminal y ejecuta:
```
docker run -it -d -p 8001:80 --name=apache ubuntu:18.04 /bin/bash
```
### :eyeglasses: Explicación
 - Como puedes ver se crea un contenedor basado en la imagen de Ubuntu:18.04 (puedes verificar con *docker images*) o sea es Ubuntu en su versión 18.04.

- El parámetro -d nos dice que se ejecuta en segundo plano 

- El parámetro -p nos ayuda a mapear los puertos y estamos diciendo que el puerto 80 del container es el puerto 8001 del host. Se hace de esta forma porque el puerto 80 es el asignado a Apache cuando lo instalemos por eso lo dejamos así definido.

- --name nos permite darle un NAME  personalizado al container

## :heavy_check_mark: Acceso al container que tenemos en segundo plano
Vamos a acceder a la bash del container que tenemos en segundo plano y le instalaremos apache.

:wrench: Accedamos al container, directamente a la bash:
```
$ docker exec -it apache /bin/bash
```
como vemos usamos el NAME del container.

Actualiza las listas de paquetes:
```
$ apt-get update
```
Instalemos Apache:
```
$ apt-get install apache2
```
Iniciemos el servidor Apache:
```
$ /etc/init.d/apache2 start
```
Salgamos del container
```
$ exit
```

## :heavy_check_mark: Acceder al puerto del container
Como vemos tenemose l servidor HTTP Apache corriendo en el puerto 80 de el contenedor, ahora accedamos a el por medio del puerto 8001.

Obtengamos la IP de nuestra máquina host, corramos el siguiente comando:
```
$ ifconfig -a 
```

usa el navegador para acceder genéricamente como:
```
http://IP:PORT
```
Accede:
```
http://IP:8001
```

## :heavy_check_mark:  Obtener IP del container
Realicemos una prueba, accedamos ala IP del container, ejecuta:
```
docker inspect apache | grep IPAddress
```
