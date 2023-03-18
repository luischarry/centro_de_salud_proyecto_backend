# Proyecto final Centro de salud Backend
***

## Tabla de contenido
1. [Requisitos](#Requisitos)
2. [Tecnologias utilizadas](#Tecnologias_utilizadas)
3. [Paginas](#Paginas)
*** 
Se decide crear un backend para un centro de salud con una base de datos no relacional, y que compla con los siguientes requisitos:

## Requisitos

### Usuarios 🧑👩
* Puedan registrarse.
* Puedan loguearse.
* Puedan elegir su medico de preferencia.
* Puedan elegir la fecha y la hora con su medico.
* Puedan ver su perfil en cual aparecera su tarjeta de salud y sus citas elegidas.

### Medicos 👨‍⚕️
* Puedan loguearse.
* Puedan ver su perfil, el cual tendra las cita programadas del dia con su paciente y hora.

### Administrador 👨‍💼
* Podra loguearse.
* Podra ver en su perfil, todos los usuarios y doctores existentes.
***

## Tecnologias utilizadas 🦾

* ExpressJS
* Mongoose
* MongoDB
***

## Postman
 Utilizamos postman para ver que las rutas esten correctamente funcionando 

### Registro de un usuario

- utilizamos en enlace:
[post] http://localhost:5500/user/singup

[![registrousuario-postman.png](https://i.postimg.cc/k5W2vYbC/registrousuario-postman.png)](https://postimg.cc/FfsF9ZpC)

### Login de usuario 

- utilizamos en enlace:
[POST] http://localhost:5500/user/login

Si el correo y la contraseña existen nos devolvera un token y los datos del usuario que usaremos en el front.

[![login-Postman.jpg](https://i.postimg.cc/k4x43TNc/login-Postman.jpg)](https://postimg.cc/r0wc5CP0)

### Pedir cita 
- utilizamos en enlace:
[POST] http://localhost:5500/appointment

El endpoint verifica el token y que si el usuario del token el mismo para quien va ser la cita medica,
tambien verifica que el medico no tenga citas ese dia a esa hora.
[![creacion-cita.png](https://i.postimg.cc/g061Hrq1/creacion-cita.png)](https://postimg.cc/HJdSpYNt)

### Eliminar cita 
- utilizamos en enlace:
[DELETE] http://localhost:5500/appointment/:_id

El usuario podra elminiar alguna cita que desee cancelar.
[![eliminar-cita.png](https://i.postimg.cc/jSgYxGZd/eliminar-cita.png)](https://postimg.cc/MnQFt3Ch)

### Login medicos
- utilizamos en enlace:
[POST] http://localhost:5500/doctor/login

funciona igual que el login de usuarios, devuelve un token y la informacion del usuario.
[![login-doctor.png](https://i.postimg.cc/L5NHFhWN/login-doctor.png)](https://postimg.cc/JHHwb7Mk)

### Perfil del medico
- utilizamos en enlace:
[GET] http://localhost:5500/appointment/today/:doctor

Nos dara como resultado todas las citas del medico, le medico debe estar logeado ya que se verifica el token de que sea el medico.
[![medico-citas.png](https://i.postimg.cc/j2V8qhpj/medico-citas.png)](https://postimg.cc/r0JGQ5F6)

### Admin
El admin podra ver todos los medicos, todos los usuario, y todas las citas solicitadas por los usuarios.
 [GET] http://localhost:5500/user/allUser
 [![admin-usuarios.png](https://i.postimg.cc/qRfBszS5/admin-usuarios.png)](https://postimg.cc/v1zdMHQr)

[GET] http://localhost:5500/appointment/admin
 [![admin-citas.png](https://i.postimg.cc/GmsZkqRb/admin-citas.png)](https://postimg.cc/pmRGvQyS)









