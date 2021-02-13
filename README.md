# ProyectoDelilahRest-PedroProvenzano

Proyecto para acamica

## Instrucciones para la instalacion

### Primer Paso

- Clonar el proyecto de git

```bash
git clone git@github.com:PedroProvenzano/ProyectoDelilahRest-PedroProvenzano.git
cd ProyectoDelilahRest-PedroProvenzano
```

- Instalar dependencias

```bash
npm install
```

- Renombrar el archivo dummy.env como .env (una vez creada la base de datos vas a tener que reemplazar datos en el archivo .env).

### Segundo Paso

- Crear una base de datos, puede ser Worbench MySQL, XAMPP, MariaDB por ejemplo.

- Una vez creada la base de datos rellenar la informacion del archivo .env con los datos de tu base de datos

```
PORT=PUERTO DONDE SE INICIA LA API
USER=USUARIO QUE ACCEDE A LA BASE DE DATOS
PORTSQL=PUERTO DE LA BASE DE DATOS
PASSWORD=ACA VA LA PASS DE LA BASE DE DATOS
HOST=DIRECCION DE LA BASE DE DATOS
DATABASE_NAME=NOMBRE DE LA BASE DE DATOS
ACCESS_TOKEN=ACA VA LA TOKEN 1 AUTOGENERADA CONSEGUIDA EJECUTANDO npm run generatecode
ACCESS_TOKEN_REFRESH=ACA VA LA TOKEN 2 AUTOGENERADA EJECUTANDO npm run generatecode
ADMIN_PASS=PASSWORD NECESARIA PARA CREAR ADMINISTRADORES Y PARA POBLAR LA BASE DE DATOS
```

- OJO: la informacion de este archivo tiene que ser manejada con precaucion, ya que es informacion que compromete a la seguridad de la base de datos si es revelada.

- Aclaracion: Para generar los Access token hay que ejecutar en la consola el siguiente comando

```bash
npm run generatecode
```

### Tercer Paso

- Una vez completados los datos de la base de datos en el archivo .env vamos a ejecutar la base de datos utilizando el comando

```bash
npm start
```

en la consola.

- La api va a crear las tablas automaticamente en la base de datos.

### Cuarto Paso opcional

- Si necesitas cargar datos extra a las tablas de Usuarios y Platos para hacer pruebas en la base de datos hay dos archivos nombrados "GeneratedMeals.json" y "GeneratedUsers.json" que se pueden utilizar para enviar a traves de postman o cualquier metodo de envio POST, a el endpoint

- Caso Platos

```diff
+ Method: POST

+ Endpoint:
```

```
http://localhost:3000/menu/masive
```

```diff
+ body content
```

```
Contenido del archivo "GeneratedMeals.json"
```

```diff
- Para que esto funcione, en el archivo GeneratedMeals hay que cambiar la variable password por la ADMIN_PASS que hay en el archivo .env
```

- Caso Usuarios

```diff
+ Method: POST

+ Endpoint:
```

```
http://localhost:3000/usuarios/masive
```

```diff
+ body content
```

```
Contenido del archivo "GeneratedUsers.json"
```

```diff
- Para que esto funcione, en el archivo GeneratedUsers hay que cambiar la variable password por la ADMIN_PASS que hay en el archivo .env
```
