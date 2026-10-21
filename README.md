# Shark Grúas

Maqueta de trabajo del sitio de **Shark Grúas**: una portada de bienvenida y
páginas independientes de servicios, cotización, cobertura, preguntas frecuentes
y club de referidos. Todo es estático, sin dependencias, y está pensado para
**móvil primero**.

La base operativa está en la Región Metropolitana y, según la última devolución
del cliente, la cobertura publicada es **Santiago y la Región Metropolitana**.
El mapa se mantiene como referencia del país; no representa atención completa de
todas sus localidades.

## Páginas del sitio

| Archivo | Contenido |
| --- | --- |
| `index.html` | Bienvenida: mensaje principal, muestra de los servicios y acceso al resto |
| `servicios.html` | Los cuatro servicios en detalle y cómo funciona el proceso |
| `cotizacion.html` | Cotizador: ciudad, comuna, distancia estimada y tarifa referencial |
| `cobertura.html` | Cobertura por sector y mapa de regiones |
| `preguntas-frecuentes.html` | Preguntas frecuentes (página propia, no va embebida en la portada) |
| `club-referidos.html` | Club de referidos, destino del botón flotante de descuento |

`prueba.html` quedó como redirect a la portada, para no romper el enlace previo
de la maqueta.

## Desarrollo y publicación

El sitio no tiene build: son archivos estáticos (`assets/estilo.css`,
`assets/app.js`, `assets/animaciones.js` y las páginas HTML).

Para verlo en local:

```bash
python3 -m http.server 8777
```

GitHub Pages se publica con el workflow `.github/workflows/pages.yml`, que arma
`_site/` usando `scripts/build-pages.mjs`: copia las páginas y `assets/`, y solo
los recursos de `Media/` que las páginas realmente usan.

## Datos pendientes de confirmar

El teléfono, el WhatsApp y las tarifas de la maqueta son **valores de ejemplo**.
Viven todos en el objeto `SHARK` de `assets/app.js`, para reemplazarlos en un
solo lugar cuando el cliente entregue los oficiales:

- `SHARK.TELEFONO` y `SHARK.WHATSAPP`
- `SHARK.TARIFA` (base de despacho, valor por kilómetro, recargos)

El cálculo automático de la tarifa está pensado para funcionar sobre las reglas
comerciales definitivas; mientras tanto la estimación se muestra como referencial.

## Recursos cartográficos

El mapa regional es una adaptación de
[Mapa de Chile (regiones).svg](https://commons.wikimedia.org/wiki/File:Mapa_de_Chile_(regiones).svg),
por B1mbo / Osmar Valdebenito, con actualización de Ñuble por Janitoalevic.
Licencia: [CC BY-SA 3.0 Chile](https://creativecommons.org/licenses/by-sa/3.0/cl/).
Se modificaron colores, presentación y agrupación regional.

La carpeta conserva recursos anteriores del prototipo, incluido el mapa de
comunas adaptado de
[Comunas de Santiago (nombres).svg](https://commons.wikimedia.org/wiki/File:Comunas_de_Santiago_(nombres).svg),
por Osmar Valdebenito, bajo
[CC BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).
Ese mapa no se utiliza en la página actual.
