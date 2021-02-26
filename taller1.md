# :whale: Docker 101

## :heavy_check_mark: Instalación de docker
1. Ingresa en modo super usuario
```
$ sudo su
```
2. Actualiza las listas de paquetes disponibles en tu sistema operativo
```
$ apt-get update
```
3. Instalemos Docker
```
$ apt-get install docker.io
```
*Ahora debería tener Docker instalado, el daemon iniciado, y el proceso habilitado para iniciar durante el arranque. Verifique que se esté ejecutando:*
```
$ sudo systemctl status docker
```

Corroboremos que el servicio está activo. En la terminal debe de aparecer un mensaje como el siguiente:

![status](/images/status_docker.png)

## :heavy_check_mark: Hello World!
Para corroborar que podemos acceder y descargar imágenes desde [Docker Hub](https://hub.docker.com/) hagamos el *Hello World* de Docker y escribamos en la terminal:
```
docker run hello-world
```

Tendrás en consola un mensaje como el siguiente:
![hello](/images/hello.png)

Te explico, Docker no encontró la imagen llamada *hello-world* localmente, entonces descargó la imágen del repositorio de contenedores [Docker Hub](https://hub.docker.com/), que es el repositorio oficial. Luego que descargó la imagen se creó el contenendor a partir de la imagen y la aplicación dentro del contenedor que se ejecutó.


## :heavy_check_mark: Descarga una imagen

Bajamos una imagen con el comando *docker pull* , para este taller descargaremos la imagen de Ubuntu 18.04, ya que estamos familiarizado en este sistema, y para ello ejecutamos en la terminal el comando:
```
$ docker pull ubuntu:18.04
```
Corroboramos que la imagen fue descargada y para ello ejecutamos:
````
$ docker images
````
![images](/images/docker_images.png)

Como vemos tenemos ahora dos imágenes descargadas a partir de las cuales podemos generar la cantidad de contenedores que querramos. Basta con descargarlos una vez y no borrarlos para poder generar nuestros contenedores.

## :heavy_check_mark: Crea un contenedor
A partir de la imagen descargada vamos a crear una instancia con un contenedor con el comando *docker run*  y ejecutaremos dentro del contenedor el comando */bin/bash*, esto nos permitira ingresar directamente a la bash del contendor y podremos ejecutar los mismos comandos como su estuvieramos en nuestro ordenador físico.
```
$ docker run -it ubuntu:18.04 /bin/bash
```
Como ves el prompt cambia, veras algo como esto en la terminal:

![prompt](/images/prompt.png)

Listemos los archivos y directorios con:
```
$ ls
```
Veremos un listado como el siguiente:

![directorios](/images/directorios.png)

Como ves es como estar en una terminal normal con los directorios más importantes de Ubuntu 18.04.

Si quieres salir de este entorno del contenedor solo escribe:
```
$ exit
```

## :heavy_check_mark: Gestión de contenedores

:wrench: Si deseas ver el listado de los contenedores que estan corriendo o estan activos:

```
$ docker ps
```


:wrench: Si deseas ver el listado de los contenedores que estan activos e inactivos:

```
$ docker ps -a
```

Veras algo como esto: 
![ps](/images/ps.png)

Para ver el último contenedor creado:
```
$ docker ps -l
```
<br>

:wrench: Si tu contenenedor se ha detenido puedes reiniciarlo, tienes dos formas, la primera es con el CONTAINER_ID que puede ser todo el ID o solamente los primeros 4 caracteres del mismo.:
```
$ docker start <CONTAINER_ID>
```
también puedes utilizar el nombre del contendedor
```
$ docker start <NAME>
```
Ejemplo:
![start](/images/start.png)
como puedes ver se reinicio el conteneder de nombre *priceless_newton* y ahora su estatus es **UP**. Obtienes el mismo resutlado si ejecutas:
```
$ docker start 438e
```
:wrench: para ingresar de nuevo al la bash del contenedor que esta corriendo:
```
$ docker exec -it <CONTAINER_ID> /bin/bash
```


## :heavy_check_mark: Detener y borrar un contenedor
:wrench: Para adetener un contenedor usa *docker stop* , puedes usar el ID o NOMBRE para identificar el contenedor.
```
$ docker stop <CONTAINER_ID>
```

<br>

:wrench: Si ya no deseas usar este contenedor, eliminalo definitivamente con:
```
$ docker rm <CONTAINER_ID>
```

:bangbang: Ten en cuenta que antes de eliminar un contenedor lo debes de detener.




