# Delta de diseño v2 — Portfolio web · Ángel Alférez Castro
*27 de agosto de 2026*

> **Cómo usar este archivo.** Es un **delta** sobre `Brief_Web_Portfolio_ClaudeCode.md` (v1).
> Todo lo que no se menciona aquí sigue igual: contenido, textos, estructura de secciones, reglas
> de redacción (§8 del v1, que siguen siendo no negociables) y despliegue.
> Lo que cambia es exclusivamente el sistema visual del hero y los tokens de color.
>
> **Contexto**: se construyeron dos versiones. Una oscura con acento ámbar y otra clara con acento
> teal. Ninguna de las dos es la correcta, por razones distintas y concretas que se explican abajo.
> Esta v2 toma lo que funcionaba de cada una.

---

## 1. Qué falló en cada versión (para no repetirlo)

### Versión oscura + ámbar
El ámbar se repartió por eyebrows, botones, enlaces de proyecto y etiquetas de certificación.
**Consecuencia**: la fila de alerta del ticket dejó de destacar. Estaba en el mismo color que ya
había en otros seis sitios de la pantalla. El ticket es el elemento narrativo central del hero —
la prueba de que las reglas de negocio salen de haber estado en el muelle— y perdió su condición
de excepción visual.

### Versión clara + teal
Casi todo el peso visual cayó en dos elementos (titular y botón primario). El resto quedó en una
banda tonal muy estrecha de gris sobre gris:
- El eyebrow teal no aguantaba junto a la contundencia del titular
- El botón secundario con borde de 1px casi desaparecía
- La cita en bloque no tenía presencia de cita
- **El ticket no despegaba del papel**: fondo de página `#e9eef0` contra tarjeta blanca es muy poco
  salto tonal, y el v1 solo especificaba *"fondo blanco, borde fino"* — no había sombra definida.
  Es un hueco del brief v1, no un fallo de ejecución.

---

## 2. Decisión: hero oscuro, resto del sitio en papel

**El hero pasa a banda oscura (`--ink` de fondo). El resto del sitio se mantiene en papel claro.**

Razones:
- Da al ticket blanco el contraste dramático que tenía en la versión ámbar
- Mantiene el resto del sitio en tono papel, que es donde el portfolio se diferencia del centenar
  de portfolios oscuros que un reclutador ve en la misma semana
- El sistema v1 ya reservaba `--ink` como fondo para la sección de "lo que no está implementado".
  Aplicar la misma lógica al hero es coherente, no una excepción.

Resultado: dos bandas oscuras en el sitio (hero al principio, límites en el medio) y el resto en
papel. Ritmo, no monotonía.

---

## 3. Corrección crítica de tokens: contraste sobre fondo oscuro

**Los tokens de acento del v1 NO son usables sobre `--ink`.** Verificado con cálculo WCAG:

| Color | Uso previsto | Ratio sobre `#0f1a21` | Veredicto |
|---|---|---|---|
| `#14606f` (`--accent` v1) | eyebrow, chips | **2,46 : 1** | ❌ Insuficiente |
| `#8a5300` (`--alert` v1) | alerta del ticket | **2,79 : 1** | ❌ Insuficiente |

El mínimo WCAG AA para texto normal es 4,5 : 1. Ambos fallan claramente.

### Tokens nuevos a añadir

```css
:root {
  /* ...tokens del v1 se mantienen tal cual para superficies claras... */

  /* Variantes para superficies oscuras — NUEVOS */
  --accent-on-dark: #5fb0c0;   /* teal claro · 7,11:1 sobre --ink · AA */
  --alert-on-dark:  #e0a340;   /* ámbar claro · 7,97:1 sobre --ink · AA */
}
```

**Regla de uso**: sobre fondo `--paper` / `--paper-deep` / `--card` se usan `--accent` y `--alert`
del v1. Sobre fondo `--ink` se usan `--accent-on-dark` y `--alert-on-dark`. Nunca al revés.

---

## 4. Reparto de color en el hero — un solo acento

Este es el punto más importante del documento.

| Elemento | Tratamiento | Color |
|---|---|---|
| Fondo del hero | Banda oscura | `--ink` `#0f1a21` |
| Titular | Sólido, máximo peso | `--paper` `#e9eef0` |
| Eyebrow | Mono, mayúsculas, tracking amplio | `--accent-on-dark` `#5fb0c0` |
| Párrafo de entrada | Texto secundario legible | `#b6c6ce` |
| Botón primario "VER PROYECTOS" | **Relleno sólido papel, texto oscuro** | fondo `--paper`, texto `--ink` |
| Botón secundario "CONTACTO" | Ghost, **borde 2px** | borde y texto `--accent-on-dark` |
| Cita en bloque | Barra lateral 3px + texto | barra `--accent-on-dark`, texto `--paper` |
| Ticket — cuerpo | Tarjeta blanca | `--card` `#ffffff` |
| Ticket — fila de alerta | **Único elemento ámbar de todo el hero** | `--alert` sobre `--alert-bg` |
| Pie del hero (certs, ubicación) | Mono pequeño, discreto | `#8ba0aa` |

**El botón primario va en papel sólido, no en un color de acento.** Da 15,09:1 de contraste —
el elemento más contundente de la pantalla— y evita introducir un tercer color. La referencia que
vimos con botón azul brillante + badges ámbar tenía dos acentos saturados compitiendo, y el ojo no
sabía cuál era la marca. Aquí solo hay un acento (teal) y una excepción (ámbar en el ticket).

**El ámbar aparece exactamente una vez en el hero: en la fila de validación rechazada del ticket.**
Esa es toda su razón de existir. Si aparece en cualquier otro sitio del hero, el efecto se pierde
y volvemos al problema de la primera versión.

---

## 5. El ticket — especificación que faltaba en el v1

El ticket es el elemento firma. El v1 se quedó corto: decía *"fondo blanco, borde fino"* y nada más.
Concreción:

```css
.ticket {
  background: var(--card);
  border: 1px solid rgba(255, 255, 255, 0.14);  /* sobre fondo oscuro */
  box-shadow:
    0 2px 4px rgba(0, 0, 0, 0.30),
    0 12px 28px -8px rgba(0, 0, 0, 0.45),
    0 32px 64px -24px rgba(0, 0, 0, 0.55);
  /* sin border-radius — el ticket es rectangular, sale de una impresora térmica */
}
```

Sombra en tres capas: una de contacto muy cercana, una media y una amplia difusa. Es lo que hace
que un objeto claro parezca posado sobre una superficie oscura en lugar de pegado encima.

**Se mantiene del v1 sin cambios**: la estructura de filas etiqueta/valor, el separador punteado
antes de la fila de peso medio, el pie con `REGLA IMPLEMENTADA EN P1 · RAP / ABAP CLOUD · 32 TESTS
ABAP UNIT`, la animación de impresión escalonada al cargar, y el caption gris debajo.

---

## 6. Encuadre del hero (recomendado)

De la referencia revisada, esto sí merece copiarse: **líneas verticales finas a izquierda y derecha
que enmarcan el bloque de contenido del hero**, como el panel de una consola. En las dos versiones
construidas el contenido flotaba en un fondo abierto y le faltaba estructura.

```css
/* Líneas de encuadre — 1px, muy tenues */
border-left: 1px solid rgba(95, 176, 192, 0.22);
border-right: 1px solid rgba(95, 176, 192, 0.22);
```

Solo en el hero, no en el resto de secciones. En móvil se eliminan.

**Textura de rejilla de fondo — opcional.** Si se implementa, debe leerse como **plano técnico o
papel milimetrado**, no como circuito electrónico: retícula cuadrada regular, 1px, opacidad máxima
0,04 sobre el fondo oscuro. Si hay cualquier duda de que compita con el texto, se omite. No es
imprescindible.

---

## 7. Lo que NO se debe copiar de la referencia revisada

Se revisó una referencia de estilo "SAP dev environment". Estas partes quedan **explícitamente
descartadas**, y no por gusto estético sino por conflicto con el posicionamiento:

- **Registro de terminal / hacker**: nada de `> STATUS: SYSTEM_ONLINE`, iconos de terminal, iconos
  de engranaje, ni nombres de sección tipo `SAP_DEV_ENVIRONMENT_V1.0`. El diferenciador de Ángel es
  que **no** llegó desde otro lenguaje de programación: llegó desde ocho años de planta. El vestuario
  de "vivo en la consola" empuja hacia el perfil contrario al que el sitio defiende.
- **Dos acentos saturados compitiendo** (azul brillante + ámbar). Un solo acento, ya explicado en §4.
- **Subrayado decorativo** bajo el subtítulo del hero. El titular ya tiene peso suficiente.
- **Nombre propio como titular del hero.** El titular sigue siendo la tesis —
  *"Los mejores developers SAP son traductores entre negocio y tecnología"* — porque es lo que
  diferencia. El nombre ya está en la topbar.

---

## 8. Ajustes menores fuera del hero

Estos aplican al resto del sitio, que sigue en papel claro:

- **Eyebrow de sección**: subir un punto el tamaño (de `0,72rem` a `0,78rem`) y mantener
  `--accent` `#14606f`, que sobre papel sí tiene contraste sobrado.
- **Botones ghost sobre papel**: borde a **2px** en lugar de 1px, y usar `--accent` en vez de
  `--rule` para el borde. En la versión clara desaparecían.
- **Citas en bloque sobre papel**: barra lateral a 3px en `--accent`, y texto en `--ink` en lugar de
  gris. Debe leerse como cita, no como párrafo con una rayita.
- **Tarjetas sobre papel**: añadir una sombra sutil para separarlas del fondo —
  `box-shadow: 0 1px 2px rgba(15,26,33,0.04), 0 8px 24px -12px rgba(15,26,33,0.12);`

---

## 9. Checklist de verificación antes de dar por buena la v2

- [ ] El ámbar aparece **una sola vez** en el hero: la fila de alerta del ticket
- [ ] Ningún texto sobre `--ink` usa `--accent` (`#14606f`) ni `--alert` (`#8a5300`)
- [ ] El ticket tiene sombra en tres capas y se despega visiblemente del fondo
- [ ] El botón primario es papel sólido con texto oscuro, no un color de acento
- [ ] El botón secundario tiene borde de 2px, no 1px
- [ ] El titular del hero es la tesis, no el nombre propio
- [ ] Cero border-radius en hero, ticket y tarjetas de proyecto
- [ ] Sin emojis, sin iconos de terminal, sin lenguaje de consola
- [ ] Las reglas de redacción de §8 del brief v1 siguen cumpliéndose íntegramente
