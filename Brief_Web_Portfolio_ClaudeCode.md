# Brief para Claude Code — Portfolio web · Ángel Alférez Castro
*Versión 1 · 27 de agosto de 2026*
*Generado a partir de los documentos del proyecto verificados en tiempo real.*

> **Instrucciones de uso.** Este archivo es el único contexto que necesitas para construir el
> portfolio. No hay documentos adicionales. Todo lo que se afirma aquí está confirmado en los
> repositorios o en los archivos del proyecto. Si algo no está aquí, no lo inventes: omítelo o
> pregunta. Las reglas de §8 son las más críticas — léelas antes de escribir una sola línea de copy.

---

## 1. Datos de identidad y contacto

| Campo | Valor |
|---|---|
| **Nombre** | Ángel Alférez Castro |
| **Alias / handle** | alcaan16 |
| **Ubicación** | La Carlota, Córdoba |
| **Email** | angelalferezcastro@gmail.com |
| **GitHub** | github.com/alcaan16 |
| **LinkedIn** | linkedin.com/in/alcaan-dev |
| **Dominio** | alcaan16.es |
| **Teléfono** | No aparece en la web |

**Titular vigente en LinkedIn** *(190 caracteres)*:
```
SAP ABAP Developer · Consultor Técnico SAP | ABAP Cloud · S/4HANA · BTP · Integration Suite · CAP | 3× SAP Certified 2026 | 8 años industria cárnica: lote, trazabilidad, Catch Weight (MM-IM)
```

---

## 2. Narrativa central y posicionamiento

**Tesis**: los mejores developers SAP son traductores entre negocio y tecnología.

**Diferenciador**: Ángel no llegó a SAP desde otro lenguaje de programación. Llegó desde ocho años de
planta: recepción, gestión de lote, doble unidad de medida, rotación por fecha, trazabilidad de
extremo a extremo. Participó durante dos años en la implantación del ERP en la planta y formó a
40–50 operarios en su uso. Eso no se estudia en un bootcamp.

**Posicionamiento en el mercado**: perfil con conocimiento funcional de un nicho (agroalimentario /
cárnico) que casi nadie cubre desde el lado técnico. El portfolio demuestra que ese conocimiento
funcional se ha convertido en código limpio y testeable.

**Búsqueda activa**: primera posición como desarrollador SAP (ABAP Cloud / BTP) en plantilla.
Sin relocalización — remoto o presencial en Córdoba/Sevilla. Movilidad propia para desplazamientos
puntuales.

---

## 3. Trayectoria profesional

### 2007–2010 · Experiencia IT inicial
Trabajó en empresas del sector tecnológico (Dynos, Intarnet). Titulación oficial: **ASI**
(Administración de Sistemas Informáticos), I.E.S. Gran Capitán, Córdoba.
*(Nota: la titulación es ASI, el nombre del plan de estudios vigente en ese periodo — no ASIR.)*

### 2017–2025 · La Carloteña Asados · Responsable de Logística y Control de Stock
Industria cárnica — pollo, pavo, cerdo. Empresa de La Carlota (Córdoba).

**Datos verificados, todos reales y usables**:
- ~30.000 kg diarios · ≈10 camiones/día
- Registro simultáneo en unidades y kilos por palet (ej. 320 und / 650 kg)
- Equipo de 4 personas
- Gestión de lote de proveedor + lote interno de fábrica con codificación propia (fecha + secuencial: `202607310198`)
- Control de caducidades y rotación FEFO
- Regularización de inventario por recuento periódico
- ERP utilizado: **LIBRA (Edisa)**

**El dato clave**: participó ~2 años en la **implantación de LIBRA en planta** (recepción, deshuesado,
manipulado y producción), definiendo el registro de pesos y **formando a 40–50 operarios de planta**.
Es el dato que diferencia un usuario de ERP de alguien con criterio funcional real.

**Lo que NO hacía**: pedido de compra, albarán de venta, facturación. **Nada de SD.** El alcance real
es MM Inventory Management — más pequeño que MM/SD y mucho más sólido.

### 2026 · Formación SAP y certificaciones
270 horas en Experis Academy: IFCT0097 (ABAP Cloud, 205h) + IFCT0244 (SAP BTP, 65h).
Tres certificaciones SAP obtenidas entre julio y agosto de 2026.

---

## 4. Certificaciones SAP

Las tres son **SAP Certified Associate** en formato **System-Based Assessment**: no son tipo test.
Se resuelven ejecutando tareas en un sistema SAP en vivo. SAP retiró la opción múltiple del C_ABAPD
en la versión 2601 (2026) — es un dato que conviene mencionar porque un certificado anterior al 2026
asume lo contrario.

| Código | Nombre oficial completo | Año |
|---|---|---|
| **C_ABAPD** | SAP Certified Associate — Back-End Developer, ABAP Cloud | 2026 |
| **C_CPE** | SAP Certified Associate — Backend Developer, SAP Cloud Application Programming Model | 2026 |
| **C_CPI** | SAP Certified Associate — Integration Developer | 2026 |

Cada certificación tiene un proyecto publicado detrás: C_ABAPD → P1, C_CPE → P2, C_CPI → P3.

---

## 5. Stack técnico

### SAP — lo que puede afirmar con proyecto detrás

```
ABAP Cloud · RAP (RESTful Application Programming Model)
CDS view entities · OData V4 · ABAP Unit · ATC · Clean Core
SAP BTP ABAP Environment · Eclipse ADT · abapGit
SAP Cloud Application Programming Model (CAP) · Node.js
SAP Integration Suite (Cloud Integration) · iFlows · Groovy · HTTPS adapter
SAP Business Application Studio
```

### No SAP — desarrollo propio

```
Node.js · JavaScript · Express 5
React 19 · Zustand · Vite
Astro 5 · TypeScript (en PokeApi) · Tailwind CSS
MongoDB · SQLite
Docker · Git
ngrok (usado en P3 para exponer receptor local)
```

### Lo que NO está y no se puede afirmar

- No hay desarrollo de apps Fiori/UI5 propias. Las interfaces de P1 y P2 son la preview automática
  que generan el service binding OData V4 y CAP respectivamente. No es lo mismo que construir una app
  Fiori Elements o SAPUI5.
- No hay iDoc, RFC, ABAP clásico (reportes SE38, BAPIs) ni Stack de integración clásico.
- No hay despliegue en producción de ninguno de los tres proyectos SAP — el entregable es el
  repositorio, no el sistema.

---

## 6. Portfolio SAP — los tres proyectos

Los tres encadenados sobre el mismo hilo funcional: recepción → lote → FEFO → alerta de caducidad.
No son ejercicios sueltos, cuentan una historia.

---

### P1 · zgr-goods-receipt
**Repositorio**: `github.com/alcaan16/zgr-goods-receipt`
**Publicado**: 5 de agosto de 2026
**Stack**: RAP / ABAP Cloud / SAP BTP ABAP Environment
**Lenguaje GitHub**: ABAP 87,9% / ABAP CDS 12,1%
**Licencia**: MIT

#### Qué resuelve
Modela la recepción de mercancía en una planta de industria cárnica: verificación contra documento
de entrada, registro simultáneo en unidades y kilos (el escenario que SAP cubre con Catch Weight
Management), asignación de lote con fecha de caducidad, regularización de discrepancias con motivo.

#### Arquitectura
```
Entrada de mercancía  (raíz, lock master, draft)
└── Posición              (unidades y peso, esperado y recibido)
    └── Lote                  (lote interno, lote proveedor, caducidad)
```
Business object RAP managed con draft. 3 niveles de composición. CDS view entities para el modelo,
anotaciones UI en metadata extensions separadas. Service definition + service binding OData V4 UI.

#### Objetos ABAP en el repositorio
- 10 tablas (incluyendo 3 de draft)
- 10 vistas CDS: 3 composición (`ZR_`), 3 proyecciones (`ZC_`), 4 reutilización (`ZI_`)
- 3 metadata extensions + 1 entidad abstracta
- 2 behavior definitions + clase de comportamiento `ZBP_R_GRRECEIPTTP` (~1.200 líneas)
- 5 clases: 4 de lógica de negocio con tests + 1 generador de datos

#### Reglas de negocio implementadas
**Determinations (6)**: número de entrada, número de posición, estado inicial, código de lote interno,
fecha de caducidad, desviación y totales de cabecera.

**Validations (7)**: proveedor activo, material existente, cantidades y peso obligatorio en doble
unidad, plausibilidad del peso medio por pieza, vida útil restante mínima, lote de proveedor
obligatorio, cuadre de lotes con la posición.

**Acciones (4)**: `acceptDeviation`, `postReceipt`, `blockBatch`, `releaseBatch` — todas con feature
control por instancia.

#### Las dos validaciones diferenciales (las que salen de haber estado delante de la báscula)

**Plausibilidad del peso medio por pieza**: si entran 500 pollos y la báscula marca 6.500 kg, eso son
13 kg por pieza. No es una desviación: es un error de báscula o de conteo. Registrarlo contamina el
stock. Ninguna aplicación genérica lo detecta.

**Vida útil restante mínima**: no basta con que el producto no esté caducado. Se pacta con el
proveedor un porcentaje mínimo de vida útil en la entrega: un producto de 8 días que llega con 2 no
sirve, porque para cuando pase por producción y llegue al cliente ya no tiene recorrido.

**Decisión de diseño en `acceptDeviation`**: no sobrescribe el peso recibido. Sobrescribirlo borraría
la evidencia de la diferencia y con ella la base de la reclamación al proveedor. Registra que alguien
con criterio aceptó la discrepancia y por qué motivo. El feature control acompaña: la entrada no se
puede registrar mientras haya posiciones con desviación sin resolver.

#### Calidad
- **32 tests de ABAP Unit** sobre las 4 clases de lógica de negocio (cálculo puro: sin base de datos,
  sin business object, sin framework).
- Las 4 clases sobrevivieron sin una línea de cambio a 2 refactorizaciones del modelo de datos
  (cambio de tipos de unidad y cambio de autorizaciones). Verificable en el historial de commits.
- **ATC sin errores ni avisos.** 41 informativos, todos justificados en `docs/decisiones-tecnicas.md`.

#### Lo que NO está implementado (documentado explícitamente en el README)
- Sin app Fiori propia — se usa la preview del service binding
- Sin integración con S/4HANA — maestros de material y proveedor son tablas propias simplificadas
- Sin control de autorizaciones (DCL) — los manejadores conceden todo explícitamente
- Los estados se muestran como código numérico (1, 2, 3) en lugar de texto
- Los mensajes de validación no son traducibles y se truncan en ~50 caracteres
- Numeración de entradas y lotes no segura frente a concurrencia (en producción iría contra número range)
- Sin conversión entre unidades de medida
- Nota: los commits salen a nombre de `TRAIN-07 p2w` (usuario del tenant de curso) — no hay forma de
  cambiarlo desde abapGit. No refleja trabajo de otro desarrollador.

#### Capturas disponibles (9 imágenes PNG en `docs/img/`)
URL base raw: `https://raw.githubusercontent.com/alcaan16/zgr-goods-receipt/main/docs/img/`

| Archivo | Qué muestra |
|---|---|
| `01-arbol-tres-niveles.png` | Preview del service binding: árbol completo de 3 niveles |
| `02-validacion-peso-medio.png` | Mensaje de error — peso medio por pieza inverosímil |
| `03-validacion-vida-util.png` | Mensaje de error — vida útil restante insuficiente |
| `04-validacion-lotes.png` | Mensaje de error — cuadre de lotes con la posición |
| `05-accion-deshabilitada.png` | Botón "Registrar entrada" deshabilitado (desviación pendiente) |
| `06-aceptar-desviacion.png` | Diálogo de aceptación de desviación con selección de motivo |
| `07-accion-habilitada.png` | Botón habilitado tras resolver la desviación |
| `08-abap-unit.png` | Resultado de los 32 tests de ABAP Unit — todos correctos |
| `09-atc.png` | Resultado del ATC — 0 errores, 0 avisos |

---

### P2 · cap-lot-traceability
**Repositorio**: `github.com/alcaan16/cap-lot-traceability`
**Publicado**: 20 de agosto de 2026
**Stack**: SAP CAP / Node.js / JavaScript (ES6+) / SQLite
**Nota técnica**: el archivo README está en minúscula (`readme.md`, no `README.md`).

#### Qué resuelve
Modela la trazabilidad de lote en un proceso de producción: desde el lote recibido de proveedor hasta
el lote interno de producto terminado. Cuando la producción diaria necesita más de un lote, el sistema
selecciona automáticamente por FEFO (fecha de caducidad más próxima primero) y deja el rastro completo
de qué lotes de proveedor componen cada lote interno.

#### Arquitectura
```
db/schema.cds                → modelo de datos (8 entidades)
srv/logistica-service.cds    → servicio: proyecciones + 2 operaciones custom
srv/logistica-service.js     → lógica de negocio: handlers y consumo FEFO
srv/logistica-service-ui.cds → anotaciones Fiori (Productos, Pedidos)
```

El modelo tiene dos bloques:
- **Catálogo y pedidos** (`Categorias`, `Productos`, `Proveedores`, `Pedidos`, `ItemsPedido`) — apoyo
  técnico de CAP, no forma parte de la trazabilidad.
- **Trazabilidad de lote** (`LotesProveedor`, `LotesInternos`, `ConsumosLote`) — el caso real.

#### Lo que demuestra
- **Consumo FEFO**: dada una cantidad a producir, selecciona los lotes de proveedor disponibles por
  fecha de caducidad más próxima primero, reparte entre tantos lotes como haga falta, y deja el rastro
  en `ConsumosLote`.
- **Atomicidad**: si no hay stock suficiente, rechaza antes de escribir nada — sin lotes a medias.
- **Criterio funcional en el modelo**: de los 4 productos del catálogo, solo el aceite de oliva (el
  único perecedero) recibe lotes con caducidad. Un palet no caduca — el modelo no se la fuerza.
- **Verificado con `curl`**, no solo revisado en el código. Los comandos exactos están en el README.

#### Ejemplo verificado (del README)
Producir 100 unidades de Aceite de Oliva 5L con 3 lotes disponibles de distinta caducidad:

| Lote | Caducidad | Disponible antes | Disponible después |
|---|---|---|---|
| LOTE-2026-001 | 2027-06-15 | 80 | 0 (agotado) |
| LOTE-2026-002 | 2027-09-01 | 65 | 45 |
| LOTE-2026-003 | 2028-01-15 | 50 | 50 (sin tocar) |

80 + 20 = 100. El orden respeta FEFO.

#### Lo que NO está implementado (documentado en el README)
- **Sin desplegar.** 100% local (`cds watch` + SQLite). Nunca Cloud Foundry, ni XSUAA, ni HANA Cloud.
  Decisión tomada desde el inicio, no limitación por tiempo.
- Sin persistencia real entre reinicios (SQLite en memoria).
- Sin autenticación.
- Sin UI Fiori propia para las entidades de lote.
- `Pedidos`/`ItemsPedido` no está conectado a los lotes — es un ejercicio de CAP independiente.

#### Assets gráficos disponibles (1 SVG en `docs/`)
URL: `https://raw.githubusercontent.com/alcaan16/cap-lot-traceability/main/docs/modelo-datos-trazabilidad.svg`

Muestra el modelo de datos completo de la trazabilidad. Es SVG, no PNG — renderizable directamente
en `<img>` o inline.

---

### P3 · cpi-expiry-alerts
**Repositorio**: `github.com/alcaan16/cpi-expiry-alerts`
**Publicado**: 23 de agosto de 2026
**Stack**: SAP Integration Suite (Cloud Integration) + Node.js/Express (receptor)

#### Qué resuelve
Conecta P1 (recepción de mercancía con lote en ABAP Cloud) con una aplicación externa de alertas de
vida útil. Toma el dato de lote y caducidad que la recepción ya produce y lo entrega a un sistema que
clasifica cada lote (caducado / próximo a caducar / ok).

El caso de negocio original previsto era "sincronización de maestro de materiales" — el ejercicio
estándar de cualquier curso de Integration Suite. Se descartó porque P1 no gestiona maestros de
material: gestiona entradas de mercancía con lote y caducidad. Este caso mantiene el mismo hilo
funcional corriendo por los tres proyectos.

#### Arquitectura del iFlow
```
Start Timer → Content Modifier (payload de muestra) → Groovy: filtrar borradores
→ Groovy: mapear formato receptor → Request Reply (HTTPS) → receptor Node/Express
[Exception Subprocess con Groovy: capturar fallo]
```

**El atajo P1 → P3**: P1 dejó sin crear el service binding de API (`ZAPI_GR_RECEIPT_O4`, OData V4
Web API). Ese binding se construyó al arrancar P3, sobre la service definition ya existente de P1, sin
tocar nada más. Confirma que una service definition admite múltiples bindings.

**Scripts Groovy** (en `scripts/`):
- `01-filtrar-borradores.groovy`: descarta entidades en estado borrador (`IsActiveEntity: false`)
- `02-mapea-formato-receptor.groovy`: recorre Receipt → Item → Batch y produce un registro plano por lote
- `03-capturar-fallo.groovy`: Exception Subprocess — captura cualquier fallo no controlado del flujo principal

#### Decisiones de diseño documentadas
**El origen es un payload de muestra, no sondeo en vivo**: exponer la API vía OAuth2 requiere una
Communication Arrangement (tarea de administrador, no de desarrollador). El tenant de curso es
compartido y formativo — sin ese nivel de acceso. En lugar de un origen inventado, el Content Modifier
usa una respuesta real capturada de la API (con `$expand=_Item($expand=_Batch)`). En un sistema con
permisos administrativos, sustituir este paso por un OData Adapter no afecta al resto del flujo.

**La entrega sí es en vivo**: el receptor corre en local y se expone a Internet con un túnel de `ngrok`.
La llamada HTTPS del iFlow sale de la nube de Integration Suite, cruza Internet, y llega al proceso
local. No todo está simulado — solo la parte con un bloqueo de permisos genuino, señalado con precisión.

#### Lo que demuestra, en orden de valor
1. **Exception Subprocess verificado con un fallo real**: deteniendo el receptor a propósito, la
   llamada HTTP falló y la ejecución saltó a la rama de captura. El mensaje terminó como `Completed`,
   no como `Failed`. Es la diferencia entre un flujo que funciona en el camino feliz y uno que se
   sostiene cuando algo falla.
2. **Criterio de ingeniería documentado**: las limitaciones (origen de datos, permisos) están
   explicadas con precisión — cuál es el bloqueo real y cómo se resolvió sin fingir.
3. El repositorio tiene **código real** (`receiver/` en Node/Express + 3 scripts Groovy), no solo
   capturas de pantalla.

#### Capturas disponibles (5 imágenes PNG en `docs/`)
URL base raw: `https://raw.githubusercontent.com/alcaan16/cpi-expiry-alerts/main/docs/`

| Archivo | Qué muestra |
|---|---|
| `01-iflow-completo.png` | Vista completa del iFlow: flujo principal + Exception Subprocess |
| `02-run-steps-exitoso.png` | Run Steps de una ejecución sin errores — los 5 pasos del flujo |
| `03-receptor-terminal.png` | Terminal del receptor: los 3 lotes de la muestra con su clasificación |
| `04a-fallo-capturado.png` | Run Steps con el fallo HTTP y la Exception Subprocess ejecutándose |
| `04b-mensaje-completed.png` | El mensaje marcado como Completed pese al fallo interno |

---

## 7. Otros repositorios (base técnica previa a SAP)

Su función narrativa en el portfolio: responden a "¿pero sabe programar?" con código propio.
Son el sustento de la frase "base técnica directa del modelo CAP".

### PokeApi
**Repo**: `github.com/alcaan16/PokeApi`
**Stack**: Astro 5 · TypeScript · Tailwind CSS · pnpm
**Estado**: en producción en `alcaan16.es` (hoy ocupa el dominio principal)
**Función**: sitio estático generado en build sobre una API pública, con rutas por entidad.

### mundoacuatico
**Repo**: `github.com/alcaan16/mundoacuatico`
**Stack**: React 19 · Zustand · React Router 7 · Vite
**Función**: front de tienda con estado global, hooks propios y rutas protegidas. Consume canister-api.

### canister-api
**Repo**: `github.com/alcaan16/canister-api`
**Stack**: Node.js · Express 5
**Función**: API REST con separación por capas (rutas, controladores, servicios) y CORS.
La misma idea de modelo+servicio que después aparece en CAP.

---

## 8. Reglas de redacción — CRÍTICAS

Estas reglas son no negociables. Nacen de haber tenido que corregir versiones anteriores de
materiales por infringirlas. Si el copy del sitio viola alguna de estas reglas, hay que reescribirlo.

### Lo prohibido

1. **La palabra "equivalente"** en cualquier contexto que relacione la experiencia de planta con SAP.
   - ❌ "equivalente funcional al Catch Weight Management de SAP"
   - ✅ "el escenario que SAP cubre con Catch Weight Management"

2. **Afirmar haber configurado módulos SAP**. Se describe el hecho operativo y se nombra el concepto:
   - ❌ "configuré gestión de lotes en SAP MM"
   - ✅ "gestioné lotes de proveedor y lote interno de fábrica — el escenario que SAP modela con
     Batch Management"

3. **Cualquier mención a SD** (Sales & Distribution). El alcance real es MM Inventory Management.

4. **Afirmar haber construido una app Fiori Elements o SAPUI5 propia**. Las interfaces de P1 y P2
   son la preview automática generada por el service binding / CAP. Es legítimo como demo, pero no
   es una app Fiori desarrollada.

5. **Inflación de cifras**: no usar porcentajes de cumplimiento ni SLAs sin sistema de medición
   citado. Sí usar: volúmenes (30.000 kg, 10 camiones, 40-50 operarios) — verificables e
   indiscutibles.

6. **"Lideré" la implantación del ERP**. El alcance propio es "participé": definición del registro
   de pesos en recepción y formación a operarios. No era el responsable del proyecto completo.

### Lo que funciona y debe aparecer

- **"el escenario que SAP cubre con Catch Weight"** — frase contrastada, las dos lecturas son ciertas.
- **"rotación por fecha (criterio FEFO)"** — con paréntesis: en SAP es una estrategia configurada;
  en la planta era el criterio operativo. Ambas lecturas son válidas.
- Las **cifras reales**: 30.000 kg/día, ≈10 camiones/día, 40–50 operarios formados, 8 años.
- **Lo que NO está implementado**, dicho sin disculpas. Es deliberado: demuestra criterio de
  ingeniería, no debilidad.
- **"Cuando un requerimiento habla de entradas de mercancía, de trazabilidad de lote o de diferencias
  de inventario, no necesito que me lo traduzcan."** — frase contrastada del "Acerca de" de LinkedIn.

---

## 9. Arquitectura y diseño de la web

### Decisiones técnicas

- **Framework**: Astro 5 (mismo stack que `PokeApi`, ya probado y funcionando con este dominio)
- **Rendering**: estático (`output: 'static'`) — HTML puro generado en build
- **Sin frameworks JS en runtime** — Astro genera HTML. Sin React, sin hydration innecesaria.
- **CSS propio** — sin Tailwind en el portfolio. Un sistema de diseño manual es más limpio y más
  diferenciador para una página de presentación.
- **Dominio**: `alcaan16.es` — DNS apunta a Vercel (gestionado en DonDominio).
- **Repositorio**: repo nuevo en GitHub, creado desde cero para este proyecto. https://github.com/alcaan16/portfolio-alcaan16.git .No es el repo de la PokeApi.
- **Despliegue**: Vercel conectado al nuevo repositorio de GitHub. Vercel detecta Astro
  automáticamente y configura el build sin archivo de configuración adicional. Cada push a la
  rama principal dispara el build y el deploy. No hace falta `vercel.json` ni GitHub Actions.
- **Build settings que Vercel aplica automáticamente para Astro**:
  - Package manager: **pnpm** — Vercel lo detecta por el `pnpm-lock.yaml`. No eliminar ese
    archivo del repo ni añadirlo al `.gitignore`.
  - Build command: `pnpm run build`
  - Output directory: `dist`
- El `package.json` debe tener el script `build` definido: `"build": "astro build"`.
- **La PokeApi** pasa a un proyecto separado en Vercel con su propia URL automática de Vercel
  (ej. `pokeapi-alcaan16.vercel.app`). Sin dominio personalizado por ahora.
- **Netlify**: no se usa en ninguno de los dos proyectos.
- **Una sola página** con anclas de navegación. Sin sub-páginas.

### Secciones y orden

1. **Topbar sticky** — nombre + enlaces de sección (izq / dcha). Desaparece en móvil.
2. **Hero** — titular, subtítulo funcional, CTAs. El ticket de báscula como elemento visual.
3. **P1** — el más completo, con las 9 capturas. Métricas, reglas de negocio, apartado de límites.
4. **P2** — más compacto. El ejemplo de FEFO verificado con curl. El SVG del modelo de datos.
5. **P3** — la dupla de capturas del fallo capturado es el activo principal.
6. **Stack y certificaciones** — chips de tecnología + 3 tarjetas de certificación.
7. **Trayectoria** — 4 hitos en línea de tiempo: IT 2007-2010 / La Carloteña 2017-2025 con ERP /
   Certificaciones 2026 / Ahora (portfolio publicado).
8. **Otros proyectos** — mundoacuatico, canister-api, PokeApi. 3 tarjetas.
9. **Contacto y pie** — email, LinkedIn, GitHub.

### Sistema de diseño — "muelle de descarga"

La identidad visual parte del mundo industrial de donde vienen los proyectos: acero galvanizado,
tinta fría, el ámbar de un display de báscula.

**Paleta** (6 valores):
```css
--ink:         #0f1a21   /* negro azulado casi puro — textos */
--ink-soft:    #2a3b46   /* variante suave para párrafos */
--muted:       #5c6e79   /* gris azulado — etiquetas, pies */
--paper:       #e9eef0   /* fondo general — blanco frío */
--paper-deep:  #dde5e8   /* fondo de secciones alternas */
--card:        #ffffff   /* fondo de tarjetas */
--rule:        #c6d1d7   /* líneas divisoras */
--accent:      #14606f   /* teal industrial — eyebrows, chips activos */
--accent-deep: #0b424d   /* teal oscuro — enlaces, hover */
--alert:       #8a5300   /* ámbar — ticket de báscula, cifras de validación */
--alert-bg:    #fdf5e7   /* fondo ámbar suave */
```

**Tipografía** (IBM Plex — familia diseñada para software de empresa):
```
Display / titulares: IBM Plex Sans Condensed, weight 600–700
Cuerpo:              IBM Plex Sans, weight 400–500
Código / datos /
etiquetas mono:      IBM Plex Mono, weight 400–500–600
```

Google Fonts: `family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans+Condensed:wght@400;600;700&family=IBM+Plex+Sans:wght@400;500;600`

**Elemento firma — el ticket de báscula**: en el hero, junto al titular. Simula el ticket de
impresora térmica de una báscula de muelle. Muestra el ejemplo real de la validación de peso medio
por pieza (500 pollos / 6.500 kg = 13 kg/pieza → rechazado). Fondo blanco, borde fino, monoespaciado,
filas con etiqueta/valor, mensaje de alerta en ámbar. Es el único elemento con animación (impresión
escalonada de filas al cargar). No es decoración: es la demostración de que las reglas de negocio
salen de haber estado ahí.

**Cero border-radius** en el proyecto SAP principal — las tarjetas son rectas, industriales.
Las tarjetas de "otros proyectos" y certficaciones pueden tener un borde mínimo (2px) si ayuda a
diferenciarlos.

**Secciones alternas**: `--paper` y `--paper-deep` para crear ritmo visual sin usar colores distintos.
Una sección oscura (`--ink` como fondo) para el apartado de límites/qué no está implementado: el
contraste refuerza que ese apartado es deliberado, no una disculpa.

**Sin emojis en los títulos de sección** — el estilo es industrial, no de blog.

**Botones**: `font-family: var(--font-mono)`, mayúsculas, sin border-radius, borde de 1px.
Dos variantes: relleno oscuro (CTA principal) y ghost (secundario).

**Capturas de proyecto**: borde de 1px `var(--rule)` + caption en mono. No redondear esquinas.

---

## 10. Sobre actualizaciones futuras

Este archivo es la versión 1. Cuando haya novedades relevantes (nueva certificación, nuevo proyecto,
cambios en el posicionamiento), se creará un archivo de delta — `Brief_Web_Portfolio_ClaudeCode_v2.md`
u otro nombre claro — que describa solo lo que cambia respecto a esta versión, sin repetir lo que
sigue igual.
