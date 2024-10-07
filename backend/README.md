<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Spotify Clone API

Este es un clon de la API de Spotify, que permite gestionar artistas en una base de datos MongoDB. Puedes crear, leer, actualizar y eliminar artistas.

## Tabla de Contenidos

- [Instalación](#instalación)
- [Uso](#uso)
- [Endpoints](#endpoints)
- [Ejemplos de Solicitudes](#ejemplos-de-solicitudes)
- [Contribución](#contribución)
- [Licencia](#licencia)

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu_usuario/spotify-clone-api.git
# Spotify Clone API

Este es un clon de la API de Spotify, que permite gestionar artistas en una base de datos MongoDB. Puedes crear, leer, actualizar y eliminar artistas.

## Tabla de Contenidos

- [Instalación](#instalación)
- [Uso](#uso)
- [Endpoints](#endpoints)
- [Ejemplos de Solicitudes](#ejemplos-de-solicitudes)
- [Contribución](#contribución)
- [Licencia](#licencia)

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu_usuario/spotify-clone-api.git


| Método | Endpoint                   | Descripción                    |
|--------|----------------------------|--------------------------------|
| `GET`  | `/artists`                   | Obtiene todos los artistas     |
| `GET`  | `/id/:id`               | Obtiene un artista especifico     |
| `POST` | `/artists`                   | Crea un nuevo artista         |
| `POST` | `/:id/users/favorites`     | Para agregar favorito a usuario|
| `GET`  | `/:limit`     | Obtiene los artistas con un limite|