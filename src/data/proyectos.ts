// Contenido de los tres proyectos SAP. Fuente única: Brief §6.
// El copy de este archivo cumple las reglas de redacción del Brief §8.
import type { ImageMetadata } from 'astro';

import p1Arbol from '../assets/img/p1/01-arbol-tres-niveles.png';
import p1PesoMedio from '../assets/img/p1/02-validacion-peso-medio.png';
import p1VidaUtil from '../assets/img/p1/03-validacion-vida-util.png';
import p1Lotes from '../assets/img/p1/04-validacion-lotes.png';
import p1AccionOff from '../assets/img/p1/05-accion-deshabilitada.png';
import p1Desviacion from '../assets/img/p1/06-aceptar-desviacion.png';
import p1AccionOn from '../assets/img/p1/07-accion-habilitada.png';
import p1AbapUnit from '../assets/img/p1/08-abap-unit.png';
import p1Atc from '../assets/img/p1/09-atc.png';

import p3RunStepsOk from '../assets/img/p3/02-run-steps-exitoso.png';
import p3Receptor from '../assets/img/p3/03-receptor-terminal.png';
import p3FalloCapturado from '../assets/img/p3/04a-fallo-capturado.png';
import p3Completed from '../assets/img/p3/04b-mensaje-completed.png';

export interface Captura {
  src: ImageMetadata;
  alt: string;
  caption: string;
  ancha?: boolean;
}

export const p1 = {
  id: 'p1',
  nombre: 'zgr-goods-receipt',
  tagline: 'Recepción de mercancía con lote y doble unidad de medida',
  repoUrl: 'https://github.com/alcaan16/zgr-goods-receipt',
  stackLinea: 'RAP · ABAP Cloud · SAP BTP ABAP Environment',
  publicado: '05 · 08 · 2026',
  lenguajes: 'ABAP 87,9 % · ABAP CDS 12,1 %',
  licencia: 'MIT',
  queResuelve:
    'Modela la recepción de mercancía en una planta de industria cárnica: verificación contra documento de entrada, registro simultáneo en unidades y kilos —el escenario que SAP cubre con Catch Weight Management—, asignación de lote con fecha de caducidad y regularización de discrepancias con motivo.',
  arquitectura: `Entrada de mercancía  (raíz, lock master, draft)
└── Posición              (unidades y peso, esperado y recibido)
    └── Lote                  (lote interno, lote proveedor, caducidad)`,
  arquitecturaNota:
    'Business object RAP managed con draft y 3 niveles de composición. CDS view entities para el modelo, anotaciones UI en metadata extensions separadas. Service definition + service binding OData V4 UI.',
  metricas: [
    { valor: '32', label: 'tests ABAP Unit' },
    { valor: '0 / 0', label: 'errores / avisos ATC' },
    { valor: '6 + 7 + 4', label: 'determinations + validations + acciones' },
    { valor: '10', label: 'vistas CDS' },
    { valor: '~1.200', label: 'líneas de clase de comportamiento' },
  ],
  determinations:
    'Número de entrada, número de posición, estado inicial, código de lote interno, fecha de caducidad, desviación y totales de cabecera.',
  validations:
    'Proveedor activo, material existente, cantidades y peso obligatorio en doble unidad, plausibilidad del peso medio por pieza, vida útil restante mínima, lote de proveedor obligatorio, cuadre de lotes con la posición.',
  acciones:
    'acceptDeviation · postReceipt · blockBatch · releaseBatch — todas con feature control por instancia.',
  validacionesDiferenciales: [
    {
      titulo: 'Plausibilidad del peso medio por pieza',
      texto:
        'Si entran 500 pollos y la báscula marca 6.500 kg, eso son 13 kg por pieza. No es una desviación: es un error de báscula o de conteo, y registrarlo contamina el stock. Ninguna aplicación genérica lo detecta.',
    },
    {
      titulo: 'Vida útil restante mínima',
      texto:
        'No basta con que el producto no esté caducado. Se pacta con el proveedor un porcentaje mínimo de vida útil en la entrega: un producto de 8 días que llega con 2 no sirve, porque para cuando pase por producción y llegue al cliente ya no tiene recorrido.',
    },
  ],
  decisionDiseno:
    'acceptDeviation no sobrescribe el peso recibido: sobrescribirlo borraría la evidencia de la diferencia y con ella la base de la reclamación al proveedor. Registra que alguien con criterio aceptó la discrepancia y por qué motivo. El feature control acompaña: la entrada no se puede registrar mientras haya posiciones con desviación sin resolver.',
  calidad:
    'Los 32 tests cubren las 4 clases de lógica de negocio — cálculo puro: sin base de datos, sin business object, sin framework. Las 4 clases sobrevivieron sin una línea de cambio a 2 refactorizaciones del modelo de datos, verificable en el historial de commits. ATC sin errores ni avisos; 41 informativos, todos justificados en docs/decisiones-tecnicas.md.',
  capturas: [
    {
      src: p1Arbol,
      alt: 'Preview del service binding: árbol completo de 3 niveles',
      caption: '01 · Preview del service binding — árbol completo de 3 niveles',
      ancha: true,
    },
    {
      src: p1PesoMedio,
      alt: 'Mensaje de error — peso medio por pieza inverosímil',
      caption: '02 · Validación: peso medio por pieza inverosímil',
      ancha: true,
    },
    {
      src: p1VidaUtil,
      alt: 'Mensaje de error — vida útil restante insuficiente',
      caption: '03 · Validación: vida útil restante insuficiente',
    },
    {
      src: p1Lotes,
      alt: 'Mensaje de error — cuadre de lotes con la posición',
      caption: '04 · Validación: cuadre de lotes con la posición',
    },
    {
      src: p1AccionOff,
      alt: 'Botón "Registrar entrada" deshabilitado por desviación pendiente',
      caption: '05 · Acción deshabilitada — desviación pendiente de resolver',
      ancha: true,
    },
    {
      src: p1Desviacion,
      alt: 'Diálogo de aceptación de desviación con selección de motivo',
      caption: '06 · Aceptar desviación — selección de motivo',
    },
    {
      src: p1AccionOn,
      alt: 'Botón "Registrar entrada" habilitado tras resolver la desviación',
      caption: '07 · Acción habilitada tras resolver la desviación',
      ancha: true,
    },
    {
      src: p1AbapUnit,
      alt: 'Resultado de los 32 tests de ABAP Unit — todos correctos',
      caption: '08 · ABAP Unit — 32 tests, todos correctos',
      ancha: true,
    },
    {
      src: p1Atc,
      alt: 'Resultado del ATC — 0 errores, 0 avisos',
      caption: '09 · ATC — 0 errores, 0 avisos',
    },
  ] satisfies Captura[],
  limites: [
    'Sin app Fiori propia — se usa la preview del service binding.',
    'Sin integración con S/4HANA — maestros de material y proveedor son tablas propias simplificadas.',
    'Sin control de autorizaciones (DCL) — los manejadores conceden todo explícitamente.',
    'Los estados se muestran como código numérico (1, 2, 3) en lugar de texto.',
    'Los mensajes de validación no son traducibles y se truncan en ~50 caracteres.',
    'Numeración de entradas y lotes no segura frente a concurrencia — en producción iría contra number range.',
    'Sin conversión entre unidades de medida.',
  ],
  limitesNota:
    'Los commits salen a nombre de TRAIN-07 p2w, el usuario del tenant de curso — abapGit no permite cambiarlo. No refleja trabajo de otro desarrollador.',
};

export const p2 = {
  id: 'p2',
  nombre: 'cap-lot-traceability',
  tagline: 'Trazabilidad de lote con consumo FEFO',
  repoUrl: 'https://github.com/alcaan16/cap-lot-traceability',
  stackLinea: 'SAP CAP · Node.js · JavaScript (ES6+) · SQLite',
  publicado: '20 · 08 · 2026',
  queResuelve:
    'Modela la trazabilidad de lote en un proceso de producción: desde el lote recibido de proveedor hasta el lote interno de producto terminado. Cuando la producción diaria necesita más de un lote, el sistema selecciona automáticamente por FEFO —fecha de caducidad más próxima primero— y deja el rastro completo de qué lotes de proveedor componen cada lote interno.',
  arquitectura: `db/schema.cds                → modelo de datos (8 entidades)
srv/logistica-service.cds    → servicio: proyecciones + 2 operaciones custom
srv/logistica-service.js     → lógica de negocio: handlers y consumo FEFO
srv/logistica-service-ui.cds → anotaciones Fiori (Productos, Pedidos)`,
  arquitecturaNota:
    'Dos bloques en el modelo: catálogo y pedidos (apoyo técnico de CAP) y trazabilidad de lote — LotesProveedor, LotesInternos, ConsumosLote: el caso real.',
  demuestra: [
    'Consumo FEFO: dada una cantidad a producir, selecciona los lotes de proveedor disponibles por fecha de caducidad más próxima primero, reparte entre tantos lotes como haga falta y deja el rastro en ConsumosLote.',
    'Atomicidad: si no hay stock suficiente, rechaza antes de escribir nada — sin lotes a medias.',
    'Criterio funcional en el modelo: de los 4 productos del catálogo, solo el aceite de oliva —el único perecedero— recibe lotes con caducidad. Un palet no caduca; el modelo no se la fuerza.',
    'Verificado con curl, no solo revisado en el código. Los comandos exactos están en el README.',
  ],
  ejemploFefo: {
    intro:
      'Producir 100 unidades de Aceite de Oliva 5L con 3 lotes disponibles de distinta caducidad:',
    filas: [
      { lote: 'LOTE-2026-001', caducidad: '2027-06-15', antes: '80', despues: '0 (agotado)' },
      { lote: 'LOTE-2026-002', caducidad: '2027-09-01', antes: '65', despues: '45' },
      { lote: 'LOTE-2026-003', caducidad: '2028-01-15', antes: '50', despues: '50 (sin tocar)' },
    ],
    conclusion: '80 + 20 = 100. El orden respeta FEFO.',
  },
  svg: {
    src: '/img/p2/modelo-datos-trazabilidad.svg',
    alt: 'Modelo de datos completo de la trazabilidad de lote',
    caption: 'Modelo de datos de la trazabilidad — LotesProveedor, LotesInternos, ConsumosLote',
  },
  limites: [
    'Sin desplegar: 100 % local (cds watch + SQLite). Nunca Cloud Foundry, ni XSUAA, ni HANA Cloud. Decisión tomada desde el inicio, no limitación por tiempo.',
    'Sin persistencia real entre reinicios — SQLite en memoria.',
    'Sin autenticación.',
    'Sin UI Fiori propia para las entidades de lote.',
    'Pedidos / ItemsPedido no está conectado a los lotes — es un ejercicio de CAP independiente.',
  ],
};

export const p3 = {
  id: 'p3',
  nombre: 'cpi-expiry-alerts',
  tagline: 'Alertas de caducidad conectadas a la recepción',
  repoUrl: 'https://github.com/alcaan16/cpi-expiry-alerts',
  stackLinea: 'SAP Integration Suite (Cloud Integration) · Node.js / Express',
  publicado: '23 · 08 · 2026',
  queResuelve:
    'Conecta la recepción de mercancía con lote de zgr-goods-receipt con una aplicación externa de alertas de vida útil: toma el dato de lote y caducidad que la recepción ya produce y lo entrega a un sistema que clasifica cada lote — caducado, próximo a caducar u ok.',
  porQueEsteCaso:
    'El caso previsto era "sincronización de maestro de materiales", el ejercicio estándar de cualquier curso de Integration Suite. Se descartó porque P1 no gestiona maestros de material: gestiona entradas de mercancía con lote y caducidad. Este caso mantiene el mismo hilo funcional corriendo por los tres proyectos.',
  arquitectura: `Start Timer → Content Modifier (payload de muestra) → Groovy: filtrar borradores
→ Groovy: mapear formato receptor → Request Reply (HTTPS) → receptor Node/Express
[Exception Subprocess con Groovy: capturar fallo]`,
  atajo:
    'P1 dejó sin crear el service binding de API (ZAPI_GR_RECEIPT_O4, OData V4 Web API). Ese binding se construyó al arrancar P3, sobre la service definition ya existente de P1, sin tocar nada más: una service definition admite múltiples bindings.',
  scripts: [
    '01-filtrar-borradores.groovy — descarta entidades en estado borrador (IsActiveEntity: false).',
    '02-mapea-formato-receptor.groovy — recorre Receipt → Item → Batch y produce un registro plano por lote.',
    '03-capturar-fallo.groovy — Exception Subprocess: captura cualquier fallo no controlado del flujo principal.',
  ],
  demuestra: [
    'Exception Subprocess verificado con un fallo real: deteniendo el receptor a propósito, la llamada HTTP falló y la ejecución saltó a la rama de captura. El mensaje terminó como Completed, no como Failed. Es la diferencia entre un flujo que funciona en el camino feliz y uno que se sostiene cuando algo falla.',
    'Criterio de ingeniería documentado: las limitaciones —origen de datos, permisos— están explicadas con precisión: cuál es el bloqueo real y cómo se resolvió sin fingir.',
    'Código real en el repositorio: receiver/ en Node/Express y 3 scripts Groovy, no solo capturas de pantalla.',
  ],
  capturasDestacadas: [
    {
      src: p3FalloCapturado,
      alt: 'Run Steps con el fallo HTTP y la Exception Subprocess ejecutándose',
      caption: 'Run Steps con el fallo HTTP capturado — la Exception Subprocess toma el control',
      ancha: true,
    },
    {
      src: p3Completed,
      alt: 'El mensaje marcado como Completed pese al fallo interno',
      caption: 'El mensaje termina Completed pese al fallo interno del receptor',
      ancha: true,
    },
  ] satisfies Captura[],
  capturasSecundarias: [
    {
      src: p3RunStepsOk,
      alt: 'Run Steps de una ejecución sin errores — los 5 pasos del flujo',
      caption: 'Run Steps de una ejecución sin errores — los 5 pasos del flujo',
      ancha: true,
    },
    {
      src: p3Receptor,
      alt: 'Terminal del receptor: los 3 lotes de la muestra con su clasificación',
      caption: 'Terminal del receptor — los 3 lotes de la muestra con su clasificación',
      ancha: true,
    },
  ] satisfies Captura[],
  decisiones: [
    {
      titulo: 'El origen es un payload de muestra, no sondeo en vivo',
      texto:
        'Exponer la API vía OAuth2 requiere una Communication Arrangement — tarea de administrador, no de desarrollador — y el tenant de curso es compartido y formativo. En lugar de un origen inventado, el Content Modifier usa una respuesta real capturada de la API (con $expand=_Item($expand=_Batch)). En un sistema con permisos administrativos, sustituir este paso por un OData Adapter no afecta al resto del flujo.',
    },
    {
      titulo: 'La entrega sí es en vivo',
      texto:
        'El receptor corre en local y se expone a Internet con un túnel de ngrok. La llamada HTTPS del iFlow sale de la nube de Integration Suite, cruza Internet y llega al proceso local. No todo está simulado — solo la parte con un bloqueo de permisos genuino, señalado con precisión.',
    },
  ],
};
