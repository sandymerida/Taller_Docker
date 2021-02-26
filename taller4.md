# Docker compose 101
![](/images/compose.png)

[Docker Compose](https://github.com/docker/compose) es una herramienta para correr aplicaciones que requieren más de un container de Docker, a esto se le denomina orquestación y lo haremos de forma local en nuestro ordenador.

:bangbang: Te recomiendo que pases primero por los talleres 1,2 y 3 para una mejor comprensión. Pero en especial el taller 3 porque como verás es seguimiento de ese taller.

:bangbang: Ten en cuenta que tomo sistema operativo host un Ubuntu 18.04LTS. Puedes tenerlo instalado en tu ordenador o en algun servicio de la nube.

## :heavy_check_mark: Instalación de Docker Compose

Ejecute este comando para descargar la versión estable actual de Docker Compose:
```
$ sudo curl -L "https://github.com/docker/compose/releases/download/1.26.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```

Aplique permisos ejecutables al binario:
```
$ sudo chmod +x /usr/local/bin/docker-compose
```

Nota:​ Si el comando falla después de la instalación, comprueba la ruta de acceso. También
puede crear un vínculo simbólico a o cualquier otro directorio de la ruta de acceso.
```
sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
```
Compruebe la instalación:
```
$ docker-compose --version
```

Si tienes alguna consulta sobre la instalación consulta [aquí](​https://docs.docker.com/compose/install/).

Para desinstalarlo ejecutar:
```
sudo rm /usr/local/bin/docker-compose
```
## :heavy_check_mark: Creación del docker-compose.yml
Crea el archivo llamado *docker-compose.yml* . En este caso lo tienes en el directorio */Taller_Docker/source/*
```
version: '3'
services:
  servidor:
    image: "<USER>/servidor_td:v1"
    container_name: servidor2
    ports:
      - "5000:3000"
    depends_on:
      - front

  front:
   image: nginx:alpine
   container_name: front
```

### :eyeglasses: Explicación
- Este archivo crea dos contenedores, uno está basado en la imagen que se generó en el taller3 llamado *servidor_td:v1* y el otro con la imagen del servidor web ngix en su versión alpine.
- Como puedes ver se pone un nombre por container y acá tenemos al "servidor" y "front"
- Como puedes ver desde acá se hace el mapeo de puertos y ahora usaremos el puerto 5000 del host para exponer a el servidor
- depend_on hace que el servicio espere que se creen de primero esos servicios listado para crear el propio.

## :heavy_check_mark: Gestión de microservicios con Docker Compose
:wrench: Es el momento de correr nuestro docker-compose. Nos vamos al directorio donde tenemos el archivo *docker-compose.yml* y ejecutamos:
```
$ docker-compose up 
```

veremos el siguiente log:
![](/images/log.png)
### :eyeglasses: Explicación
- Si no encuentra las imágenes de manera local, las descarga.
-Primero crea el servicio denominado "front" y luego el "servidor2"
-Ves que nos dice que usa el puerto 3000 pero como lo mapeamos para que en el host se utilice el 5000 tenemos esto en el navegador con la URL:
```
http://localhost:8000/
```

![](/images/server80001.png)

Ahora si queremos que se ejecute en modo detach , es decir en segundo plano solo le agregamos -d y podemos seguir usando la consola:
```
$ docker-compose up -d
```
![](/images/log3.png)

Como ves no es necesario ejectar uno a uno los Dockerfile cuando tienes un docker-compose.

:wrench:  Ahora si deseas detener los conteiners asociados al docker-compose utiliza el comando:
```
$ docker-compose stop
```
:wrench:  Pero si lo que es detener y borrar los conteiners asociados al docker-compose utiliza el comando:
```
$ docker-compose down
```