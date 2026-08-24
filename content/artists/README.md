# Mantenimiento del Roster

## Cambiar un link

1. Abre `content/artists/nombre-del-artista.ts`.
2. Busca `LINKS`.
3. Sustituye únicamente la URL correspondiente.
4. Usa una URL HTTPS o elimina el elemento para ocultar el enlace.

## Cambiar una foto

1. Guarda la imagen en `public/assets/artists/nombre-del-artista/`.
2. Actualiza `image` en el archivo del artista.

## Cambiar un texto

1. Abre el archivo del artista.
2. Edita el valor dentro de `content.es` o `content.en`.

## Retirar un artista

1. Abre `content/artists/index.ts`.
2. Elimina o comenta su entrada en el array `artists`.

## Añadir un artista

1. Copia uno de los archivos existentes y completa todos sus datos.
2. Añade su imagen en `public/assets/artists/`.
3. Impórtalo en `content/artists/index.ts`.
4. Añádelo al array `artists` en la posición deseada.
