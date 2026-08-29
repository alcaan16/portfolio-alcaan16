# alcaan16.es — Portfolio SAP ABAP Developer
 
Código fuente del portfolio de Ángel Alférez Castro: sitio estático construido con Astro que
reúne tres proyectos SAP sobre un mismo hilo funcional — recepción → lote → FEFO → alerta de
caducidad — y la trayectoria de ocho años en industria cárnica que hay detrás.
 
🌐 **[alcaan16.es](https://alcaan16.es)**
 
## Proyectos que muestra
 
| Proyecto | Qué es |
|---|---|
| [`zgr-goods-receipt`](https://github.com/alcaan16/zgr-goods-receipt) | RAP managed BO sobre SAP BTP — recepción de mercancía con lote y doble unidad de medida |
| [`cap-lot-traceability`](https://github.com/alcaan16/cap-lot-traceability) | CAP — trazabilidad de lote con consumo FEFO |
| [`cpi-expiry-alerts`](https://github.com/alcaan16/cpi-expiry-alerts) | Integration Suite — alertas de caducidad conectadas a la recepción |
 
## Stack
 
- [Astro 5](https://astro.build/) con `output: static` — HTML generado en build, sin framework de JS en runtime
- TypeScript
- CSS propio con variables de diseño — sin framework de utilidades
- `@astrojs/sitemap` — sitemap.xml generado en build
- `sharp` para optimización de imágenes
## Sistema de diseño — «muelle de descarga»
 
Tipografía IBM Plex (Sans Condensed para titulares, Sans para cuerpo, Mono para datos técnicos)
sobre una paleta de dos registros: papel claro para el contenido, banda oscura para el hero. Las
variantes de acento sobre fondo oscuro están verificadas contra WCAG AA — `--accent-on-dark`
7,11:1 y `--alert-on-dark` 7,97:1 sobre `--ink`. El ámbar (`--alert`) está reservado en exclusiva
para el ticket de báscula y las cifras de validación; no aparece en ningún otro punto del sitio.
 
## Estructura
 
Página única con navegación por anclas — Proyectos, Stack, Trayectoria, Otros proyectos,
Contacto — sin enrutado del lado del cliente.
 
## Desarrollo local
 
Usa pnpm — impuesto por `preinstall`, no funciona con npm ni yarn:
 
```bash
pnpm install
pnpm dev       # servidor local
pnpm build     # build estático de producción
pnpm preview   # sirve el build de producción en local
pnpm check     # comprobación de tipos de Astro
```
 
Requiere Node ≥ 18.
 
---
 
📧 angelalferezcastro@gmail.com · 💼 [linkedin.com/in/alcaan-dev](https://linkedin.com/in/alcaan-dev)
 
