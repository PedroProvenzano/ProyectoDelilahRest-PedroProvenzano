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
---
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

# ENDPOINTS

```
URL (en caso que la base de datos este instalada de forma local) = http://localhost:3000/  (3000 es el puerto donde se inicia la api, reemplazar por el puerto que uses)
```
---
## Usuarios

```diff
+ /usuarios
+ - Content-Type: application/json
```
---
### Registrar usuario

```diff
+ Method: POST
+ /usuarios/add
```

Estructura del body (ejemplo)

```json
{
  "username": "Mrklus",
  "password": "123password",
  "fullname": "Pedro Provenzano",
  "email": "mailfalso0@gmoil.com",
  "phone": 153232434,
  "sendDir": "Calle falsa 123"
}
```

Respuesta ejemplo (201)

```json
{
  "username": "Mrklus",
  "fullname": "Pedro Provenzano"
}
```
---
### Login de usuario

```diff
+ Method: GET
+ /usuarios/login
```

Estructura del body (ejemplo)

```json
{
  "username": "Mrklus",
  "password": "123password"
}
```

Respuesta ejemplo (200)

```json
{
  "msg": "Login exitoso",
  "username": "Mrklus",
  "sendDir": "Calle falsa 2210",
  "phone": "51532434",
  "fullname": "Pedro Provenzano",
  "email": "email@gmoil.com",
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ik1ya2x1cyIsImlhdCI6MTYxMzI1OTU5OCwiZXhwIjoxNjEzMjczOTk4fQ.w8hYTIiAHluOlSzY-nz682eixTK93gGnAIRhTUUIGzw",
  "Token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ik1ya2x1cyIsImlhdCI6MTYxMzI1OTU5OH0.bF9Pz_Di13T3cSaAAnQ2sfVNsu_cp9EkAvo03dEl5K8"
}
```

(La refresh token se usa en el header para tener permisos como usuario logeado (esta token expira y es necesario hacer un request especial para conseguir una nueva con la otra token))
---
### Logout de usuario

```diff
- NECESITA TOKEN
+ Method: GET
+ /usuarios/logout
```

- Header: La token para el logout tiene que ser la Token y no la RefreshToken.

Estructura del body (ejemplo)

```json
{
  "username": "Mrklus"
}
```

Respuesta ejemplo (200)

```json
"Logout Exitoso"
```
---
### Edit de usuario

```diff
- SOLO ADMIN
- NECESITA REFRESHTOKEN
+ Method: PUT
+ /usuarios/edit
```

Estructura del body (ejemplo)

```json
{
  "username": "Mrklus",
  "fullname": "Pedro Esteban Provenzano",
  "phone": "159382903",
  "email": "newemail@gmoil.com",
  "sendDir": "nueva calle falsa 2210"
}
```

Respuesta ejemplo (201)

```json
"Usuario actualizado"
```
---
### Borrar usuario

```diff
- SOLO ADMIN
- NECESITA REFRESHTOKEN
+ Method: DELETE
+ /usuarios/edit
```

Estructura del body (ejemplo)

```json
{
  "username": "Mrklus",
  "DeleteUsername": "Pedro"
}
```

Respuesta ejemplo (201)

```json
"Usuario Pedro eliminado"
```
---
### Lista de usuarios

```diff
- SOLO ADMIN
- NECESITA REFRESHTOKEN
+ Method: GET
+ /usuarios/
```

Estructura del body (ejemplo)

```json
{
  "username": "Mrklus"
}
```

Respuesta ejemplo (201)

```json
[
  {
    "username": "Mrklus",
    "fullname": "Pedro Esteban Provenzano",
    "email": "newemail@gmoil.com",
    "sendDir": "nueva calle falsa 2210",
    "phone": "51532434"
  },
  {
    "username": "collier.rodger",
    "fullname": "Miss Rosanna O'Connell DDS",
    "email": "haley.gregory@example.org",
    "sendDir": "198 Serenity Keys",
    "phone": "(551)381-0997"
  }
]
```
---
## Platos

```diff
+ /menu
+ - Content-Type: application/json
```
---
### Agregar Plato

```diff
- SOLO ADMIN
- NECESITA REFRESHTOKEN
+ Method: POST
+ /menu/add
```

Estructura del body (ejemplo)

```json
{
  "username": "Mrklus",
  "mealName": "Tarta",
  "price": 250
}
```

Respuesta ejemplo (201)

```json
{
  "mealName": "Tarta",
  "price": 250
}
```
---
### Editar Plato

```diff
- SOLO ADMIN
- NECESITA REFRESHTOKEN
+ Method: PUT
+ /menu/edit
```

Estructura del body (ejemplo)

```json
{
  "username": "Mrklus",
  "mealName": "Fideos con bolognesa",
  "price": 300
}
```

Respuesta ejemplo (201)

```json
{
    "Plato actualizado"
}
```
---
### Eliminar Plato

```diff
- SOLO ADMIN
- NECESITA REFRESHTOKEN
+ Method: DELETE
+ /menu/delete
```

Estructura del body (ejemplo)

```json
{
  "username": "Mrklus",
  "mealDelete": "Milanesa con papas"
}
```

Respuesta ejemplo (201)

```json
{
    "Plato Milanesa con papas eliminado"
}
```
---
### Menu completo

```diff
- NECESITA REFRESHTOKEN
+ Method: GET
+ /menu/
```

Estructura del body (ejemplo)

```json
{
  "username": "Mrklus"
}
```

Respuesta ejemplo (201)

```json
[
  {
    "mealName": "Milanesa",
    "price": 250
  },
  {
    "mealName": "Fideos",
    "price": 150
  },
  {
    "mealName": "Sanguche",
    "price": 100
  }
]
```
---
## Pedidos

```diff
+ /pedidos
+ - Content-Type: application/json
```
---
### Agregar Pedido

```diff
- NECESITA REFRESHTOKEN
+ Method: POST
+ /pedidos/add
```

Estructura del body (ejemplo)

```json
{
  "username": "Mrklus",
  "platos": ["Fideos", "Milanesa", "Sanguche"],
  "payMethod": "Efectivo"
}
```

Respuesta ejemplo (200)

```json
{
  "msg": "Pedido tomado",
  "pedido": {
    "orderState": "Nuevo",
    "order_id": 7,
    "payMethod": "Efectivo",
    "price": 2020,
    "updatedAt": "2021-02-14T00:40:51.973Z",
    "createdAt": "2021-02-14T00:40:51.973Z"
  },
  "plato": [
    {
      "meal_id": 1,
      "mealName": "Milanesa",
      "price": 250
    },
    {
      "meal_id": 2,
      "mealName": "Fideos",
      "price": 150
    },
    {
      "meal_id": 3,
      "mealName": "Sanguche",
      "price": 100
    },
    {
      "meal_id": 5,
      "mealName": "Fideos",
      "price": 1520
    }
  ]
}
```
---
### Editar Pedido

```diff
- SOLO ADMIN
- NECESITA REFRESHTOKEN
+ Method: PUT
+ /pedidos/edit
```

Estructura del body (ejemplo)

```json
{
  "username": "Mrklus",
  "orderID": 2,
  "orderState": "CONFIRMADO"
}
```

Respuesta ejemplo (201)

```json
"Pedido actualizado a CONFIRMADO"
```
---
### Eliminar Pedido

```diff
- SOLO ADMIN
- NECESITA REFRESHTOKEN
+ Method: DELETE
+ /pedidos/delete
```

Estructura del body (ejemplo)

```json
{
  "username": "Mrklus",
  "DeleteID": 2
}
```

Respuesta ejemplo (201)

```json
"Pedido con ID 7 eliminado"
```
---
### Estado Pedido

```diff
- NECESITA REFRESHTOKEN
+ Method: GET
+ /pedidos/state
```

Estructura del body (ejemplo)

```json
{
  "username": "Mrklus",
  // Opcional indicar para que devuelva solo el pedido especifico
  "orderID": 1
}
```

Respuesta ejemplo (200)

```json
{
  "username": "Mrklus",
  "Pedidos": [
    {
      "order_id": 1,
      "orderState": "Nuevo",
      "payMethod": "Tarjeta",
      "price": 150,
      "createdAt": "2021-02-13T19:32:13.000Z",
      "Platos": [
        {
          "mealName": "Fideos",
          "price": 150
        }
      ]
    },
    {
      "order_id": 2,
      "orderState": "Nuevo",
      "payMethod": "Efectivo",
      "price": 400,
      "createdAt": "2021-02-13T19:32:27.000Z",
      "Platos": [
        {
          "mealName": "Milanesa",
          "price": 250
        },
        {
          "mealName": "Fideos",
          "price": 150
        }
      ]
    }
  ]
}
```
---
### Pedidos de un usuario en particular

```diff
- SOLO ADMIN
- NECESITA REFRESHTOKEN
+ Method: GET
+ /pedidos/user
```

Estructura del body (ejemplo)

```json
{
  "username": "Mrklus",
  "usernameOrders": "AbyssHowl"
}
```

Respuesta ejemplo (201)

```json
{
  "username": "AbyssHowl",
  "fullname": "Pedro Esteban Provenzano",
  "email": "newemail@gmoil.com",
  "phone": "51532434",
  "sendDir": "nueva calle falsa 2210",
  "Pedidos": [
    {
      "order_id": 1,
      "payMethod": "Tarjeta",
      "orderState": "Nuevo",
      "price": 150,
      "createdAt": "2021-02-13T19:32:13.000Z",
      "usuarioID": 1,
      "Platos": [
        {
          "mealName": "Fideos",
          "price": 150
        }
      ]
    },
    {
      "order_id": 2,
      "payMethod": "Efectivo",
      "orderState": "Nuevo",
      "price": 400,
      "createdAt": "2021-02-13T19:32:27.000Z",
      "usuarioID": 1,
      "Platos": [
        {
          "mealName": "Milanesa",
          "price": 250
        },
        {
          "mealName": "Fideos",
          "price": 150
        }
      ]
    }
  ]
}
```
---
### Ver todos los pedidos

```diff
- SOLO ADMIN
- NECESITA REFRESHTOKEN
+ Method: GET
+ /pedidos/admin
```

Estructura del body (ejemplo)

```json
{
  "username": "Mrklus"
}
```

Respuesta ejemplo (200)

```json
[
  {
    "order_id": 1,
    "payMethod": "Tarjeta",
    "orderState": "Nuevo",
    "price": 150,
    "createdAt": "2021-02-13T19:32:13.000Z",
    "usuarioID": 1,
    "Platos": [
      {
        "mealName": "Fideos",
        "price": 150
      }
    ],
    "Usuario": {
      "username": "Mrklus",
      "fullname": "Pedro Esteban Provenzano",
      "email": "newemail@gmoil.com",
      "phone": "51532434",
      "sendDir": "nueva calle falsa 2210"
    }
  },
  {
    "order_id": 2,
    "payMethod": "Efectivo",
    "orderState": "Nuevo",
    "price": 400,
    "createdAt": "2021-02-13T19:32:27.000Z",
    "usuarioID": 1,
    "Platos": [
      {
        "mealName": "Milanesa",
        "price": 250
      },
      {
        "mealName": "Fideos",
        "price": 150
      }
    ],
    "Usuario": {
      "username": "Mrklus",
      "fullname": "Pedro Esteban Provenzano",
      "email": "newemail@gmoil.com",
      "phone": "51532434",
      "sendDir": "nueva calle falsa 2210"
    }
  }
]
```
