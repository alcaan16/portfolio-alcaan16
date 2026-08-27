// Trayectoria — fuente: Brief §3. Copy sujeto a las reglas del Brief §8
// ("participé", nunca "lideré"; cifras verificables, sin porcentajes inventados).
export interface Hito {
  periodo: string;
  titulo: string;
  subtitulo?: string;
  parrafos: string[];
  cifras?: { valor: string; label: string }[];
}

export const hitos: Hito[] = [
  {
    periodo: '2007 – 2010',
    titulo: 'Experiencia IT inicial',
    subtitulo: 'Dynos · Intarnet',
    parrafos: [
      'Trabajo en empresas del sector tecnológico. Titulación oficial: ASI (Administración de Sistemas Informáticos), I.E.S. Gran Capitán, Córdoba.',
    ],
  },
  {
    periodo: '2017 – 2025',
    titulo: 'La Carloteña Asados · Responsable de Logística y Control de Stock',
    subtitulo: 'Industria cárnica — pollo, pavo, cerdo · La Carlota, Córdoba',
    parrafos: [
      'Gestión de lote de proveedor y lote interno de fábrica con codificación propia (fecha + secuencial: 202607310198) — el escenario que SAP modela con Batch Management. Registro simultáneo en unidades y kilos por palet (320 und / 650 kg): el escenario que SAP cubre con Catch Weight. Control de caducidades y rotación por fecha (criterio FEFO), regularización de inventario por recuento periódico. ERP: LIBRA (Edisa).',
      'Participé durante ~2 años en la implantación de LIBRA en planta —recepción, deshuesado, manipulado y producción—, definiendo el registro de pesos en recepción y formando a 40–50 operarios en su uso. Es lo que separa a un usuario de ERP de alguien con criterio funcional real.',
      'Alcance real: gestión de inventario — recepción, lote, regularización. Sin compras ni facturación.',
    ],
    cifras: [
      { valor: '30.000', label: 'kg diarios' },
      { valor: '≈10', label: 'camiones / día' },
      { valor: '4', label: 'personas en el equipo' },
      { valor: '40–50', label: 'operarios formados' },
    ],
  },
  {
    periodo: '2026',
    titulo: 'Formación SAP y certificaciones',
    subtitulo: 'Experis Academy · 270 horas',
    parrafos: [
      'IFCT0097 (ABAP Cloud, 205 h) + IFCT0244 (SAP BTP, 65 h). Tres certificaciones SAP Certified Associate obtenidas entre julio y agosto de 2026, las tres en formato System-Based Assessment.',
    ],
  },
  {
    periodo: 'Ahora',
    titulo: 'Portfolio publicado · búsqueda activa',
    parrafos: [
      'Tres proyectos SAP publicados sobre el mismo hilo funcional: recepción → lote → FEFO → alerta de caducidad. Buscando primera posición como desarrollador SAP (ABAP Cloud / BTP) en plantilla — remoto o presencial en Córdoba/Sevilla, con movilidad propia para desplazamientos puntuales.',
    ],
  },
];
